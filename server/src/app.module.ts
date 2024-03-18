import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongoModule } from './mongo/mongo.module';

console.log(process.env.MONGODB_URI);
console.log(process.env.JWT_SECRET);
@Module({
  imports: [AuthModule , MongoModule],
})
export class AppModule {}
