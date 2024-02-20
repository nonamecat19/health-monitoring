import {Entity, Column, OneToMany} from 'typeorm';
import {RoomRecord} from '../../room-records/entities';
import {BaseEntity} from '@shared/clases/baseEntity';
import {PersonRecord} from '../../person-records/entities';

@Entity()
export class Room extends BaseEntity {
  @Column({unique: true})
  roomNumber: string;

  @Column()
  roomType: string;

  @OneToMany(() => RoomRecord, ({id}) => id)
  roomRecords: RoomRecord[];

  @OneToMany(() => PersonRecord, ({id}) => id)
  personRecords: RoomRecord[];

  constructor(item: Partial<Room>) {
    super();
    Object.assign(this, item);
  }
}
