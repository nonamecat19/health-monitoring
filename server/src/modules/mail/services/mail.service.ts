import {Injectable, Logger} from '@nestjs/common';
import {MailerService} from '@nestjs-modules/mailer';
import {InjectRedis} from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import {v4 as uuidv4} from 'uuid';
import {createLogger} from '@shared/utils';

@Injectable()
export class MailService {
  private readonly logger: Logger = createLogger(this);
  constructor(
    private readonly mailerService: MailerService,
    @InjectRedis() private readonly redis: Redis
  ) {}

  public async confirmEmail(code: string, mail: string) {
    const result = await this.mailerService.sendMail({
      to: mail,
      text: code,
    });
    console.log(result);
  }

  public async resetPassword(mail: string) {
    const code = uuidv4();
    this.logger.debug(code);
  }
}
