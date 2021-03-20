import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from 'Server/modules/author/entities/author.entity';
import { Repository } from 'typeorm';
import AuthorInterface from 'Server/modules/author/interfaces/author.interface';
import InvalidTransactionException from 'Server/exceptions/InvalidTransaction';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
	private readonly authorRepository: Repository<AuthorEntity>
  ) {
  }

  async createOne(author: AuthorInterface) {
	try {
	  await this.authorRepository.save(author);
	} catch (e) {
	  throw new InvalidTransactionException();
	}
  }

  async getAll() {
	const result = await this.authorRepository.find();

	return result;
  }

  async deleteOneById(id: number) {
	try {
	  await this.authorRepository.delete(id);
	} catch (e) {
	  throw new InvalidTransactionException();
	}
  }

	async getOne(id: number) {
		try {
			const result = await this.authorRepository.findOne(id);

			return result;
		} catch (e) {
			console.log(e);
			throw new InvalidTransactionException();
		}
	}

	async updateOne(authorData: AuthorInterface) {
		try {
			await this.authorRepository.update(authorData.id, authorData);
		} catch (e) {
			console.log(e);
			throw new InvalidTransactionException();
		}
	}
}
