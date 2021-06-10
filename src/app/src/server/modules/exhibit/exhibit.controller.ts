import { Body, Controller, Get, HttpStatus, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ExhibitService } from 'Server/modules/exhibit/exhibit.service';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import ExhibitInterface from 'Server/modules/exhibit/interfaces/exhibit.interface';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('exhibit')
export class ExhibitController {
  constructor(private readonly exhibitService: ExhibitService) {}

  @Post('createOne')
  async createOne(
    @Body('name') name: string,
    @Body('sku') sku: string,
    @Body('type_id') type_id: number,
    @Body('image') image: string,
    @Body('description') description: string,
    @Body() body,
  ) {
    console.log(body);
    await this.exhibitService.createOne({
      name,
      sku,
      type_id,
      id: 0,
      image,
      description,
    });

    return { message: 'success' };
  }

  @Get('getAll')
  async getAll() {
    const result = await this.exhibitService.getAll();

    return result;
  }

  @Post('deleteOne')
  async deleteOne(@Body('id') id: number) {
    await this.exhibitService.deleteOneById(id);

    return { message: 'success', statusCode: 200 };
  }

  @Get('getOne')
  async getOne(@Query('id') id: number) {
    const result = await this.exhibitService.getOneById(id);

    return result;
  }

  @Post('updateOne')
  async updateOne(
    @Body() exhibitData: ExhibitInterface,
  ): Promise<BasicResponseInterface> {
    await this.exhibitService.updateOne(exhibitData);

    return {
      statusCode: HttpStatus.CREATED,
      message: 'Success',
    };
  }
}
