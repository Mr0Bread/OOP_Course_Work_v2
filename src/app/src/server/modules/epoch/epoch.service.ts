import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EpochEntity } from 'Server/modules/epoch/entities/epoch.entity';
import { Repository } from 'typeorm';
import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';
import InvalidTransactionException from 'Server/exceptions/InvalidTransaction';

@Injectable()
export class EpochService {
	constructor(
		@InjectRepository(EpochEntity)
		private readonly epochRepository: Repository<EpochEntity>
	) {
	}

	async createOne(epoch: EpochInterface) {
		try {
			await this.epochRepository.save(epoch);
		} catch (e) {
			console.log(e);
			throw new InvalidTransactionException();
		}
	}

	async getAll() {
		const result = await this.epochRepository.find();

		return result;
	}

	async deleteOneById(id: number) {
		try {
			await this.epochRepository.delete(id);
		} catch (e) {
			console.log(e);
			throw new InvalidTransactionException();
		}
	}

	async getOneById(id: number) {
		try {
			const result = await this.epochRepository.findOne(id);

			return result;
		} catch (e) {
			throw new InvalidTransactionException();
		}
	}

	async updateOne(epochData: EpochInterface) {
		try {
			await this.epochRepository.update(epochData.id, epochData);
		} catch (e) {
			throw new InvalidTransactionException();
		}
	}
}
