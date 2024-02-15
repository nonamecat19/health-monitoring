import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {PersonService} from '../services';

@Controller({
  path: 'persons',
  version: '1',
})
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  public async getAllPersons(@Query() query: any) {
    return this.personService.getAll(query);
  }

  @Get('id')
  public async getPersonById(@Param('id') id: number) {
    return this.personService.getOne(id);
  }

  @Post()
  public async createPerson(@Body() body: any) {
    return this.personService.create(body);
  }
}
