import { Test, TestingModule } from '@nestjs/testing';
import { EpochController } from '../epoch.controller';

describe('EpochController', () => {
  let controller: EpochController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EpochController],
    }).compile();

    controller = module.get<EpochController>(EpochController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
