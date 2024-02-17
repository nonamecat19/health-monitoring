import {Injectable} from '@nestjs/common';
import {CrudOperations} from '@shared/interfaces';
import {RoomRecord} from '../entities';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Repository} from 'typeorm';
import {CreateRoomRecordRequest} from '../requests';
import {GetAll} from '@shared/interfaces/services.types';
import {every, inRange} from 'lodash';
import {RoomDashboardRequest} from '../requests/room-dashboard.request';
import {addDays} from 'date-fns';

@Injectable()
export class RoomRecordsService implements CrudOperations<RoomRecord> {
  constructor(
    @InjectRepository(RoomRecord)
    private readonly roomRecordRepository: Repository<RoomRecord>
  ) {}

  public async create(fields: CreateRoomRecordRequest): Promise<RoomRecord> {
    console.log(fields);
    const {airIons, carbonDioxide, humidity, ozone, pressure, roomId, temperature} = fields;
    const isCriticalResult = this.isCriticalResults(fields);
    const record = this.roomRecordRepository.create({
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
    console.log(record);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return this.roomRecordRepository.save(record);
  }

  public async getAll(params: any): Promise<GetAll<RoomRecord>> {
    const [roomRecords, count] = await this.roomRecordRepository.findAndCount();
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

  public async edit(fields: Partial<RoomRecord>): Promise<RoomRecord> {
    await this.roomRecordRepository.update({id: fields.id}, fields);
    return this.roomRecordRepository.findOne({
      where: {
        id: fields.id,
      },
      relations: {
        room: true,
      },
    });
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.roomRecordRepository.delete({id});
  }

  public isCriticalResults(record: CreateRoomRecordRequest) {
    const {airIons, carbonDioxide, humidity, ozone, pressure, temperature} = record;

    return !every([
      inRange(humidity, 40, 61),
      inRange(temperature, 19, 25),
      inRange(pressure, 750, 771),
      inRange(carbonDioxide, 400, 601),
      inRange(airIons, 400, 601),
      inRange(ozone, 0.1, 0.17),
    ]);
  }

  public async roomDashboard(params: RoomDashboardRequest): Promise<RoomRecord[]> {
    const {day, id, month, year} = params;
    const startDate = new Date(year, month - 1, day);
    const finishDate = addDays(startDate, 1);

    const qb = this.roomRecordRepository
      .createQueryBuilder('record')
      .where('record.createdAt BETWEEN :startDate AND :finishDate', {startDate, finishDate});

    if (id) {
      qb.leftJoin('record.room', 'room').andWhere('room.id = :id', {id});
    }
    return qb.getMany();
  }
}
