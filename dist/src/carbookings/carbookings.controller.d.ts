import { CarbookingsService } from './carbookings.service';
import { CreateCarbookingDto } from './dto/create-carbooking.dto';
import { UpdateCarbookingDto } from './dto/update-carbooking.dto';
export declare class CarbookingsController {
    private readonly carbookingsService;
    constructor(carbookingsService: CarbookingsService);
    create(createCarbookingDto: CreateCarbookingDto, user: any): Promise<CreateCarbookingDto & import("./entities/carbooking.entity").Carbooking>;
    findVendorAll(user: any): Promise<import("./entities/carbooking.entity").Carbooking[]>;
    findPastBookings(user: any): Promise<import("./entities/carbooking.entity").Carbooking[]>;
    findCancelledBookings(user: any): Promise<import("./entities/carbooking.entity").Carbooking[]>;
    findUpComingBookings(user: any): Promise<import("./entities/carbooking.entity").Carbooking[]>;
    findAll(): Promise<import("./entities/carbooking.entity").Carbooking[]>;
    findOne(id: string): Promise<import("./entities/carbooking.entity").Carbooking>;
    update(id: string, updateCarbookingDto: UpdateCarbookingDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    findByAgent(id: string): Promise<import("./entities/carbooking.entity").Carbooking[]>;
}
