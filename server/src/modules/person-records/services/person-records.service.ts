import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {PersonRecord} from '../entities';
import {DeleteResult, Repository} from 'typeorm';
import {CrudOperations} from '@shared/interfaces/crud-operations.interface';

@Injectable()
export class PersonRecordsService implements CrudOperations<PersonRecord> {
  constructor(
    @InjectRepository(PersonRecord)
    private readonly personRecordsRepository: Repository<PersonRecord>
  ) {}

  public async create(fields: Omit<PersonRecord, 'id'>): Promise<PersonRecord> {
    throw new Error('Method not implemented.');
  }

  public async getOne(id: number): Promise<PersonRecord> {
    return this.personRecordsRepository.findOneBy({id});
  }

  public async getAll(): Promise<PersonRecord[]> {
    return this.personRecordsRepository.find();
  }

  public async edit(fields: Partial<PersonRecord>): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.personRecordsRepository.delete({id});
  }
}
