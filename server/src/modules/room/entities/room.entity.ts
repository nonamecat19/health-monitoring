import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {RoomRecord} from '../../room-records/entities';
import {PersonRecord} from '../../person-records/entities';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomNumber: string;

  @Column()
  roomType: string;

  @OneToMany(() => RoomRecord, ({room}) => room)
  roomRecords: RoomRecord[];

  @OneToMany(() => PersonRecord, ({room}) => room)
  personRecords: PersonRecord[];

  constructor(item: Partial<Room>) {
    Object.assign(this, item);
  }
}
