import {Entity, Column, OneToMany} from 'typeorm';
import {PersonRecord} from '../../person-records/entities';
import {PersonRole} from '@shared/constants';
import {BaseEntity} from '@shared/clases/baseEntity';

@Entity()
export class Person extends BaseEntity {
  @Column({nullable: true, unique: true})
  studentID: number;

  @Column({nullable: true})
  name: string;

  @Column({nullable: true})
  surname: string;

  @Column({nullable: true})
  patronymic: string;

  //TODO: to table
  @Column({nullable: true})
  studyGroup: string;

  @Column({default: PersonRole.Student})
  role: string;

  @Column({unique: true})
  email: string;

  @Column({nullable: true, select: false})
  password: string;

  @Column({nullable: true, select: false})
  confirmCode: string;

  @Column({default: false})
  confirmed: boolean;

  @OneToMany(() => PersonRecord, ({id}) => id)
  personRecord: PersonRecord[];

  constructor(item: Partial<Person>) {
    super();
    Object.assign(this, item);
  }
}
