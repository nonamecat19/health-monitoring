import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {CreateRoomRecordDto, EditRoomRecordDto} from '../dto';
import {RoomRecordsService} from '../services';

@Controller({
  path: 'room-records',
  version: '1',
})
export class RoomRecordsController {
  constructor(private readonly roomRecordsService: RoomRecordsService) {}

  @Get()
  public async getAllRoomRecords(@Query() query: any) {
    return this.roomRecordsService.getAll(query);
  }

  @Get(':id')
  public async getRoomRecordById(@Param('id') id: number) {
    return this.roomRecordsService.getOne(id);
  }

  @Post()
  public async createRoomRecord(@Body() body: CreateRoomRecordDto) {
    return this.roomRecordsService.create(body);
  }

  @Patch()
  public async editRoomRecord(@Body() body: EditRoomRecordDto) {
    return this.roomRecordsService.edit(body);
  }

  @Delete(':id')
  public async deleteRoomRecord(@Param('id') id: number) {
    return this.roomRecordsService.delete(id);
  }
}
