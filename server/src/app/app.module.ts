import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt';
import {ScheduleModule} from '@nestjs/schedule';
import {ThrottlerModule} from '@nestjs/throttler';
import {AppConfigs} from '@shared/config';
import {AppDbImports} from './appDbImports';
import {appGlobalProviders} from './appGlobalProviders';
import {customModules} from './customModules';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60_000,
        limit: 30,
      },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: AppConfigs,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('jwt.jwtSecret'),
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    ...customModules,
    ...AppDbImports,
  ],
  providers: [...appGlobalProviders],
})
export class AppModule {}
