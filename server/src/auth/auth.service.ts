import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Console } from 'console';

@Injectable()
export class AuthService {

  constructor() {
  }
  
  async login(LoginDto: LoginDto) {
    const { email, password } = LoginDto;
    console.log(email, password);
    
    return {LoginDto};
  }


  async register(RegisterDto: RegisterDto) {
    const { username, role, phone, email, password } = RegisterDto;
    console.log(username, role, phone, email, password);
    return {
      message: 'Registration successful',
      data: RegisterDto,
    };  }


  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: string) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
