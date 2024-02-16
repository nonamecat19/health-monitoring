import {IsNumber} from 'class-validator';

export class CreatePersonRecordRequest {
  @IsNumber()
  personId: number;

  @IsNumber()
  roomId: number;

  @IsNumber()
  saturation: number;

  @IsNumber()
  heartRate: number;

  @IsNumber()
  temperature: number;
}
