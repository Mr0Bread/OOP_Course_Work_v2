import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { AuthorService } from 'Server/modules/author/author.service';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import AuthorInterface from 'Server/modules/author/interfaces/author.interface';

@Controller('author')
export class AuthorController {
  constructor(
    private readonly authorService: AuthorService
  ) {
  }

  @Post('createOne')
  async createOne(
	@Body('name') name: string,
	@Body('surname') surname: string,
	@Body('middlename') middlename: string,
	@Body('yearOfBirth') yearOfBirth: number,
	@Body('yearOfDeath') yearOfDeath: number,
	@Body('placeOfBirth') placeOfBirth: string,
	@Body('placeOfDeath') placeOfDeath: string,
	@Body('epoch_id') epochId: number
  ) {
	await this.authorService.createOne(
	  {
		id: 0,
		name,
		surname,
		middlename,
		yearOfBirth,
		yearOfDeath,
		placeOfBirth,
		placeOfDeath,
		epoch_id: epochId
	  }
	);

	return { message: 'success' }
  }

  @Get('getAll')
  async getAll() {
	const result = await this.authorService.getAll();

	return result;
  }

  @Post('deleteOne')
  async deleteOne(
    @Body('id') id: number
  ): Promise<BasicResponseInterface> {
	await this.authorService.deleteOneById(id);

	return { message: 'success', statusCode: 201 }
  }

  @Get('getOne')
	async getOne(
		@Query('id') id: number
	) {
		const result = this.authorService.getOne(id);

		return result;
	}

	@Post('updateOne')
	async updateOne(
		@Body() authorData: AuthorInterface
	): Promise<BasicResponseInterface> {
  	await this.authorService.updateOne(authorData);

  	return { message: 'Success', statusCode: HttpStatus.CREATED };
	}
}
