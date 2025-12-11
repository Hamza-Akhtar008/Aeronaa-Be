import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsModule } from 'src/bookings/bookings.module';
import { UmrahbookingsModule } from 'src/umrahbookings/umrahbookings.module';
import { CarbookingsModule } from 'src/carbookings/carbookings.module';
import { Invoice } from './entities/invoice.entity';
import { FlightbookingModule } from 'src/flightbooking/flightbooking.module';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService],
  exports:[InvoiceService],
  imports:[TypeOrmModule.forFeature([Invoice]),BookingsModule,UmrahbookingsModule,CarbookingsModule,FlightbookingModule],
})
export class InvoiceModule {}
