import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Person} from '../../person/entities';
import {Room} from '../../room/entities';

@Entity()
export class PersonRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Person, person => person.id)
  person: Person;

  @ManyToOne(() => Room, room => room.id)
  room: Room;

  @Column()
  saturation: number;

  @Column()
  heartRate: number;

  @Column()
  temperature: number;

  @Column()
  isCriticalResults: boolean;

  @Column()
  recordedDate: Date;

  constructor(item: Partial<PersonRecord>) {
    Object.assign(this, item);
  }
}
