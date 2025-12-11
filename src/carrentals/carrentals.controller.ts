import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards, UploadedFiles, BadRequestException, Query } from '@nestjs/common';
import { CarrentalsService } from './carrentals.service';
import { CreateCarrentalDto } from './dto/create-carrental.dto';
import { UpdateCarrentalDto } from './dto/update-carrental.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guard';
import { currentUser } from 'src/decorator/currentuser';
import { UserService } from 'src/user/user.service';
import { FileService } from 'src/file-upload/file-upload.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Status } from 'src/user/entities/user.entity';
import { CarbookingsService } from 'src/carbookings/carbookings.service';

@ApiTags('CarRentals')
@Controller('carrentals')
export class CarrentalsController {
  constructor(private readonly carrentalsService: CarrentalsService,
    private readonly usersService: UserService,
    private readonly fileUploadService: FileService,
    private readonly carBookingService:CarbookingsService
  ) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(AnyFilesInterceptor())
  async create(@Body() createCarrentalDto: CreateCarrentalDto,
    @currentUser() user: any,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log("i am hit")
    const currentUser = await this.usersService.findOne(user.userId);
    var images = [];
    console.log("iam file ",files)
    if (files?.length > 0) {
      for (const [index, file] of files.entries()) {
        var url: any;
        url = await this.fileUploadService.uploadToS3(file.buffer, file.originalname);
        images.push(url.Location);
      }
      return this.carrentalsService.create({ ...createCarrentalDto, images: images, createdBy: currentUser });
    }
    else
      throw new BadRequestException('Please upload atleast one image');
  }

  @Get()
  findAll(@Query('location')location:string,
@Query('status')status:Status) {
    return this.carrentalsService.findAll(location,status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carrentalsService.findOne(+id);
  }

  @Patch(':id')
   @UseInterceptors(AnyFilesInterceptor())
 async update(@Param('id') id: string, @Body() updateHotelDto: UpdateCarrentalDto, 
  @UploadedFiles() files: Array<Express.Multer.File>,) {
      var images = [];
      if(files?.length > 0){
    for (const [index, file] of files.entries()) {
      var url: any;
        url = await this.fileUploadService.uploadToS3(file.buffer, file.originalname);
        images.push(url.Location);
     }
     if (Array.isArray(updateHotelDto.images) && updateHotelDto.images.length > 0) {
     updateHotelDto.images = [...updateHotelDto.images, ...images];
     // If you want to keep existing images and add new ones, you can do
    return this.carrentalsService.update(+id,updateHotelDto);
  }
  else
    return this.carrentalsService.update(+id,{...updateHotelDto,images:images});

}
  else
  return this.carrentalsService.update(+id,updateHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carrentalsService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/fleet/vendor')
  async findByVendor(@currentUser()user:any){
     return this.carrentalsService.findByVendor(user.userId);

  }

  @ApiBearerAuth()
    @Get('/dashboard/stats')
    @UseGuards(JwtAuthGuard)
    async getStats(@currentUser()user:any){
      const totalCars=await this.carrentalsService.getStats(user.userId)
      const stats=await this.carBookingService.umrahBookingStats(user.userId)
      return {totalCars,stats}
  
    }

  

}
