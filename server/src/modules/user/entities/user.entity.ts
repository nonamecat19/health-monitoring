import {Column, Entity} from 'typeorm';
import {PersonRole} from '@shared/constants';
import {BaseEntity} from '@shared/clases/baseEntity';

@Entity()
export class User extends BaseEntity {
  @Column({default: PersonRole.Student})
  role: string;

  @Column({unique: true, length: 30})
  email: string;

  @Column({select: false})
  password: string;

  constructor(item: Partial<User>) {
    super();
    Object.assign(this, item);
  }
}
