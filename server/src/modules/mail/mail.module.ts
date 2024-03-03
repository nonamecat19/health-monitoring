import {Module} from '@nestjs/common';
import {MailService} from './services';
import {MailerModule} from '@nestjs-modules/mailer';
import {ConfigService} from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.get('mail'),
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
