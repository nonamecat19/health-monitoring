import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn} from 'typeorm';
import {Person} from '../../person/entities';
import {Room} from '../../room/entities';

@Entity()
export class PersonRecord {
  @PrimaryGeneratedColumn()
  id: number;

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

  @CreateDateColumn()
  recordedDate: Date;

  constructor(item: Partial<PersonRecord>) {
    Object.assign(this, item);
  }
}
