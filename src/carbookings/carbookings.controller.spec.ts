import { Test, TestingModule } from '@nestjs/testing';
import { CarbookingsController } from './carbookings.controller';
import { CarbookingsService } from './carbookings.service';

describe('CarbookingsController', () => {
  let controller: CarbookingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarbookingsController],
      providers: [CarbookingsService],
    }).compile();

    controller = module.get<CarbookingsController>(CarbookingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
