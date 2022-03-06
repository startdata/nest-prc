import { Injectable } from '@nestjs/common';
import { Movie } from './entities/Movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];
    //서비스의 함수이름과 컨트롤러 함수이름은 같을 필요가 없다.

    getAll(): Movie[]{
        return this.movies
    }

    getOne(id: string): Movie{
        return this.movies.find(movie => movie.id === parseInt(id)); //parseIng(id)와 +id랑 같다.
    }

    deleteOne(id: string): boolean{
        this.movies.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData){
        this.movies.push({
            id: this.movies.length +1,
            ...movieData,
        })
    }
}
