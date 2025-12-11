import { Test, TestingModule } from '@nestjs/testing';
import { CarrentalsService } from './carrentals.service';

describe('CarrentalsService', () => {
  let service: CarrentalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarrentalsService],
    }).compile();

    service = module.get<CarrentalsService>(CarrentalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
