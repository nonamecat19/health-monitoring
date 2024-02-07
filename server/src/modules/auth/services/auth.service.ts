import {Injectable, Logger} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {LoginDto} from '../dto/login.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import * as bcrypt from 'bcrypt';
import {TokensResponseDto} from '../dto/tokens.response.dto';
import {verify} from 'jsonwebtoken';
import {InjectRedis} from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import {User} from '../../user/entities/user.entity';
import {ErrorStatuses} from '@shared/enums/error.enum';
import {JwtData} from '@shared/types/jwt.types';

@Injectable()
export class AuthService {
  private readonly jwtSecret: string;
  private readonly jwtAccessExpire: string;
  private readonly jwtRefreshExpire: string;
  private readonly crlfTokenTtl: string;
  private readonly logger: Logger = new Logger(AuthService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRedis()
    private readonly redis: Redis
  ) {
    this.jwtSecret = configService.getOrThrow('jwt.jwtSecret');
    this.jwtAccessExpire = configService.getOrThrow('jwt.jwtAccessExpire');
    this.jwtRefreshExpire = configService.getOrThrow('jwt.jwtRefreshExpire');
    this.crlfTokenTtl = configService.getOrThrow('redis.crlfTokenTtl');
  }

  public async generateAccessJwtToken(user: any) {
    const payload = {user};
    return this.jwtService.sign(payload, {
      secret: this.jwtSecret,
      expiresIn: this.jwtAccessExpire,
    });
  }

  public async generateRefreshJwtToken(user: any) {
    const payload = {user};
    return this.jwtService.sign(payload, {
      secret: this.jwtSecret,
      expiresIn: this.jwtRefreshExpire,
    });
  }

  public async getUserOrErrorByCredentials(loginDto: LoginDto): Promise<User | ErrorStatuses> {
    const user = await this.usersRepository.findOne({
      where: {
        email: loginDto.email,
      },
    });
    if (!user) {
      return ErrorStatuses.NOT_FOUND;
    }

    const result = await bcrypt.compare(loginDto.password, user.password);
    if (!result) {
      return ErrorStatuses.AUTH_ERROR;
    }

    return user;
  }

  public async getTokensByUser(
    user: User
  ): Promise<{tokensDto: TokensResponseDto; refreshToken: string}> {
    const data = {
      id: user.id,
      role: user.role,
    };

    const tokensDto = new TokensResponseDto();
    tokensDto.token = await this.generateAccessJwtToken(data);
    const refreshToken = await this.generateRefreshJwtToken(data);
    return {tokensDto, refreshToken};
  }

  public async verifyBearerToken(token: string): Promise<JwtData | ErrorStatuses> {
    const noBearer = token.split(' ')[1];
    const data = verify(noBearer, this.jwtSecret) as JwtData;
    if (typeof data === 'string') {
      this.logger.error('Wrong format for token: ', data);
      return ErrorStatuses.AUTH_ERROR;
    }
    const user = await this.usersRepository.findOne({where: {id: data.user.id}});
    if (!user) {
      this.logger.error('User not found');
      return ErrorStatuses.NOT_FOUND;
    }
    return data;
  }
}
