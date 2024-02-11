import {Module} from '@nestjs/common';
import {RoomController} from './controllers';
import {RoomService} from './services';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Room} from './entities';
import {MapperService} from '@shared/services/mapper.service';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [RoomController],
  providers: [RoomService, MapperService],
})
export class RoomModule {}
