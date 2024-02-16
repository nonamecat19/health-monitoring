import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Person} from '../entities';
import {DeleteResult, Repository} from 'typeorm';
import {CrudOperations} from '@shared/interfaces';
import {CreatePersonRequest} from '../requests';
import {GetAll} from '@shared/interfaces/services.types';

@Injectable()
export class PersonService implements CrudOperations<Person> {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>
  ) {}

  public async create(fields: CreatePersonRequest): Promise<Person> {
    const newPerson = this.personRepository.create(fields);
    return this.personRepository.save(newPerson);
  }

  public async getAll(params: any): Promise<GetAll<Person>> {
    const [persons, count] = await this.personRepository.findAndCount();
    return {
      data: persons,
      maxPage: count,
    };
  }

  public async getOne(id: number): Promise<Person> {
    return this.personRepository.findOneBy({id});
  }

  public async edit(fields: Partial<Person>): Promise<Person> {
    throw new Error('Method not implemented.');
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.personRepository.delete({id});
  }
}
