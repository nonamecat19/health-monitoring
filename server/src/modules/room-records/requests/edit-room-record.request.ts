import {IsNumber} from 'class-validator';
import {Optional} from '@nestjs/common';

export class EditRoomRecordRequest {
  @IsNumber()
  id: number;

  @Optional()
  @IsNumber()
  roomId: number;

  @Optional()
  @IsNumber()
  humidity: number;

  @Optional()
  @IsNumber()
  temperature: number;

  @Optional()
  @IsNumber()
  pressure: number;

  @Optional()
  @IsNumber()
  carbonDioxide: number;

  @Optional()
  @IsNumber()
  airIons: number;

  @Optional()
  @IsNumber()
  ozone: number;
}
