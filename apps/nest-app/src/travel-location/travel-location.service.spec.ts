import { Test, TestingModule } from '@nestjs/testing';
import { TravelLocationService } from './travel-location.service';

describe('TravelLocationService', () => {
  let service: TravelLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelLocationService],
    }).compile();

    service = module.get<TravelLocationService>(TravelLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
