import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Equal, Repository } from 'typeorm';
import User from '../model/user.entity';
import CreateUserDto from './dto/create.user.dto';

@Injectable()
class UserService {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

  public async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user = await this.userRepo.findOneBy({
      phone: Equal(createUserDto.phone),
    });
    if (user) throw new HttpException('User Already Exists', HttpStatus.BAD_REQUEST);

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return await this.userRepo.save({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      phone: createUserDto.phone,
      password: hashedPassword,
      isActive: true,
    });
  }
}

export default UserService;
