import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  NotFoundException,
  Post,
  Query,
} from '@nestjs/common';
import {ConfirmEmailRequest, ResetPasswordRequest, UserRegisterRequest} from '../requests';
import {createLogger} from '@shared/utils';
import {MailService} from '../../mail/services';
import {PersonService} from '../../person/services';
import {AuthService} from '../services';

@Controller({
  path: 'auth/users',
  version: '1',
})
export class UserAuthController {
  private readonly logger: Logger = createLogger(this);

  constructor(
    private readonly mailService: MailService,
    private readonly personService: PersonService,
    private readonly authService: AuthService
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  public async register(@Body() body: UserRegisterRequest) {
    this.logger.debug(body);
    const user = await this.personService.getOneBy({email: body.email});
    if (!user) {
      throw new NotFoundException();
    }
    //TODO: generate
    const code = '111222';
    const sendCode = this.mailService.confirmEmail(code, body.email);
    const registerPerson = this.authService.registerExistingPerson(user.id, code, body.password);
    await Promise.all([sendCode, registerPerson]);
  }

  @Post('confirmEmail')
  public async confirmEmail(@Body() body: ConfirmEmailRequest) {
    const user = await this.personService.getOneBy({email: body.email});
    if (!user) {
      throw new NotFoundException();
    }
    if (user.confirmCode !== body.code) {
      throw new BadRequestException('Confirm code wrong');
    }
    await this.personService.edit({id: user.id, confirmed: true, confirmCode: null});
  }

  @Post('resetPassword')
  public async resetPassword(@Body() body: ResetPasswordRequest) {
    const user = await this.personService.getOneBy({email: body.email});
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const code = await this.mailService.resetPassword(body.email);
  }

  @Get('confirmResetPassword')
  public async confirmResetPassword(@Query() query: any) {
    this.logger.debug(query);
  }
}
