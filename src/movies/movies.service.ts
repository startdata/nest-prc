import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/Movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];
    //서비스의 함수이름과 컨트롤러 함수이름은 같을 필요가 없다.

    getAll(): Movie[]{
        return this.movies
    }

    getOne(id: number): Movie{
        const movie = this.movies.find(movie => movie.id === id); //parseIng(id)와 +id랑 같다.
        if(!movie){
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }

    deleteOne(id: number){
        this.getOne(id);
        this. movies = this.movies.filter(movie => movie.id !== id);
    }

    create(movieData: CreateMovieDto){
        this.movies.push({
            id: this.movies.length +1,
            ...movieData,
        })
    }
    update(id:number, updateData){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});
    }

}
