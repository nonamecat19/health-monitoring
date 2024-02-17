import {Entity, Column, OneToMany} from 'typeorm';
import {RoomRecord} from '../../room-records/entities';
import {BaseEntity} from '@shared/clases/baseEntity';

@Entity()
export class Room extends BaseEntity {
  @Column()
  roomNumber: string;

  @Column()
  roomType: string;

  @OneToMany(() => RoomRecord, ({room}) => room)
  roomRecords: RoomRecord[];

  constructor(item: Partial<Room>) {
    super();
    Object.assign(this, item);
  }
}
