import {RoleEnum} from '../../user/constants';

export type JwtData = {
  user: TokenData;
  iat: number;
  exp: number;
};

export type TokenData = {
  id: number;
  role: keyof typeof RoleEnum;
  nickname: string;
  isMuted: boolean;
};
