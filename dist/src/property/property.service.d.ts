import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { Repository } from 'typeorm';
export declare class PropertyService {
    private readonly propertyRepository;
    constructor(propertyRepository: Repository<Property>);
    create(createPropertyDto: CreatePropertyDto): Promise<CreatePropertyDto & Property>;
    findAll(listingType?: string, location?: string): Promise<Property[]>;
    findOne(id: number): Promise<Property>;
    findUserBased(id: number): Promise<Property[]>;
    update(id: number, updatePropertyDto: UpdatePropertyDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
