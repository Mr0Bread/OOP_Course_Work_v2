import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import AdminSchema from './schemas/admin.schema';
import { AdminService } from './admin.service';

describe('AdminController', () => {
  let controller: AdminController;

  beforeEach(async () => {
	const module: TestingModule = await Test.createTestingModule(
	  {
		imports: [
		  MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }])
		],
		providers: [AdminService],
		exports: [AdminService],
		controllers: [AdminController]
	  }
	).compile();

	controller = module.get<AdminController>(AdminController);
  });

  it('should be defined', () => {
	expect(controller).toBeDefined();
  });
});
