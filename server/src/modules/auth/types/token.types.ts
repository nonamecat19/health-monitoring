import {PersonRole} from '@shared/constants';

export type JwtData = {
  user: TokenData;
  iat: number;
  exp: number;
};

export type TokenData = {
  id: number;
  role: keyof typeof PersonRole;
  nickname: string;
  isMuted: boolean;
};
