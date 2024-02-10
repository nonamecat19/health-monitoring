import {Controller, Get, Param} from '@nestjs/common';
import {PersonService} from '../services';

@Controller({
  path: 'persons',
  version: '1',
})
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
