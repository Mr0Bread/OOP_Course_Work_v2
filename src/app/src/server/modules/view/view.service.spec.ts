import { Test, TestingModule } from '@nestjs/testing';
import { ViewService } from './view.service';
import { ViewController } from './view.controller';

describe('ViewService', () => {
  let service: ViewService;

  beforeEach(async () => {
	const module: TestingModule = await Test.createTestingModule({
	  providers: [ViewService],
	  controllers: [ViewController]
	}).compile();

	service = module.get<ViewService>(ViewService);
  });

  it('should be defined', () => {
	expect(service).toBeDefined();
  });

  it('OnModuleINit should be defined', () => {
	expect(service.onModuleInit).toBeDefined();
  });

  it('getNextServer should be defined', () => {
	expect(service.getNextServer).toBeDefined();
  })
});
