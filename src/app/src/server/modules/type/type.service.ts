import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeEntity } from 'Server/modules/type/entities/type.entity';
import { Repository } from 'typeorm';
import InvalidTransactionException from 'Server/exceptions/InvalidTransaction';

@Injectable()
export class TypeService {
	constructor(
		@InjectRepository(TypeEntity)
		private readonly typeRepository: Repository<TypeEntity>
	) {
	}

	async createOne(type: TypeEntity) {
		try {
			await this.typeRepository.save(type);
		} catch (e) {
			throw new BadRequestException(e);
		}
	}

	async getAll() {
		const result = await this.typeRepository.find({
			order: {
				id: 'ASC'
			}
		});

		return result;
	}

	async deleteOneById(id: number) {
		try {
			await this.typeRepository.delete(id);
		} catch (e) {
			throw new InvalidTransactionException();
		}
	}

	async getOneById(id: number) {
		try {
			const result = await this.typeRepository.findOne(id);

			return result
		} catch (e) {
			throw new InvalidTransactionException();
		}
	}

	async updateOne(typeEntity: TypeEntity) {
		try {
			await this.typeRepository.update(typeEntity.id, typeEntity);
		} catch (e) {
			throw new InvalidTransactionException();
		}
	}
}
