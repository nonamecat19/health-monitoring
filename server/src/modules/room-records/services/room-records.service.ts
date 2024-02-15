import {Injectable} from '@nestjs/common';
import {CrudOperations} from '@shared/interfaces';
import {RoomRecord} from '../entities';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Repository} from 'typeorm';
import {CreateRoomRecordDto} from '../dto';
import {GetAll} from '@shared/interfaces/services.types';

@Injectable()
export class RoomRecordsService implements CrudOperations<RoomRecord> {
  constructor(
    @InjectRepository(RoomRecord)
    private readonly roomRecordRepository: Repository<RoomRecord>
  ) {}

  public async create(fields: CreateRoomRecordDto): Promise<RoomRecord> {
    const record = this.roomRecordRepository.create(fields);
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
}
