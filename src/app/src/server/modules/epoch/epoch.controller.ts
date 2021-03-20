import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { EpochService } from 'Server/modules/epoch/epoch.service';
import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';

@Controller('epoch')
export class EpochController {
	constructor(
		private readonly epochService: EpochService
	) {
	}

	@Post('createOne')
	async createOne(
		@Body('id') id: number,
		@Body('label') label: string,
		@Body('description') description: string,
		@Body('image') image: string
	): Promise<BasicResponseInterface> {
		await this.epochService.createOne({
			id,
			label,
			description,
			image
		});

		return { message: 'Success', statusCode: HttpStatus.CREATED };
	}

	@Get('getAll')
	async getAll() {
		const result = await this.epochService.getAll();

		return result;
	}

	@Post('deleteOne')
	async deleteOne(
		@Body('id') id: number
	): Promise<BasicResponseInterface> {
		await this.epochService.deleteOneById(id);

		return { message: 'Success', statusCode: HttpStatus.CREATED };
	}

	@Get('getOne')
	async getOne(
		@Query('id') id: number
	) {
		const result = await this.epochService.getOneById(id);

		return result;
	}

	@Post('updateOne')
	async updateOne(
		@Body() epochData: EpochInterface
	): Promise<BasicResponseInterface> {
		await this.epochService.updateOne(epochData);

		return {
			message: 'Success',
			statusCode: HttpStatus.CREATED
		};
	}
}
