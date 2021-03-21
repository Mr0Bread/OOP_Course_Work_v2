import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CustomerEntity from 'Server/modules/customer/entities/customer.entity';
import { Repository } from 'typeorm';
import InvalidTransactionException from 'Server/exceptions/InvalidTransaction';
import { compare, hashString } from 'Server/utils/Auth';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async createCustomer(login, password) {
    const hashedPassword = await hashString(password);

    try {
      await this.customerRepository.save({ login, password: hashedPassword });
    } catch (e) {
      throw new InvalidTransactionException();
    }
  }

  async getCustomerByLogin(login: string) {
    try {
      const customer = await this.customerRepository.findOne({ login });

      return customer;
    } catch (e) {
      throw new InvalidTransactionException();
    }
  }

  async authenticate(login, password) {
    const { password: hashedPassword } = await this.getCustomerByLogin(login);

    if (!(await compare(password, hashedPassword))) {
      throw new BadRequestException();
    }
  }

  async doesCustomerExist(login: string): Promise<boolean> {
    try {
      return !!(await this.customerRepository.find({ login })).length;
    } catch (e) {
      throw new InvalidTransactionException();
    }
  }
}
