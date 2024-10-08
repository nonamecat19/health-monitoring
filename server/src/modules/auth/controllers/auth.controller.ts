import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import {AuthService} from '../services';
import {LoginRequest} from '../requests';
import {JwtService} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {FastifyReply} from 'fastify';
import {ErrorMessages, ErrorStatuses} from '@shared/enums';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  refreshToken: string;
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {
    this.refreshToken = this.configService.get<string>('cookie.refreshToken');
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  public async login(@Body() loginDto: LoginRequest, @Res() reply: FastifyReply) {
    const userOrError = await this.authService.getUserOrErrorByCredentials(loginDto);
    if (typeof userOrError !== 'number') {
      const {tokensDto} = await this.authService.getTokensByUser(userOrError);
      reply.send(tokensDto);
      return;
    }

    if (userOrError === ErrorStatuses.AUTH_ERROR) {
      throw new UnauthorizedException(ErrorMessages[ErrorStatuses.AUTH_ERROR]);
    } else {
      throw new BadRequestException(ErrorMessages[ErrorStatuses[userOrError]]);
    }
  }

  // @Post('refresh')
  // async refresh(@Res() res: Response, @Req() req: Request) {
  //   const oldRefreshToken = req.cookies[this.REFRESH_TOKEN];
  //   const user = this.jwtService.verify(oldRefreshToken);
  //
  //   const {tokensDto, refreshToken} = await this.authService.getTokensByUser(user);
  //   res.cookie(this.REFRESH_TOKEN, refreshToken, {
  //     httpOnly: true,
  //     secure: true,
  //     sameSite: 'strict',
  //   });
  //   return res.send(tokensDto);
  // }
}
