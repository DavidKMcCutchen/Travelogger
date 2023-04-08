import { Test, TestingModule } from '@nestjs/testing';
import { TravelLocationController } from './travel-location.controller';

describe('TravelLocationController', () => {
  let controller: TravelLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelLocationController],
    }).compile();

    controller = module.get<TravelLocationController>(TravelLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
