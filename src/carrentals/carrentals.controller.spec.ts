import { Test, TestingModule } from '@nestjs/testing';
import { CarrentalsController } from './carrentals.controller';
import { CarrentalsService } from './carrentals.service';

describe('CarrentalsController', () => {
  let controller: CarrentalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarrentalsController],
      providers: [CarrentalsService],
    }).compile();

    controller = module.get<CarrentalsController>(CarrentalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
