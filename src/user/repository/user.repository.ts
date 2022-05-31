import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository()
export class UserRepository extends Repository<User> {}
