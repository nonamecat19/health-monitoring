import {Controller, Get, Param} from '@nestjs/common';
import {RoleService} from '../services/role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  public async getAllRoles() {
    return this.roleService.getAll();
  }

  @Get(':id')
  public async getRoleById(@Param('id') id: number) {
    return this.roleService.getOne(id);
  }
}
