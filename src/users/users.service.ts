import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
         ) {}

         create( data: createUserDto): User {
            const Newuser = new User();

            const user = await this.userRepository.save( Object.assign(Newuser, { ...data, salt: '' }),
            );
            return user;
         }
}
