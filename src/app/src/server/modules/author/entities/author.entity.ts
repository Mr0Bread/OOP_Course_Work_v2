import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import AuthorInterface from 'Server/modules/author/interfaces/author.interface';
import { EpochEntity } from 'Server/modules/epoch/entities/epoch.entity';

@Entity()
export class AuthorEntity implements AuthorInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  middlename: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ default: '' })
  placeOfBirth: string;

  @Column({ default: '' })
  placeOfDeath: string;

  @Column({ default: 0 })
  yearOfBirth: number;

  @Column({ default: 0 })
  yearOfDeath: number;

  @Column({ default: 0 })
  epoch_id: number;

  @ManyToOne((type) => EpochEntity, (epoch) => epoch.authors)
  @JoinColumn()
  epoch: EpochEntity;
}
