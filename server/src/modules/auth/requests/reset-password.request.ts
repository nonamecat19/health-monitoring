import {IsEmail, IsString} from 'class-validator';

export class ResetPasswordRequest {
  @IsEmail()
  @IsString()
  email: string;
}
