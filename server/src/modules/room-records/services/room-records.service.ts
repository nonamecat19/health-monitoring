import {Injectable} from '@nestjs/common';
import {CrudOperations} from '@shared/interfaces';
import {RoomRecord} from '../entities';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Repository, UpdateResult} from 'typeorm';
import {CreateRoomRecordRequest, GetRoomRecords, RoomDashboardRequest} from '../requests';
import {GetAll} from '@shared/interfaces/services.types';
import {every, inRange} from 'lodash';
import {addDays} from 'date-fns';
import {FindOptionsWhere} from 'typeorm/find-options/FindOptionsWhere';

@Injectable()
export class RoomRecordsService implements CrudOperations<RoomRecord> {
  constructor(
    @InjectRepository(RoomRecord)
    private readonly roomRecordRepository: Repository<RoomRecord>
  ) {}

  public async create(fields: CreateRoomRecordRequest): Promise<RoomRecord> {
    const {airIons, carbonDioxide, humidity, ozone, pressure, roomId, temperature} = fields;
    const isCriticalResult = this.isCriticalResults(fields);
    const record = this.roomRecordRepository.create({
      //TODO

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      room: roomId,
      humidity,
      temperature,
      pressure,
      carbonDioxide,
      airIons,
      ozone,
      isCriticalResult,
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return this.roomRecordRepository.save(record);
  }

  public async getAll(params: GetRoomRecords): Promise<GetAll<RoomRecord>> {
    const where: FindOptionsWhere<RoomRecord> = {};
    if (params.onlyCritical) {
      where.isCriticalResult = true;
    }
    console.log({where});
    const [roomRecords, count] = await this.roomRecordRepository.findAndCount({
      relations: {
        room: true,
      },
      where,
    });
    return {
      data: roomRecords,
      maxPage: count,
    };
  }

  public async getOne(id: number): Promise<RoomRecord> {
    return this.roomRecordRepository.findOne({
      where: {id},
      relations: {
        room: true,
      },
    });
  }

  public async edit(fields: Partial<RoomRecord>): Promise<UpdateResult> {
    return this.roomRecordRepository.update({id: fields.id}, fields);
    // return this.roomRecordRepository.findOne({
    //   where: {
    //     id: fields.id,
    //   },
    //   relations: {
    //     room: true,
    //   },
    // });
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.roomRecordRepository.delete({id});
  }

  public isCriticalResults(record: CreateRoomRecordRequest) {
    const {airIons, carbonDioxide, humidity, ozone, pressure, temperature} = record;

    return !every([
      inRange(humidity, 40.0, 61.0),
      inRange(temperature, 19.0, 25.0),
      inRange(pressure, 750.0, 771.0),
      inRange(carbonDioxide, 400.0, 601.0),
      inRange(airIons, 400.0, 601.0),
      inRange(ozone, 0.1, 0.17),
    ]);
  }

  public async roomDashboard(params: RoomDashboardRequest): Promise<RoomRecord[]> {
    const {day, id, month, year} = params;
    const startDate = new Date(year, month - 1, day);
    const finishDate = addDays(startDate, 1);

    const qb = this.roomRecordRepository
      .createQueryBuilder('record')
      .leftJoinAndSelect('record.room', 'room')
      .where('record.createdAt BETWEEN :startDate AND :finishDate', {startDate, finishDate});

    if (id) {
      qb.andWhere('room.id = :id', {id});
    }
    return qb.getMany();
  }
}
