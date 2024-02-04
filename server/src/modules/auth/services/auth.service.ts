import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from '../dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../db/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { TokensResponseDto } from '../dto/tokens.response.dto';
import { JwtData, TokenData } from '../../shared/types/jwt.types';
import { verify } from 'jsonwebtoken';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import { ServiceReturnPromise } from '../../shared/types/services.types';
import { ErrorStatusNames } from '../../shared/enums/error.enum';

@Injectable()
export class AuthService {
  private readonly jwtSecret: string;
  private readonly jwtAccessExpire: string;
  private readonly jwtRefreshExpire: string;
  private readonly logger: Logger = new Logger(AuthService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRedis()
    private readonly redis: Redis,
  ) {
    this.jwtSecret = configService.getOrThrow('jwt.jwtSecret');
    this.jwtAccessExpire = configService.getOrThrow('jwt.jwtAccessExpire');
    this.jwtRefreshExpire = configService.getOrThrow('jwt.jwtRefreshExpire');
  }

  public generateAccessJwtToken(user: any): string {
    const payload = { user };
    return this.jwtService.sign(payload, {
      secret: this.jwtSecret,
      expiresIn: this.jwtAccessExpire,
    });
  }

  public generateRefreshJwtToken(user: any): string {
    const payload = { user };
    return this.jwtService.sign(payload, {
      secret: this.jwtSecret,
      expiresIn: this.jwtRefreshExpire,
    });
  }

  public async getUserOrErrorByCredentials(loginDto: LoginDto): ServiceReturnPromise<User> {
    const user = await this.usersRepository.findOne({
      where: {
        nickname: loginDto.login,
      },
      select: {
        nickname: true,
        id: true,
        password: true,
        role: true,
        isMuted: true,
        isBanned: true,
      },
    });
    if (!user) {
      return [null, ErrorStatusNames.NOT_FOUND];
    }

    const result = await bcrypt.compare(loginDto.password, user.password);
    if (!result) {
      return [null, ErrorStatusNames.AUTH_ERROR];
    }

    return [user, null];
  }

  public getTokensByUser(
    user: TokenData,
  ): TokensResponseDto {
    const data = {
      id: user.id,
      role: user.role,
      nickname: user.nickname,
      isMuted: user.isMuted,
    };

    const tokensDto = new TokensResponseDto();
    tokensDto.token = this.generateAccessJwtToken(data);
    tokensDto.refreshToken = this.generateRefreshJwtToken(data);
    tokensDto.user = data;
    return tokensDto;
  }

  public async verifyBearerToken(token: string): ServiceReturnPromise<JwtData> {
    const noBearer = token.split(' ')[1];
    const data = verify(noBearer, this.jwtSecret) as JwtData;
    if (typeof data === 'string') {
      this.logger.error('Wrong format for token: ', data);
      return [null, ErrorStatusNames.AUTH_ERROR];
    }
    const user = await this.usersRepository.findOne({ where: { id: data.user.id } });
    if (!user) {
      this.logger.error('User not found');
      return [null, ErrorStatusNames.NOT_FOUND];
    }
    return [data, null];
  }

  public async registerUser(loginDto: LoginDto) {

  }
}
