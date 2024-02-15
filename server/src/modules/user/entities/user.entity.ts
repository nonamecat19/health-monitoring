import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {PersonRole} from '@shared/constants';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default: PersonRole.Student})
  role: string;

  @Column({unique: true, length: 30})
  email: string;

  @Column({select: false})
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(item: Partial<User>) {
    Object.assign(this, item);
  }
}
