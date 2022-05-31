import { Photo } from './../entities/photo.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
export class PhotoRepository extends Repository<Photo> {}
