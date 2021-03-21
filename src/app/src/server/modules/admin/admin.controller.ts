import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import ValidateLoginPipe from 'Server/modules/admin/pipes/ValidateLogin.pipe';
import ValidatePasswordPipe from 'Server/modules/admin/pipes/ValidatePassword.pipe';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('create')
  async createAdmin(
    @Body('login', ValidateLoginPipe) login: string,
    @Body('password', ValidatePasswordPipe) password: string,
  ) {
    const result = await this.adminService.createAdmin(login, password);

    return result;
  }
}
