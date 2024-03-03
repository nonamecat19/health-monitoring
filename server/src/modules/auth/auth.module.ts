import {Module} from '@nestjs/common';
import {AuthController, UserAuthController} from './controllers';
import {AuthService} from './services';
import {JwtService} from '@nestjs/jwt';
import {JwtStrategy} from '@shared/strategies';
import {MailModule} from '../mail/mail.module';
import {PersonModule} from '../person/person.module';

@Module({
  imports: [MailModule, PersonModule],
  controllers: [AuthController, UserAuthController],
  providers: [AuthService, JwtStrategy, JwtService],
})
export class AuthModule {}
