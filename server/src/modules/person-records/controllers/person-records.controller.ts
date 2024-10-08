import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {PersonRecordsService} from '../services';
import {CreatePersonRecordRequest} from '../requests';
import {GetRoomRecords} from '../../room-records/requests';

@Controller({
  path: 'person-records',
  version: '1',
})
export class PersonRecordsController {
  constructor(private readonly personRecordsService: PersonRecordsService) {}

  @Get()
  public async getAllPersonRecords(@Query() params: GetRoomRecords) {
    return this.personRecordsService.getAll(params);
  }

  @Get('dashboard')
  public async personDashboard(@Query() params: any) {
    return this.personRecordsService.personDashboard(params);
  }

  @Get(':id')
  public async getPersonRecordById(@Param('id') id: number) {
    return this.personRecordsService.getByPersonId(id);
  }

  @Post()
  public async createPersonRecord(@Body() body: CreatePersonRecordRequest) {
    return this.personRecordsService.create(body);
  }

  @Patch()
  public async editPersonRecord(@Body() body: any) {
    return this.personRecordsService.edit(body);
  }

  @Delete(':id')
  public async deletePersonRecordById(@Param('id') id: number) {
    return this.personRecordsService.delete(id);
  }
}
