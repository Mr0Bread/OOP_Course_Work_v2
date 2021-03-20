import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import CustomerEntity from 'Server/modules/customer/entities/customer.entity';

@Module({
  providers: [CustomerService],
  imports: [
    TypeOrmModule.forFeature([ CustomerEntity ])
  ],
  exports: [CustomerService]
})
export class CustomerModule {}
