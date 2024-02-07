import {Controller, Get, Param} from '@nestjs/common';
import {RoomService} from '../services/room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  public getAllRooms() {
    return this.roomService.getAll();
  }

  @Get('id')
  public async getRoomById(@Param('id') id: number) {
    return this.roomService.getOne(id);
  }
}
