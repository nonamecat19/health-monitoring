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

  @OneToMany(() => RoomRecord, roomRecord => roomRecord.room)
  roomRecords: RoomRecord[];

  @OneToMany(() => PersonRecord, personRecord => personRecord.room)
  personRecords: PersonRecord[];

  constructor(item: Partial<Room>) {
    Object.assign(this, item);
  }
}
