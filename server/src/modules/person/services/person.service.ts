import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Person} from '../entities';
import {DeleteResult, Repository} from 'typeorm';
import {CrudOperations} from '@shared/interfaces';

@Injectable()
export class PersonService implements CrudOperations<Person> {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>
  ) {}

  public async create(fields: Omit<Person, 'id'>): Promise<Person> {
    const newPerson = this.personRepository.create(fields);
    return this.personRepository.save(newPerson);
  }

  public async getAll(params: any): Promise<Person[]> {
    return this.personRepository.find();
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
