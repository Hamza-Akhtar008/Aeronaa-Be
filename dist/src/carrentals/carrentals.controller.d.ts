/// <reference types="multer" />
import { CarrentalsService } from './carrentals.service';
import { CreateCarrentalDto } from './dto/create-carrental.dto';
import { UpdateCarrentalDto } from './dto/update-carrental.dto';
import { UserService } from 'src/user/user.service';
import { FileService } from 'src/file-upload/file-upload.service';
import { Status } from 'src/user/entities/user.entity';
import { CarbookingsService } from 'src/carbookings/carbookings.service';
export declare class CarrentalsController {
    private readonly carrentalsService;
    private readonly usersService;
    private readonly fileUploadService;
    private readonly carBookingService;
    constructor(carrentalsService: CarrentalsService, usersService: UserService, fileUploadService: FileService, carBookingService: CarbookingsService);
    create(createCarrentalDto: CreateCarrentalDto, user: any, files: Array<Express.Multer.File>): Promise<CreateCarrentalDto & import("./entities/carrental.entity").Carrental>;
    findAll(location: string, status: Status): Promise<import("./entities/carrental.entity").Carrental[]>;
    findOne(id: string): Promise<import("./entities/carrental.entity").Carrental[]>;
    update(id: string, updateHotelDto: UpdateCarrentalDto, files: Array<Express.Multer.File>): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    findByVendor(user: any): Promise<import("./entities/carrental.entity").Carrental[]>;
    getStats(user: any): Promise<{
        totalCars: number;
        stats: {
            totalBookings: number;
            totalRevenue: number;
            result: any[];
        };
    }>;
}
