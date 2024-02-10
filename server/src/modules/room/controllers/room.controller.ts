import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {RoomService} from '../services';
import {CreateRoomRequest} from '../dto';

@Controller({
  path: 'rooms',
  version: '1',
})
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  public async getAllRooms() {
    return this.roomService.getAll();
  }

  @Get(':id')
  public async getRoomById(@Param('id') id: number) {
    return this.roomService.getOne(id);
  }

  @Post()
  public async addRoom(@Body() addRoomDto: CreateRoomRequest) {
    console.log(addRoomDto);
    return this.roomService.create(addRoomDto);
  }

  @Patch()
  public async editRoom() {
    throw new NotImplementedException();
  }

  @Delete(':id')
  public async deleteRoom(@Param('id') id: number) {
    return this.roomService.delete(id);
  }
}
