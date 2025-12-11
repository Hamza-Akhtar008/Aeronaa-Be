import { Module } from '@nestjs/common';
import { FlightbookingService } from './flightbooking.service';
import { FlightbookingController } from './flightbooking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from 'src/flights/entities/flight.entity';
import { Flightbooking } from './entities/flightbooking.entity';
import { FileUploadModule } from 'src/file-upload/file-upload.module';
import { EmailModule } from 'src/email/email.module';


@Module({
  controllers: [FlightbookingController],
  providers: [FlightbookingService],
  imports:[TypeOrmModule.forFeature([Flightbooking]),FileUploadModule,EmailModule],
  exports:[FlightbookingService]
})
export class FlightbookingModule {}
