import {Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post} from '@nestjs/common';
import {RoomService} from '../services';
import {CreateRoomRequest, EditRoomRequest} from '../requests';
import {MapperService} from '@shared/services';

@Controller({
  path: 'rooms',
  version: '1',
})
export class RoomController {
  constructor(
    private readonly roomService: RoomService,
    private readonly mapper: MapperService
  ) {}

  @Get()
  public async getAllRooms() {
    const rooms = await this.roomService.getAll();
    return this.mapper.mapArray(rooms.data, {id: 'roomId'});
  }

  @Get(':id')
  public async getRoomById(@Param('id') id: number) {
    return this.roomService.getOne(id);
  }

  @Post()
  public async addRoom(@Body() body: CreateRoomRequest) {
    return this.roomService.create(body);
  }

  @Patch()
  public async editRoom(@Body() body: EditRoomRequest) {
    return this.roomService.edit(body);
  }

  @Delete(':id')
  public async deleteRoom(@Param('id') id: number) {
    const deleteResult = await this.roomService.delete(id);
    if (!deleteResult.affected) {
      throw new NotFoundException();
    }
  }
}
