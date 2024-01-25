import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
@Injectable()
export class AuthService {

  constructor(@InjectModel(User.name) private userModel: Model<User>)
  {}
  
  async login(LoginDto: LoginDto) {
    const { email, password } = LoginDto;
    console.log(email, password);
    const user = await this.userModel.findOne({ email });
    return {LoginDto};
  }


  async register(RegisterDto: RegisterDto) {
    const { username, role, phone, email, password } = RegisterDto;
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.userModel(RegisterDto);
    await createdUser.save();
    return {
      message: 'Registration successful',
      data: createdUser,
    }; 
   }  

// // return user object without password
//   sanitizeUser(user: User) {
//     const sanitized = user.toObject();
//     delete sanitized['password'];
//     return sanitized;
//   }
// }
    // console.log(username, role, phone, email, password);
   


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
