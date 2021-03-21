import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CUSTOMER_PASSWORD_REGEXP_PATTERN } from 'Server/modules/auth/config';

@Injectable()
export default class ValidateCustomerPasswordPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata): string {
    const pattern = new RegExp(CUSTOMER_PASSWORD_REGEXP_PATTERN);

    if (!pattern.test(value)) {
      throw new BadRequestException('Password does not match given pattern');
    }

    return value;
  }
}
