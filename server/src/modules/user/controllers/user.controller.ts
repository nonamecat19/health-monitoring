import {Controller, Get, Param} from '@nestjs/common';
import {UserService} from '../services';

@Controller('user')
export class UserController {
  constructor(protected readonly userService: UserService) {}

  @Get()
  public async getAllUsers() {
    return this.userService.getAll();
  }

  @Get('id')
  public async getUserById(@Param('id') id: number) {
    return this.userService.getOne(id);
  }
}
