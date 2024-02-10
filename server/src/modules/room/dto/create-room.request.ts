import {IsEnum, IsNotEmpty, IsString} from 'class-validator';
import {RoomTypeEnum} from '../constants';

export class CreateRoomRequest {
  @IsString()
  @IsNotEmpty()
  roomNumber: string;

  @IsEnum(RoomTypeEnum)
  @IsString()
  @IsNotEmpty()
  roomType: RoomTypeEnum;
}
