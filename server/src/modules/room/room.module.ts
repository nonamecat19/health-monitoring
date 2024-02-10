import {Module} from '@nestjs/common';
import {RoomController} from './controllers';
import {RoomService} from './services';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Room} from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
