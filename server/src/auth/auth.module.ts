import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import {User , userSchema} from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  controllers: [AuthController],
  
  imports: [UsersModule, MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
   PassportModule,
   JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '60s' },
  }),
 ],
  providers: [AuthService , LocalStrategy , JwtStrategy],


})
export class AuthModule {}
