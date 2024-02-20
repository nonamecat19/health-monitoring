import {IsInt} from 'class-validator';
import {Optional} from '@nestjs/common';
import {Type} from 'class-transformer';

export class PersonDashboardRequest {
  @Type(() => Number)
  @IsInt()
  day: number;

  @Type(() => Number)
  @IsInt()
  month: number;

  @Type(() => Number)
  @IsInt()
  year: number;

  @Optional()
  @Type(() => Number)
  id?: number;
}
