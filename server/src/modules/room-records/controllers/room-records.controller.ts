import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {
  CreateRoomRecordRequest,
  EditRoomRecordRequest,
  GetRoomRecords,
  RoomDashboardRequest,
} from '../requests';
import {RoomRecordsService} from '../services';

@Controller({
  path: 'room-records',
  version: '1',
})
export class RoomRecordsController {
  constructor(private readonly roomRecordsService: RoomRecordsService) {}

  @Get()
  public async getAllRoomRecords(@Query() query: GetRoomRecords) {
    return this.roomRecordsService.getAll(query);
  }

  @Get('dashboard')
  public async roomDashboard(@Query() query: RoomDashboardRequest) {
    return this.roomRecordsService.roomDashboard(query);
  }

  @Get(':id')
  public async getRoomRecordById(@Param('id') id: number) {
    return this.roomRecordsService.getByRoomId(id);
  }

  @Post()
  public async createRoomRecord(@Body() body: CreateRoomRecordRequest) {
    return this.roomRecordsService.create(body);
  }

  @Patch()
  public async editRoomRecord(@Body() body: EditRoomRecordRequest) {
    return this.roomRecordsService.edit(body);
  }

  @Delete(':id')
  public async deleteRoomRecord(@Param('id') id: number) {
    return this.roomRecordsService.delete(id);
  }
}
