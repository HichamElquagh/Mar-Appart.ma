import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import {User , userSchema} from './schemas/user.schema';


@Module({
  controllers: [AuthController],
  
  providers: [AuthService],
  imports: [UsersModule, MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],

})
export class AuthModule {}
