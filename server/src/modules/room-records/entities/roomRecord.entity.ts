import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Room} from '../../room/entities/room.entity';

@Entity()
export class RoomRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomId: number;

  @ManyToOne(() => Room, room => room.id)
  room: Room;

  @Column()
  humidity: number;

  @Column()
  temperature: number;

  @Column()
  pressure: number;

  @Column()
  carbonDioxide: number;

  @Column()
  airIons: number;

  @Column()
  ozone: number;

  @Column()
  isCriticalResults: boolean;

  @Column()
  recordedDate: Date;

  constructor(item: Partial<RoomRecord>) {
    Object.assign(this, item);
  }
}
