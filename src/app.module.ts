import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [MoviesModule,
  TypeOrmModule.forRoot(typeORMConfig),
],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
