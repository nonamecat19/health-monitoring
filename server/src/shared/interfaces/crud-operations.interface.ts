import {DeleteResult} from 'typeorm';

export interface CrudOperations<T> {
  create(fields: Partial<T>): Promise<T>;
  getAll(): Promise<T[]>;
  getOne(id: number): Promise<T>;
  edit(fields: Partial<T>): Promise<T>;
  delete(id: number): Promise<DeleteResult>;
}
