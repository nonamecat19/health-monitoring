import {Controller, Get, Param} from '@nestjs/common';
import {PersonRecordsService} from '../services/person-records.service';

@Controller('person-records')
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
