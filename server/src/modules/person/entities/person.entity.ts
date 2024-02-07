import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm';
import {PersonRecord} from '../../person-records/entities/personRecord.entity';
import {Role} from '../../role/entities/role.entity';

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

  @ManyToOne(() => Role, role => role.name)
  role: string;

  @Column()
  email: string;

  @OneToMany(() => PersonRecord, personRecord => personRecord.id)
  personRecord: PersonRecord[];

  constructor(item: Partial<Person>) {
    Object.assign(this, item);
  }
}
