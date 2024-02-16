import {IsEmail, IsString, MinLength} from 'class-validator';

export class UserRegisterRequest {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
