import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users/user.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){

  }

  getHello(): { message: string } {
    return { message: 'Hello' };
  }
  create(): void {
    const user = new User();

    console.log({ user});
  }
}
