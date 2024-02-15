import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn} from 'typeorm';
import {Room} from '../../room/entities';

@Entity()
export class RoomRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Room, ({id}) => id)
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
  isCriticalResult: boolean;

  @CreateDateColumn()
  recordedDate: Date;

  constructor(item: Partial<RoomRecord>) {
    Object.assign(this, item);
  }
}
