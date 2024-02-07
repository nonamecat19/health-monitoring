import {Controller, Get, Param} from '@nestjs/common';
import {PersonService} from '../services/person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  public async getAllPersons() {
    return this.personService.getAll();
  }

  @Get('id')
  public async getPersonById(@Param('id') id: number) {
    return this.personService.getOne(id);
  }
}
