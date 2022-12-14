import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Like } from '../entities/like.entity';
import { Post } from '../entities/post.entity';
import { User } from '../entities/user.entity';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'imob',
  password: 'imob',
  database: 'imob',
  entities: [User, Post, Like],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
} as TypeOrmModuleOptions;
