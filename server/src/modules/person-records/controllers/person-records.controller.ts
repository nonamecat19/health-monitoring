import {Controller, Get, Param} from '@nestjs/common';
import {PersonRecordsService} from '../services';

@Controller({
  path: 'person-records',
  version: '1',
})
export class PersonRecordsController {
  constructor(private readonly personRecordsService: PersonRecordsService) {}

  @Get()
  public async getAllPersonRecords() {
    return this.personRecordsService.getAll();
  }

  @Get('id')
  public async getPersonRecordById(@Param('id') id: number) {
    return this.personRecordsService.getOne(id);
  }
}
