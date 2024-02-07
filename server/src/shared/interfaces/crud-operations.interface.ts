import {DeleteResult} from 'typeorm';

export interface CrudOperations<T> {
  create(fields: Omit<T, 'id'>): Promise<T>;
  getAll(): Promise<T[]>;
  getOne(id: number): Promise<T>;
  edit(id: number, fields: Partial<T>): Promise<void>;
  delete(id: number): Promise<DeleteResult>;
}
