import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CUSTOMER_LOGIN_MAX_LENGTH, CUSTOMER_LOGIN_MIN_LENGTH } from 'Server/modules/auth/config';
import { CustomerService } from 'Server/modules/customer/customer.service';

@Injectable()
export default class ValidateCustomerLoginPipe implements PipeTransform {
  constructor(
    private readonly customerService: CustomerService
  ) {
  }

  async transform(value: string, metadata: ArgumentMetadata): Promise<string> {
    if (value.length > CUSTOMER_LOGIN_MAX_LENGTH || value.length < CUSTOMER_LOGIN_MIN_LENGTH) {
      throw new BadRequestException('Login doesn\'t meet requirements');
	}

	if ((await this.customerService.doesCustomerExist(value))) {
	  throw new BadRequestException('Account with this login already exists!');
	}

	return value;
  }
}
