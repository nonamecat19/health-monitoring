import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {PersonRecord} from '../entities';
import {DeleteResult, Repository} from 'typeorm';
import {CrudOperations} from '@shared/interfaces';
import {GetAll} from '@shared/interfaces/services.types';
import {CreatePersonRecordRequest} from '../dto';
import {every, inRange} from 'lodash';

@Injectable()
export class PersonRecordsService implements CrudOperations<PersonRecord> {
  constructor(
    @InjectRepository(PersonRecord)
    private readonly personRecordsRepository: Repository<PersonRecord>
  ) {}

  public async create(entity: CreatePersonRecordRequest): Promise<PersonRecord> {
    const {heartRate, personId, roomId, saturation, temperature} = entity;

    const isCriticalResult = this.isCriticalResults(entity);
    const newRecord = this.personRecordsRepository.create({
      person: {
        id: personId,
      },
      room: {
        id: roomId,
      },
      saturation,
      heartRate,
      temperature,
      isCriticalResult,
    });
    return this.personRecordsRepository.save(newRecord);
  }

  public async getOne(id: number): Promise<PersonRecord> {
    return this.personRecordsRepository.findOneBy({id});
  }

  public async getAll(): Promise<GetAll<PersonRecord>> {
    const [personRecords, count] = await this.personRecordsRepository.findAndCount();
    return {
      data: personRecords,
      maxPage: count,
    };
  }

  public async edit(fields: Partial<PersonRecord>): Promise<PersonRecord> {
    throw new Error('Method not implemented.');
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.personRecordsRepository.delete({id});
  }

  public isCriticalResults(fields: CreatePersonRecordRequest) {
    const {heartRate, saturation, temperature} = fields;

    return !every([
      inRange(saturation, 95, 100),
      inRange(heartRate, 60, 70),
      inRange(temperature, 36.4, 36.8),
    ]);
  }
}
