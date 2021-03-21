import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ADMIN_PASSWORD_REGEXP_PATTERN } from 'Server/modules/admin/config';

@Injectable()
export default class ValidatePasswordPipe implements PipeTransform {
  transform(value: string): string {
    if (!new RegExp(ADMIN_PASSWORD_REGEXP_PATTERN).test(value)) {
      throw new BadRequestException('Password does not match given pattern');
    }

    return value;
  }
}
