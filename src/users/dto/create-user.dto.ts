import { IsString, IsEmail, IsInt, IsNotEmpty } from 'class-validator';
export class UserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  phone: number;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
