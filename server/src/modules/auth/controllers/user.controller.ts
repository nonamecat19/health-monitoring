import {Body, Controller, Logger, Post} from '@nestjs/common';
import {UserRegisterRequest} from '../requests';
import {AuthService} from '../services';
import {createLogger} from '@shared/utils';

@Controller({
  path: 'auth/users',
  version: '1',
})
export class UserController {
  logger: Logger = createLogger(this.constructor);

  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Body() body: UserRegisterRequest) {
    this.logger.debug('aboba');
    console.log(body);

    return 2;
  }
}
