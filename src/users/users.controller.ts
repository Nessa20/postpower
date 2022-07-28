import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersController{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

        @Post()
    createUser(@Body() Body: createUserDto): {
      const user = new User();

      console.log(user);
    }

}
