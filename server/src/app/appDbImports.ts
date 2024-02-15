import {ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RedisModule} from '@nestjs-modules/ioredis';
import {DynamicModule} from '@nestjs/common';
import {User} from '../modules/user/entities';
import {Person} from '../modules/person/entities';
import {PersonRecord} from '../modules/person-records/entities';
import {Room} from '../modules/room/entities';
import {RoomRecord} from '../modules/room-records/entities';

export const AppDbImports: DynamicModule[] = [
  RedisModule.forRootAsync({
    useFactory: (configService: ConfigService) => ({
      type: 'single',
      url: configService.getOrThrow<string>('redis.url'),
    }),
    inject: [ConfigService],
  }),
  TypeOrmModule.forRootAsync({
    useFactory: (configService: ConfigService) => ({
      ...configService.getOrThrow<Record<string, any>>('database'),
      autoLoadEntities: true,
    }),
    inject: [ConfigService],
  }),
  TypeOrmModule.forFeature([User, Person, PersonRecord, Room, RoomRecord]),
];
