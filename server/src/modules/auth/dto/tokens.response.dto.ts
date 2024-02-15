import {TokenData} from '../types';

export class TokensResponseDto {
  token: string;
  refreshToken?: string;
  user: TokenData;
}
