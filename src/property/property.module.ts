import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { FileUploadModule } from 'src/file-upload/file-upload.module';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService],
  imports:[TypeOrmModule.forFeature([Property]),FileUploadModule],
})
export class PropertyModule {}
