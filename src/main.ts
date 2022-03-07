import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { connect } from 'http2';
import { createConnection } from 'typeorm';
import { AppModule } from './app.module';
import { Movie } from './movies/entities/Movie.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }
    ));
  await app.listen(3001);
}
bootstrap();
  
createConnection({
  type: "mariadb",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "qwer1234",
  database: "nest_test",
  entities:[
    Movie
  ]
}).then(connection => {
  // here you can start to work with your entities
  let movie = new Movie();
  movie.title = "first";
  movie.year = 2022;

  return connection.manager
        .save(movie)
        .then(movie => {
          console.log("Movie save Movie id is" + movie.id);
        });
}).catch(error => console.log(error));

