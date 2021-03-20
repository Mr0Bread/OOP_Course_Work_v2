import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import ExhibitInterface from 'Server/modules/exhibit/interfaces/exhibit.interface';

@Entity()
export class ExhibitEntity implements ExhibitInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  sku: string;

  @Column()
  type_id: number;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  image: string;
}
