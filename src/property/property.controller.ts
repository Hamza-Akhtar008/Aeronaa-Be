import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFiles, Query } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guard';
import { currentUser } from 'src/decorator/currentuser';
import { FileService } from 'src/file-upload/file-upload.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('Property')
@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService,
    private readonly fileUploadService: FileService,
  ) { }

  @ApiBearerAuth()
  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(AnyFilesInterceptor())
  async create(@Body() createPropertyDto: CreatePropertyDto,
    @currentUser() user: any,
    @UploadedFiles() files: Array<Express.Multer.File>,) {

    var images = [];
    if (files?.length > 0) {
      for (const [index, file] of files.entries()) {
        var url: any;
        url = await this.fileUploadService.uploadToS3(file.buffer, file.originalname);
        images.push(url.Location);
      }
      return this.propertyService.create({ ...createPropertyDto, user: user.userId, images: images });
    }
    else
      return this.propertyService.create({ ...createPropertyDto, user: user.userId });
  }

  @Get()
  findAll(@Query('listingType')listingType?:string,@Query('location')location?:string) {
    return this.propertyService.findAll(listingType,location);
  }

  
  @ApiBearerAuth()
  @Get('/user/all')
  @UseGuards(JwtAuthGuard)
  findUserBased(@currentUser() user: any) {
    return this.propertyService.findUserBased(user.userId);   
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(+id);
  }

 
   @UseInterceptors(AnyFilesInterceptor())
   @Patch(':id')
   async update(@Param('id') id: string, @Body() updateHotelDto: UpdatePropertyDto, @UploadedFiles() files: Array<Express.Multer.File>) {
 
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
     return this.propertyService.update(+id,updateHotelDto);
   }
   else
     return this.propertyService.update(+id,{...updateHotelDto,images:images});
 
 }
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}
