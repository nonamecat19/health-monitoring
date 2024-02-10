import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Room} from '../entities';
import {DeleteResult, Repository} from 'typeorm';
import {CrudOperations} from '@shared/interfaces/crud-operations.interface';
import {CreateRoomRequest} from '../dto';

@Injectable()
export class RoomService implements CrudOperations<Room> {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>
  ) {}

  public async create(fields: CreateRoomRequest): Promise<Room> {
    const newRoom = this.roomRepository.create(fields);
    return await this.roomRepository.save(newRoom);
  }

  public async getAll(): Promise<Room[]> {
    return this.roomRepository.find();
  }

  public async getOne(id: number): Promise<Room> {
    return this.roomRepository.findOneBy({id});
  }

  public async edit(fields: Partial<Room>): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.roomRepository.delete({id});
  }
}
