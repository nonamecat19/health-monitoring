import {Module} from '@nestjs/common';
import {RoomRecordsController} from './controllers';
import {RoomRecordsService} from './services';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RoomRecord} from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([RoomRecord])],
  controllers: [RoomRecordsController],
  providers: [RoomRecordsService],
})
export class RoomRecordsModule {}
