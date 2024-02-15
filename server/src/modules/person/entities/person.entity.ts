import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {PersonRecord} from '../../person-records/entities';
import {PersonRole} from '@shared/constants';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  studentID: number;

  @Column()
  name: string;

  @Column({nullable: true})
  studyGroup: string;

  @Column({default: PersonRole.Student})
  role: string;

  @Column()
  email: string;

  @OneToMany(() => PersonRecord, personRecord => personRecord.id)
  personRecord: PersonRecord[];

  constructor(item: Partial<Person>) {
    Object.assign(this, item);
  }
}
