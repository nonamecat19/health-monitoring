import {PartialType} from '@nestjs/mapped-types';
import {Room} from '../entities';
import {IsEnum, IsNumber, IsOptional} from 'class-validator';
import {RoomTypeEnum} from '../constants';

export class EditRoomRequest extends PartialType(Room) {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsEnum(RoomTypeEnum)
  roomType: RoomTypeEnum;
}
