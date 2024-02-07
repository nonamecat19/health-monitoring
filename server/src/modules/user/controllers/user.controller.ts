import {Controller} from '@nestjs/common';
import {UserService} from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(protected readonly userService: UserService) {}

  protected async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
