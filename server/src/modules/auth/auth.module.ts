import {Module} from '@nestjs/common';
import {AuthController} from './controllers/auth.controller';
import {AuthService} from './services/auth.service';
import {JwtService} from '@nestjs/jwt';
import {TypeOrmModule} from '@nestjs/typeorm';
import {JwtStrategy} from '@shared/strategies/jwt.strategy';
import {Person} from '../person/entities/person.entity';
import {User} from '../user/entities/user.entity';
import {PersonRecord} from '../person-records/entities/personRecord.entity';
import {Room} from '../room/entities/room.entity';
import {RoomRecord} from '../room-records/entities/roomRecord.entity';
import {Role} from '../role/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Person, PersonRecord, Room, RoomRecord, Role])],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtService],
})
export class AuthModule {}
