import {Injectable} from '@nestjs/common';
import {CrudOperations} from '../../../shared/interfaces/crud-operations.interface';
import {Role} from '../entities/role.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Repository} from 'typeorm';

@Injectable()
export class RoleService implements CrudOperations<Role> {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>
  ) {}

  public async create(fields: Omit<Role, 'id'>): Promise<Role> {
    throw new Error('Method not implemented.');
  }

  public async getAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  public async getOne(id: number): Promise<Role> {
    return this.roleRepository.findOneBy({id});
  }

  public async edit(id: number, fields: Partial<Role>): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.roleRepository.delete({id});
  }
}
