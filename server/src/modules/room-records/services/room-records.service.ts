import {Injectable} from '@nestjs/common';
import {CrudOperations} from '@shared/interfaces';
import {RoomRecord} from '../entities';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Repository} from 'typeorm';

@Injectable()
export class RoomRecordsService implements CrudOperations<RoomRecord> {
  constructor(
    @InjectRepository(RoomRecord)
    private readonly roomRecordRepository: Repository<RoomRecord>
  ) {}

  public async create(fields: Omit<RoomRecord, 'id'>): Promise<RoomRecord> {
    throw new Error('Method not implemented.');
  }

  public async getAll(): Promise<RoomRecord[]> {
    return this.roomRecordRepository.find();
  }

  public async getOne(id: number): Promise<RoomRecord> {
    return this.roomRecordRepository.findOneBy({id});
  }

  public async edit(fields: Partial<RoomRecord>): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.roomRecordRepository.delete({id});
  }
}
