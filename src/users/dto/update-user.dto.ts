import { IsString, IsEmail, IsInt } from 'class-validator';
export class UserUpdateDto {
  @IsString()
  name: string;

  @IsInt()
  phone: number;

  @IsEmail()
  email: string;
}
