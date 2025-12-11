import { Module } from '@nestjs/common';
import { CarrentalsService } from './carrentals.service';
import { CarrentalsController } from './carrentals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrental } from './entities/carrental.entity';
import { UserModule } from 'src/user/user.module';
import { FileUploadModule } from 'src/file-upload/file-upload.module';
import { CarbookingsModule } from 'src/carbookings/carbookings.module';

@Module({
  controllers: [CarrentalsController],
  providers: [CarrentalsService],
  imports:[TypeOrmModule.forFeature([Carrental]),UserModule,FileUploadModule,CarbookingsModule]
})
export class CarrentalsModule {}
