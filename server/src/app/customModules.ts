import {AuthModule} from '../modules/auth/auth.module';
import {PersonModule} from '../modules/person/person.module';
import {PersonRecordsModule} from '../modules/person-records/person-records.module';
import {RoomModule} from '../modules/room/room.module';
import {RoomRecordsModule} from '../modules/room-records/room-records.module';
import {RolesModule} from '../modules/role/roles.module';
import {UserModule} from '../modules/user/user.module';

export const customModules = [
  AuthModule,
  PersonModule,
  PersonRecordsModule,
  RoomModule,
  RoomRecordsModule,
  RolesModule,
  UserModule,
];
