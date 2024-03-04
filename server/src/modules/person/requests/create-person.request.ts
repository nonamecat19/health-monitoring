import {IsEmail, IsNumber, IsString, MinLength} from 'class-validator';
import {Optional} from '@nestjs/common';

export class CreatePersonRequest {
  @Optional()
  @IsNumber()
  studentID: number;

  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  surname: string;

  @IsString()
  @MinLength(3)
  patronymic: string;

  @IsString()
  @MinLength(3)
  studyGroup: string;

  @Optional()
  @IsString()
  @IsEmail()
  email: string;
}
