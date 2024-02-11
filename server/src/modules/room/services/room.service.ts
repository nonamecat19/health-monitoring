import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Room} from '../entities';
import {DeleteResult, Repository} from 'typeorm';
import {CrudOperations} from '@shared/interfaces';
import {CreateRoomRequest, EditRoomRequest} from '../dto';

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

  public async edit(fields: EditRoomRequest): Promise<Room> {
    await this.roomRepository.update({id: fields.id}, fields);
    return this.roomRepository.findOneBy({id: fields.id});
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.roomRepository.delete({id});
  }
}
