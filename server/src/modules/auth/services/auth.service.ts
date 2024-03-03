import {Injectable, Logger} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {LoginRequest, UserRegisterRequest} from '../requests';
import * as bcrypt from 'bcrypt';
import {verify} from 'jsonwebtoken';
import {InjectRedis} from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import {ErrorStatuses} from '@shared/enums';
import {JwtData} from '../types';
import {PersonService} from '../../person/services';
import {Person} from '../../person/entities';
import {createLogger} from '@shared/utils';

@Injectable()
export class AuthService {
  private readonly logger: Logger = createLogger(this);

  private readonly jwtSecret: string;
  private readonly jwtAccessExpire: string;
  private readonly jwtRefreshExpire: string;

  constructor(
    private readonly jwtService: JwtService,
    private readonly personService: PersonService,
    private readonly configService: ConfigService,
    @InjectRedis()
    private readonly redis: Redis
  ) {
    //TODO: to joi
    this.jwtSecret = configService.getOrThrow('jwt.jwtSecret');
    this.jwtAccessExpire = configService.getOrThrow('jwt.jwtAccessExpire');
    this.jwtRefreshExpire = configService.getOrThrow('jwt.jwtRefreshExpire');
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

  public async getUserOrErrorByCredentials(
    loginDto: LoginRequest
  ): Promise<Person | ErrorStatuses> {
    const user = await this.personService.getOneBy({
      email: loginDto.email,
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
    user: Person
  ): Promise<{tokensDto: {token: string}; refreshToken: string}> {
    const data = {
      id: user.id,
      role: user.role,
    };

    const tokensDto = {
      token: await this.generateAccessJwtToken(data),
    };
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
    const user = await this.personService.getOne(data.user.id);
    if (!user) {
      this.logger.error('User not found');
      return ErrorStatuses.NOT_FOUND;
    }
    return data;
  }

  public async hashPassword(password: string) {
    return bcrypt.hash(password, this.configService.get('jwt.saltOrRounds'));
  }

  public async registerExistingPerson(personId: number, confirmCode: string, password: string) {
    const hashedPassword = await this.hashPassword(password);
    await this.personService.edit({
      id: personId,
      password: hashedPassword,
      confirmCode,
    });
  }
}
