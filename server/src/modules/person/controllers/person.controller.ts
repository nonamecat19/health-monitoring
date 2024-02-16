import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {PersonService} from '../services';
import {CreatePersonRequest} from '../requests';
import {MapperService} from '@shared/services';

@Controller({
  path: 'persons',
  version: '1',
})
export class PersonController {
  constructor(
    private readonly personService: PersonService,
    private readonly mapper: MapperService
  ) {}

  @Get()
  public async getAllPersons(@Query() query: any) {
    const persons = await this.personService.getAll(query);
    return this.mapper.mapArrayWithPrefix(persons, {id: 'personId'}, 'data');
  }

  @Get('id')
  public async getPersonById(@Param('id') id: number) {
    return this.personService.getOne(id);
  }

  @Post()
  public async createPerson(@Body() body: CreatePersonRequest) {
    return this.personService.create(body);
  }

  @Patch()
  public async editPerson(@Body() body: any) {
    return this.personService.edit(body);
  }

  @Delete('id')
  public async deletePerson(@Param('id') id: number) {
    return this.personService.delete(id);
  }
}
