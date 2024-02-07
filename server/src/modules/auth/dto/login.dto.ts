import {IsEmail, IsString, MinLength} from 'class-validator';

export class LoginDto {
  @MinLength(3, {message: 'Nickname should be at least 3 characters'})
  @IsEmail()
  @IsString({message: 'Nickname must be a string'})
  email: string;

  @MinLength(8, {message: 'Password should be at least 8 characters'})
  @IsString({message: 'Password must be a string'})
  password: string;
}
