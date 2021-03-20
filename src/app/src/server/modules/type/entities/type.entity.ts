import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import TypeInterface from 'Server/modules/type/interfaces/type.interface';

@Entity()
export class TypeEntity implements TypeInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  label: string;
}
