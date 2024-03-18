import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { log } from 'console';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() createAuthDto: LoginDto)
   {
    const res = await this.authService.login(createAuthDto);
    return {res};
  }

  @Post('register')
  async register(@Body() createAuthDto: RegisterDto) {
    console.log('register ');
  const res =   await this.authService.register(createAuthDto);
    return res
  }

 

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
