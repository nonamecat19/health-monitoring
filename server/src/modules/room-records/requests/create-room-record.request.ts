import {IsNumber} from 'class-validator';

export class CreateRoomRecordRequest {
  @IsNumber()
  roomId: number;

  @IsNumber()
  humidity: number;

  @IsNumber()
  temperature: number;

  @IsNumber()
  pressure: number;

  @IsNumber()
  carbonDioxide: number;

  @IsNumber()
  airIons: number;

  @IsNumber()
  ozone: number;
}
