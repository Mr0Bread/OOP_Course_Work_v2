import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import CustomerInterface from 'Server/modules/customer/interfaces/customer.interface';

@Entity()
export default class CustomerEntity implements CustomerInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;
}
