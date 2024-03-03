import {IsEmail, IsString, MinLength} from 'class-validator';

export class ConfirmEmailRequest {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @MinLength(8)
  code: string;
}
