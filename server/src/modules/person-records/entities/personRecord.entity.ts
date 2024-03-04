import {Entity, Column, ManyToOne} from 'typeorm';
import {Person} from '../../person/entities';
import {Room} from '../../room/entities';
import {BaseEntity} from '@shared/clases/baseEntity';

@Entity()
export class PersonRecord extends BaseEntity {
  @ManyToOne(() => Person, ({id}) => id)
  person: Person;

  @ManyToOne(() => Room, ({id}) => id)
  room: Room;

  @Column('decimal')
  saturation: number;

  @Column('decimal')
  heartRate: number;

  @Column('decimal')
  temperature: number;

  @Column()
  isCriticalResult: boolean;

  constructor(item: Partial<PersonRecord>) {
    super();
    Object.assign(this, item);
  }
}
