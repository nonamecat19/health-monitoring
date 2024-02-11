import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {CreateRoomRecordDto} from '../dto/create-room-record.dto';
import {RoomRecordsService} from '../services';

@Controller({
  path: 'room-records',
  version: '1',
})
export class RoomRecordsController {
  constructor(private readonly roomRecordsService: RoomRecordsService) {}

  @Get()
  public async getAllRoomRecords() {
    return this.roomRecordsService.getAll();
  }

  @Get(':id')
  public async getRoomRecordById(@Param('id') id: number, @Query() query: any) {
    return this.roomRecordsService.getOne(id);
  }

  @Post()
  public async createRoomRecord(@Body() body: CreateRoomRecordDto) {
    return this.roomRecordsService.create(body);
  }
}
