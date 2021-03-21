import { BadRequestException, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitEntity } from 'Server/modules/exhibit/entities/exhibit.entity';
import ExhibitInterface from 'Server/modules/exhibit/interfaces/exhibit.interface';
import InvalidTransactionException from 'Server/exceptions/InvalidTransaction';

@Injectable()
export class ExhibitService {
  constructor(
    private readonly connection: Connection,
    @InjectRepository(ExhibitEntity)
    private readonly exhibitRepository: Repository<ExhibitEntity>,
  ) {}

  async createOne(exhibit: ExhibitEntity) {
    try {
      await this.exhibitRepository.save(exhibit);
    } catch (e) {
      console.log(e);
      throw new BadRequestException({
        statusCode: 400,
        message: 'Error during creating new entry',
      });
    }
  }

  async deleteOneById(id: number) {
    try {
      await this.exhibitRepository.delete(id);
    } catch (e) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Error during deleting entry',
      });
    }
  }

  async getAll() {
    const result = await this.exhibitRepository.find();

    return result;
  }

  async getOneById(id: number) {
    const result = await this.exhibitRepository.findOne({ id });

    return result;
  }

  async updateOne(exhibitData: ExhibitInterface) {
    try {
      await this.exhibitRepository.update(exhibitData.id, exhibitData);
    } catch (e) {
      throw new InvalidTransactionException();
    }
  }
}
