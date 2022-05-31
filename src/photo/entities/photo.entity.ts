import { User } from 'src/user/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  photo_id: number;
  @Column({ default: null })
  url: string;

  @ManyToOne((type) => User, (user) => user.photos)
  user: User;
}
