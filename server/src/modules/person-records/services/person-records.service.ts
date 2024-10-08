import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {PersonRecord} from '../entities';
import {DeleteResult, Repository, UpdateResult} from 'typeorm';
import {CrudOperations} from '@shared/interfaces';
import {GetAll} from '@shared/interfaces';
import {CreatePersonRecordRequest} from '../requests';
import {every, inRange} from 'lodash';
import {addDays} from 'date-fns';
import {GetRoomRecords} from '../../room-records/requests';
import {FindOptionsWhere} from 'typeorm/find-options/FindOptionsWhere';

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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      person: personId,
      room: roomId,
      saturation,
      heartRate,
      temperature,
      isCriticalResult,
    }) as PersonRecord;

    return this.personRecordsRepository.save(newRecord);
  }

  public async getOne(id: number): Promise<PersonRecord> {
    return this.personRecordsRepository.findOneBy({id});
  }

  public async getByPersonId(id: number): Promise<GetAll<PersonRecord>> {
    const where: FindOptionsWhere<PersonRecord> = {person: {id}};
    const [personRecords, count] = await this.personRecordsRepository.findAndCount({
      relations: {
        person: true,
        room: true,
      },
      where,
    });
    return {
      data: personRecords,
      maxPage: count,
    };
  }

  public async getAll(params: GetRoomRecords): Promise<GetAll<PersonRecord>> {
    const where: FindOptionsWhere<PersonRecord> = {};
    if (params.onlyCritical) {
      where.isCriticalResult = true;
    }
    const [personRecords, count] = await this.personRecordsRepository.findAndCount({
      relations: {
        person: true,
        room: true,
      },
      where,
    });
    return {
      data: personRecords,
      maxPage: count,
    };
  }

  public async edit(fields: Partial<PersonRecord>): Promise<UpdateResult> {
    return this.personRecordsRepository.update({id: fields.id}, fields);
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

  public async personDashboard(params: any): Promise<PersonRecord[]> {
    const {day, id, month, year} = params;
    const startDate = new Date(year, month - 1, day);
    const finishDate = addDays(startDate, 1);

    const qb = this.personRecordsRepository
      .createQueryBuilder('record')
      .leftJoinAndSelect('record.room', 'room')
      .leftJoinAndSelect('record.person', 'person')
      .where('record.createdAt BETWEEN :startDate AND :finishDate', {startDate, finishDate});

    if (id) {
      qb.andWhere('room.id = :id', {id});
    }
    return qb.getMany();
  }
}
