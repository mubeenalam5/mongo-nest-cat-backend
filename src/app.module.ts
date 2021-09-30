import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { CatModule } from './cat/cat.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/practice'), CatModule],
})
export class AppModule {}