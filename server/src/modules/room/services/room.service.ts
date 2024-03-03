import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Room} from '../entities';
import {DeleteResult, Repository, UpdateResult} from 'typeorm';
import {CrudOperations} from '@shared/interfaces';
import {CreateRoomRequest, EditRoomRequest} from '../requests';
import {GetAll} from '@shared/interfaces/services.types';

@Injectable()
export class RoomService implements CrudOperations<Room> {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>
  ) {}

  public async create(fields: CreateRoomRequest): Promise<Room> {
    const newRoom = this.roomRepository.create(fields);
    return this.roomRepository.save(newRoom);
  }

  public async getAll(): Promise<GetAll<Room>> {
    const [rooms, count] = await this.roomRepository.findAndCount();
    return {
      data: rooms,
      maxPage: count,
    };
  }

  public async getOne(id: number): Promise<Room> {
    return this.roomRepository.findOneBy({id});
  }

  public async edit(fields: EditRoomRequest): Promise<UpdateResult> {
    return this.roomRepository.update({id: fields.id}, fields);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.roomRepository.delete({id});
  }
}
