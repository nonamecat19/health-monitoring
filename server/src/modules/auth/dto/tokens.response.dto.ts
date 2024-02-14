import {TokenData} from '@shared/types';

export class TokensResponseDto {
  token: string;
  refreshToken?: string;
  user: TokenData;
}
