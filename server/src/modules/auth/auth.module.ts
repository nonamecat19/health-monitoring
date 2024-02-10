import {Module} from '@nestjs/common';
import {AuthController, UserController} from './controllers';
import {AuthService} from './services';
import {JwtService} from '@nestjs/jwt';
import {TypeOrmModule} from '@nestjs/typeorm';
import {JwtStrategy} from '@shared/strategies/jwt.strategy';
import {User} from '../user/entities';
import {Person} from '../person/entities';
import {PersonRecord} from '../person-records/entities';
import {Room} from '../room/entities';
import {RoomRecord} from '../room-records/entities';
import {Role} from '../role/entities';

@Module({
  imports: [TypeOrmModule.forFeature([User, Person, PersonRecord, Room, RoomRecord, Role])],
  controllers: [AuthController, UserController],
  providers: [AuthService, JwtStrategy, JwtService],
})
export class AuthModule {}
