import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Room} from '../entities/room.entity';
import {DeleteResult, Repository} from 'typeorm';
import {CrudOperations} from '@shared/interfaces/crud-operations.interface';

@Injectable()
export class RoomService implements CrudOperations<Room> {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>
  ) {}

  public async create(fields: Omit<Room, 'id'>): Promise<Room> {
    throw new Error('Method not implemented.');
  }

  public async getAll(): Promise<Room[]> {
    return this.roomRepository.find();
  }

  public async getOne(id: number): Promise<Room> {
    return this.roomRepository.findOneBy({id});
  }

  public async edit(id: number, fields: Partial<Room>): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.roomRepository.delete({id});
  }
}
