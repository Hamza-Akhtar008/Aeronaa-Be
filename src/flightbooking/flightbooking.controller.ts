import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FlightbookingService } from './flightbooking.service';
import { CreateFlightbookingDto } from './dto/create-flightbooking.dto';
import { UpdateFlightbookingDto } from './dto/update-flightbooking.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard';
import { currentUser } from 'src/decorator/currentuser';
import {
  Status
} from "./entities/flightbooking.entity"
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from 'src/file-upload/file-upload.service';
import { EmailService } from 'src/email/email.service';
import { get } from 'http';


@ApiTags('flight-bookings')
@Controller('flightbooking')
export class FlightbookingController {
  constructor(private readonly flightbookingService: FlightbookingService, 
    private readonly fileUploadService: FileService,
  private readonly emailService: EmailService) { }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createFlightbookingDto: CreateFlightbookingDto, @currentUser() user: any) {
    const booking=await this.flightbookingService.create({ ...createFlightbookingDto, bookingFor: user.userId });
    return booking
  }

  @Patch('ticket/file/:id')
  @UseInterceptors(FileInterceptor('ticket'))
  async updateTicket(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {

    if (file) {
     const url = await this.fileUploadService.uploadToS3(file.buffer, file.originalname);
   
     const update=await this.flightbookingService.updateTicket(+id,url.Location);
      const flightBooking=await this.flightbookingService.findOne(+id);
      const email= await this.emailService.flightConfirmationMail({
        to:flightBooking.bookingFor.email,
        subject: 'Flight Booking Confirmation',
        text: 'Your flight booking is confirmed',
      },flightBooking.ticket)
      return update
    }



  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/user/based/')
  getUserFlighBookings(@currentUser() user: any) {
    return this.flightbookingService.getUserFlightBookings(user.userId)
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/user/past/')
  getUserPastBookings(@currentUser() user: any) {
    return this.flightbookingService.getUserPastBookings(user.userId)
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/user/upcoming/')
  getUserUpComingBookings(@currentUser() user: any) {
    return this.flightbookingService.getUserUpcomingBookings(user.userId)
  }

  @Get('admin/stats')
  async getAdminStats(){
    return this.flightbookingService.getAdminStats();
  }

  @Get()
  findAll(@Query('status') status: Status) {
    return this.flightbookingService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightbookingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlightbookingDto: UpdateFlightbookingDto) {
    return this.flightbookingService.update(+id, updateFlightbookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flightbookingService.remove(+id);
  }

  @Get('/agent/:id')
  getAgentBookings(@Param('id') id: string) {
    return this.flightbookingService.getUserFlightBookings(+id)
  }

 

}
