import { Module } from '@nestjs/common';
import { CarbookingsService } from './carbookings.service';
import { CarbookingsController } from './carbookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carbooking } from './entities/carbooking.entity';

@Module({
  controllers: [CarbookingsController],
  providers: [CarbookingsService],
  imports:[TypeOrmModule.forFeature([Carbooking])],
  exports:[CarbookingsService]
})
export class CarbookingsModule {}
