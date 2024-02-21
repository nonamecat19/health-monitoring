import {Type} from 'class-transformer';
import {IsInt} from 'class-validator';

export class PaginationRequest {
  @Type(() => Number)
  @IsInt()
  page: number;
}
