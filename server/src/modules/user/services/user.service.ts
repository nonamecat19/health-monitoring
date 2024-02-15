import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from '../entities';
import {DeleteResult, Repository} from 'typeorm';
import {CrudOperations} from '@shared/interfaces';
import {GetAll} from '@shared/interfaces/services.types';

@Injectable()
export class UserService implements CrudOperations<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  public async create(fields: Omit<User, 'id'>): Promise<User> {
    return this.userRepository.save(fields);
  }

  public async getAll(): Promise<GetAll<User>> {
    const [users, count] = await this.userRepository.findAndCount();
    return {
      data: users,
      maxPage: count,
    };
  }

  public async getOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({id});
  }

  public async edit(fields: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete({id});
  }
}
