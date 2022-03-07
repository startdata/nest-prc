import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [MoviesModule,
  TypeOrmModule.forRoot()
],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }

