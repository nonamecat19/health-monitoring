import {Entity, Column, OneToMany} from 'typeorm';
import {PersonRecord} from '../../person-records/entities';
import {PersonRole} from '@shared/constants';
import {BaseEntity} from '@shared/clases/baseEntity';

@Entity()
export class Person extends BaseEntity {
  @Column({nullable: true, unique: true})
  studentID: number;

  @Column()
  name: string;

  @Column({nullable: true})
  studyGroup: string;

  @Column({default: PersonRole.Student})
  role: string;

  @Column({nullable: true, unique: true})
  email: string;

  @OneToMany(() => PersonRecord, ({id}) => id)
  personRecord: PersonRecord[];

  constructor(item: Partial<Person>) {
    super();
    Object.assign(this, item);
  }
}
