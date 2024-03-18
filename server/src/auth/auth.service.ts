import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(@InjectModel(User.name) private userModel: Model<User>,
  private jwtService: JwtService
  )
  {}


  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  
  async login(LoginDto: LoginDto) {
    const { email, password } = LoginDto;
    console.log(email, password);
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new HttpException('user not found', HttpStatus.UNAUTHORIZED);
    }
    if (user.password !== password) {
      throw new HttpException('invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    const payload = { username: user.username, sub: user._id };
    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
    return {
      message: 'login successful',
      data: user,
      // access_token: this.jwtService.sign(payload),
    };


  }


  async register(RegisterDto: RegisterDto) {
    console.log(RegisterDto);
    console.log(RegisterDto.username, RegisterDto.phone, RegisterDto.email, RegisterDto.password);
    
    
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
