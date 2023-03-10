import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost/task')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
