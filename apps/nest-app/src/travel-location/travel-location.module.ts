import { Module } from '@nestjs/common';
import { TravelLocationService } from './travel-location.service';

@Module({
  providers: [TravelLocationService]
})
export class TravelLocationModule {}
