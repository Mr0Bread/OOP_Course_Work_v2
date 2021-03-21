import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';
import { AuthorEntity } from 'Server/modules/author/entities/author.entity';

@Entity()
export class EpochEntity implements EpochInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  image: string;

  @Column()
  label: string;

  @OneToMany((type) => AuthorEntity, (author) => author.epoch)
  authors: AuthorEntity[];
}
