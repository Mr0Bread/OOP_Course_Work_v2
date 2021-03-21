import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { TypeService } from 'Server/modules/type/type.service';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import TypeInterface from 'Server/modules/type/interfaces/type.interface';
import { TypeEntity } from 'Server/modules/type/entities/type.entity';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Get('getAll')
  async getAll() {
    const result = await this.typeService.getAll();

    return result;
  }

  @Post('createOne')
  async createOne(@Body('id') id: number, @Body('label') label: string) {
    await this.typeService.createOne({ id, label });

    return { message: 'success' };
  }

  @Post('deleteOne')
  async deleteOne(@Body('id') id: number): Promise<BasicResponseInterface> {
    await this.typeService.deleteOneById(id);

    return { message: 'Success', statusCode: HttpStatus.CREATED };
  }

  @Get('getOne')
  async getOne(@Query('id') id: number) {
    console.log(id);
    const result = await this.typeService.getOneById(id);

    return result;
  }

  @Post('updateOne')
  async updateOne(
    @Body() typeData: TypeInterface,
  ): Promise<BasicResponseInterface> {
    await this.typeService.updateOne(typeData as TypeEntity);

    return {
      message: 'Record updated',
      statusCode: HttpStatus.CREATED,
    };
  }
}
