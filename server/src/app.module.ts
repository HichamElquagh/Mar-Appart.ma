import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


console.log(process.env.MONGODB_URI);
@Module({
  imports: [ ConfigModule.forRoot() ,AuthModule , MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: process.env.MONGODB_URI,
    }),
  }),
  ConfigModule.forRoot(),],
})
export class AppModule {}
