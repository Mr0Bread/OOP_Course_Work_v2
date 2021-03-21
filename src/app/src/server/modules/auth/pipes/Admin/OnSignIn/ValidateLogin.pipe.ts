import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { AdminService } from 'Server/modules/admin/admin.service';
import {
  ADMIN_LOGIN_MAX_LENGTH,
  ADMIN_LOGIN_MIN_LENGTH,
} from 'Server/modules/admin/config';

@Injectable()
export default class ValidateLoginPipe implements PipeTransform {
  constructor(private readonly adminService: AdminService) {}

  async transform(value: string, metadata: ArgumentMetadata): Promise<string> {
    if (
      value.length < ADMIN_LOGIN_MIN_LENGTH ||
      value.length > ADMIN_LOGIN_MAX_LENGTH
    ) {
      throw new BadRequestException('Login does not meet requirements');
    }

    if (!(await this.adminService.doesAdminExists(value))) {
      throw new BadRequestException('Incorrect credentials');
    }

    return value;
  }
}
