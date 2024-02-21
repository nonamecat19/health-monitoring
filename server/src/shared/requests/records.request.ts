import {PaginationRequest} from '@shared/requests/pagination.request';
import {Transform} from 'class-transformer';
import {IsBoolean} from 'class-validator';

export class RecordsRequest extends PaginationRequest {
  @IsBoolean()
  @Transform(({value}) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  onlyCritical?: boolean;
}
