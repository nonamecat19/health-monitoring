import {Module} from '@nestjs/common';
import {RoomRecordsController} from './controllers/room-records.controller';
import {RoomRecordsService} from './services/room-records.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RoomRecord} from './entities/roomRecord.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomRecord])],
  controllers: [RoomRecordsController],
  providers: [RoomRecordsService],
})
export class RoomRecordsModule {}
