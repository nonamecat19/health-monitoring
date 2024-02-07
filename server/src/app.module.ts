import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {JwtModule} from '@nestjs/jwt';
import {ScheduleModule} from '@nestjs/schedule';
import {ThrottlerGuard, ThrottlerModule} from '@nestjs/throttler';
import {APP_GUARD} from '@nestjs/core';
import {PersonModule} from './modules/person/person.module';
import {PersonRecordsModule} from './modules/person-records/person-records.module';
import {RoomModule} from './modules/room/room.module';
import {RoomRecordsModule} from './modules/room-records/room-records.module';
import {RolesModule} from './modules/role/roles.module';
import {AppConfigs} from './shared/config';
import {User} from './modules/user/entities/user.entity';
import {Person} from './modules/person/entities/person.entity';
import {PersonRecord} from './modules/person-records/entities/personRecord.entity';
import {Room} from './modules/room/entities/room.entity';
import {RoomRecord} from './modules/room-records/entities/roomRecord.entity';
import {Role} from './modules/role/entities/role.entity';
import {UserModule} from './modules/user/user.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60_000,
        limit: 10,
      },
    ]),
    // AuthModule,
    // RedisModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'single',
    //     url: configService.getOrThrow<string>('redis.url'),
    //   }),
    //   inject: [ConfigService],
    // }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: AppConfigs,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        ...configService.getOrThrow<Record<string, any>>('database'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User, Person, PersonRecord, Room, RoomRecord, Role]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('jwt.jwtSecret'),
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    PersonModule,
    PersonRecordsModule,
    RoomModule,
    RoomRecordsModule,
    RolesModule,
    UserModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
