import { Body, Controller, Post, Put } from '@nestjs/common';
import CreateUserDto from './dto/create.user.dto';
import UserService from './user.service';

@Controller('user')
class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.userService.createUser(createUserDto);
  }

  // @Put()
  // updatePassword(
  //   @Body() changePasswordDto: ChangePasswordDto,
  // ): Promise<ChangePasswordDto> {
  //   return this.userService.changePassword(changePasswordDto);
  // }

  // update password
  // delete account

  // login service

  // trips module crud

  // auth

  // validation

  // swagger

  // tests

  // multer

  // sms service
}

export default UserController;
