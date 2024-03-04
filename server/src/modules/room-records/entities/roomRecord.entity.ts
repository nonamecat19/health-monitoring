import {Entity, Column, ManyToOne} from 'typeorm';
import {Room} from '../../room/entities';
import {BaseEntity} from '@shared/clases/baseEntity';

@Entity()
export class RoomRecord extends BaseEntity {
  @ManyToOne(() => Room, ({id}) => id)
  room: Room;

  @Column('decimal')
  humidity: number;

  @Column('decimal')
  temperature: number;

  @Column('decimal')
  pressure: number;

  @Column('decimal')
  carbonDioxide: number;

  @Column('decimal')
  airIons: number;

  @Column('decimal')
  ozone: number;

  @Column()
  isCriticalResult: boolean;

  constructor(item: Partial<RoomRecord>) {
    super();
    Object.assign(this, item);
  }
}
