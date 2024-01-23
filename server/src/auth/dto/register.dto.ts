import {
    IsInt,
    IsEmail,
    Min,
    Max,
    IsNotEmpty,
  } from 'class-validator';


export class RegisterDto {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    role: string;
    @IsNotEmpty()
    @IsInt()
    @Min(10)
    phone: number;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;    
}