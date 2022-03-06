import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')// 여기에 들어가는 주소가 생긴다 /movies/~~ 엔트리포인트를 컨트롤한다.
export class MoviesController {
    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll() :Movie[]{
        return this.moviesService.getAll();
    }

    @Get('search') // :id가 위에 있으면 다른 get들이 작동하지 않는다. 안에있는 search를 :id값으로 인식한다.
search(@Query('year') searchingYear: string){
        return `we are searching for a movie made after: ${searchingYear}`;
    }
    
    @Get(':id') //여기있는 id와 @param에 있는 id는 이름이 같아야하고 id:~~~는 이름이 같지 않아도된다.
    getOne(@Param('id') movieId: string): Movie{ //:Movie는 반환타입 Movie를 반환할거야
        // return `this will return one movies with the id: ${movieId}`; // movieId와 같아야한다.
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData){
        return this.moviesService.create(movieData);
    }
    @Delete("/:id")
    remove(@Param('id') movieId: string){
        return this.moviesService.deleteOne(movieId);
    }
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData){
        return {
            updatedMovie: movieId,
            ...updateData,
        }
    }
    
}
