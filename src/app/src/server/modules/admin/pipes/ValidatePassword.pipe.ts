import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ADMIN_PASSWORD_REGEXP_PATTERN } from 'Server/modules/admin/config';

@Injectable()
export default class ValidatePasswordPipe implements PipeTransform {
  transform(value: string): string {
    const pattern = new RegExp(ADMIN_PASSWORD_REGEXP_PATTERN);

    if (!pattern.test(value)) {
      throw new BadRequestException("Password doesn't match pattern");
    }

    return value;
  }
}
