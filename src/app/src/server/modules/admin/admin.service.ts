import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import AdminDocumentInterface from './interfaces/admin.document.interface';
import AdminDto from './dto/admin.dto';

const bcrypt = require('bcrypt');

@Injectable()
export class AdminService {
  constructor(
	@InjectModel('Admin') private readonly AdminModel: Model<AdminDocumentInterface>
  ) {
  }

  private async tryCreateAdmin(adminDto: AdminDto) {
	const result = await new this.AdminModel(adminDto)
	  .save()
	  .catch((err) => new BadRequestException(err));

	if (result instanceof BadRequestException) {
	  throw result;
	}

	return result;
  }

  async getHashedPassword(password: string) {
	const hashedPassword = await bcrypt.hash(password, 10);

	return hashedPassword;
  }

  async createAdmin(login: string, password: string) {
	const hashedPassword = await this.getHashedPassword(password);
	const result = await this.tryCreateAdmin({ login, password: hashedPassword });

	return result;
  }

  private async tryGetAdminByLogin(login: string) {
	const result = await this.AdminModel.findOne({ login })
	  .exec()
	  .then((res) => res)
	  .catch((err) => new BadRequestException(err));

	if (!result) {
	  throw new BadRequestException('Incorrect credentials');
	}

	if (result instanceof BadRequestException) {
	  throw result;
	}

	return result;
  }

  async getAdminByLogin(login: string) {
	const admin = await this.tryGetAdminByLogin(login);

	return admin;
  }

  async authenticate(login: string, password: string) {
	const admin = await this.getAdminByLogin(login);
	const { password: hashedPassword } = admin;

	if (!(await bcrypt.compare(password, hashedPassword))) {
	  throw new BadRequestException('Incorrect credentials');
	}
  }

  async doesAdminExists(login: string) {
    const result = await this.AdminModel.exists({ login });

    return result;
  }
}
