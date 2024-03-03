import {DeleteResult, UpdateResult} from 'typeorm';
import {GetAll} from '@shared/interfaces/services.types';

export interface CrudOperations<T> {
  create(fields: Partial<T>): Promise<T>;
  getAll(params: any): Promise<GetAll<T>>;
  getOne(id: number): Promise<T | undefined>;
  edit(fields: Partial<T>): Promise<UpdateResult>;
  delete(id: number): Promise<DeleteResult>;
}
