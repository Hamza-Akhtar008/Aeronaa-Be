import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CarbookingsService } from './carbookings.service';
import { CreateCarbookingDto } from './dto/create-carbooking.dto';
import { UpdateCarbookingDto } from './dto/update-carbooking.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard';
import { currentUser } from 'src/decorator/currentuser';


@ApiTags('carbookings')
@Controller('carbookings')
@ApiBearerAuth()
export class CarbookingsController {
  constructor(private readonly carbookingsService: CarbookingsService) {}

  
  @Post()
   @UseGuards(JwtAuthGuard)
  create(@Body() createCarbookingDto: CreateCarbookingDto,@currentUser()user:any) {
    return this.carbookingsService.create({...createCarbookingDto,user:user.userId});
  }
 
  @Get('/vendor/all')
   @UseGuards(JwtAuthGuard)
  findVendorAll(@currentUser()user:any) {
    return this.carbookingsService.findVendorBookings(user.userId);
    
  }

    @Get('/past')
   @UseGuards(JwtAuthGuard)
  findPastBookings(@currentUser()user:any) {
    return this.carbookingsService.findPastBookings(user.userId);
    
  }

    @Get('/cancelled')
   @UseGuards(JwtAuthGuard)
  findCancelledBookings(@currentUser()user:any) {
    return this.carbookingsService.findCancelledBookings(user.userId);
    
  }

   @Get('/upcoming')
   @UseGuards(JwtAuthGuard)
  findUpComingBookings(@currentUser()user:any) {
    return this.carbookingsService.findUpComingBookings(user.userId);
    
  }

  @Get()
  findAll() {
    return this.carbookingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carbookingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarbookingDto: UpdateCarbookingDto) {
    return this.carbookingsService.update(+id, updateCarbookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carbookingsService.remove(+id);
  }

  @Get('/agent/:id')
  findByAgent(@Param('id') id: string) {
    return this.carbookingsService.findUserBookings(+id);
  }
}
