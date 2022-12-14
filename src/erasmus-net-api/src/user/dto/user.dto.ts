import { IsEmail, IsString, MinLength } from 'class-validator';

export class UserDTO {
 
  @IsString()
  @MinLength(3)
  displayName: string;

  @IsString()
  @IsEmail()
  email: string;

   @IsString()
   @MinLength(3)
   password: string;

  @IsString()
  @MinLength(4)
   role: string;

}