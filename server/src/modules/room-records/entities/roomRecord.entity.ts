import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn} from 'typeorm';
import {Room} from '../../room/entities';
import {BaseEntity} from '@shared/clases/baseEntity';

@Entity()
export class RoomRecord extends BaseEntity {
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

  constructor(item: Partial<RoomRecord>) {
    super();
    Object.assign(this, item);
  }
}
