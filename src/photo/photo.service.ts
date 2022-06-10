import { Photo } from './entities/photo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PhotoRepository } from './repository/photo.repository';
import { getManager } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: PhotoRepository,
  ) {}
  create(createPhotoDto: CreatePhotoDto) {
    return this.photoRepository.save(createPhotoDto);
  }

  findAll() {
    return `This action returns all photo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }

  async find() {
    const entityManager = getManager();
    const [data] = await entityManager.query(`
    select * from Photo `);
    return [data];
  }
}
