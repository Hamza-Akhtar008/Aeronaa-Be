import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { BookingsModule } from 'src/bookings/bookings.module';
import { UmrahbookingsModule } from 'src/umrahbookings/umrahbookings.module';
import { CarbookingsModule } from 'src/carbookings/carbookings.module';
import { FlightbookingModule } from 'src/flightbooking/flightbooking.module';

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService],
  imports:[BookingsModule,UmrahbookingsModule,CarbookingsModule,FlightbookingModule],

})
export class InvoicesModule {}
