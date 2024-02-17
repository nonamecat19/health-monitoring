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

  @Column()
  saturation: number;

  @Column()
  heartRate: number;

  @Column()
  temperature: number;

  @Column()
  isCriticalResult: boolean;

  constructor(item: Partial<PersonRecord>) {
    super();
    Object.assign(this, item);
  }
}
