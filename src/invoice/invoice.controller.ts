import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Role } from 'src/user/entities/user.entity';

import { BookingsService } from 'src/bookings/bookings.service';
import { UmrahbookingsService } from 'src/umrahbookings/umrahbookings.service';
import { CarbookingsService } from 'src/carbookings/carbookings.service';
import { ApiTags } from '@nestjs/swagger';
import { FlightbookingService } from 'src/flightbooking/flightbooking.service';

@ApiTags('receipts')
@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService,
    private readonly bookingService: BookingsService,
    private readonly umrahBookingService: UmrahbookingsService,
    private readonly carBookingService: CarbookingsService,
    private readonly flightBookingService:FlightbookingService
  ) { }

  @Post()
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {
 
    const invoiceExist = await this.invoiceService.findInvoiceByDate(createInvoiceDto.startDate, createInvoiceDto.endDate, createInvoiceDto.vendorId)
      console.log(invoiceExist)
    if (invoiceExist) {
      throw new BadRequestException('The dates selected are already included in existing invoices')
    }
    

  if(createInvoiceDto.role==Role.CARRENTAL){
    createInvoiceDto.totalsales=await this.carBookingService.getInvoiceSum(
      createInvoiceDto.vendorId,
      createInvoiceDto.startDate,
      createInvoiceDto.endDate
    )
  }
  else
    if(createInvoiceDto.role==Role.UMRAH){
    createInvoiceDto.totalsales=await this.umrahBookingService.getInvoiceSum(
      createInvoiceDto.vendorId,
      createInvoiceDto.startDate,
      createInvoiceDto.endDate
    )
  }
   else
    if(createInvoiceDto.role==Role.SUPPORT){
    createInvoiceDto.totalsales=await this.flightBookingService.getInvoiceSum(
      createInvoiceDto.startDate,
      createInvoiceDto.endDate,
    )
    createInvoiceDto.isFlightBooking=true
    createInvoiceDto.vendorId=null
  }
  createInvoiceDto.aeronaaComission=Math.floor(0.03*createInvoiceDto.totalsales)
  createInvoiceDto.vendorNet=createInvoiceDto.totalsales-createInvoiceDto.aeronaaComission





  if(!createInvoiceDto.totalsales){
    throw new BadRequestException('No bookings found for the given dates')
  }
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoiceService.update(+id, updateInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceService.remove(+id);
  }

  @Get('/vendor/:id')
  async getVendorInvoice(@Param('id') id: string) {
    return this.invoiceService.getVendorInvoice(+id);
  }
}
