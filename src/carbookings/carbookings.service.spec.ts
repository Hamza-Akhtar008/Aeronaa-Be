import { Test, TestingModule } from '@nestjs/testing';
import { CarbookingsService } from './carbookings.service';

describe('CarbookingsService', () => {
  let service: CarbookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarbookingsService],
    }).compile();

    service = module.get<CarbookingsService>(CarbookingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
