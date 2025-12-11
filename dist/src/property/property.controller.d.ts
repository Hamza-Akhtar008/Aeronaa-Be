/// <reference types="multer" />
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { FileService } from 'src/file-upload/file-upload.service';
export declare class PropertyController {
    private readonly propertyService;
    private readonly fileUploadService;
    constructor(propertyService: PropertyService, fileUploadService: FileService);
    create(createPropertyDto: CreatePropertyDto, user: any, files: Array<Express.Multer.File>): Promise<CreatePropertyDto & import("./entities/property.entity").Property>;
    findAll(listingType?: string, location?: string): Promise<import("./entities/property.entity").Property[]>;
    findUserBased(user: any): Promise<import("./entities/property.entity").Property[]>;
    findOne(id: string): Promise<import("./entities/property.entity").Property>;
    update(id: string, updateHotelDto: UpdatePropertyDto, files: Array<Express.Multer.File>): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
