import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CustomerService } from 'Server/modules/customer/customer.service';
import { CUSTOMER_LOGIN_MAX_LENGTH, CUSTOMER_LOGIN_MIN_LENGTH } from 'Server/modules/auth/config';

@Injectable()
export default class ValidateCustomerLoginPipe implements PipeTransform {
  constructor(
	private readonly customerService: CustomerService
  ) {
  }

  async transform(value: string, metadata: ArgumentMetadata): Promise<string> {
	if (
	  value.length < CUSTOMER_LOGIN_MIN_LENGTH
	  || value.length > CUSTOMER_LOGIN_MAX_LENGTH
	) {
	  throw new BadRequestException('Login does not meet requirements');
	}

	if (!(await this.customerService.doesCustomerExist(value))) {
	  throw new BadRequestException('Account with provided login does not exists');
	}

	return value;
  }
}
