import { CreateCarbookingDto } from './dto/create-carbooking.dto';
import { UpdateCarbookingDto } from './dto/update-carbooking.dto';
import { Carbooking } from './entities/carbooking.entity';
import { Repository } from 'typeorm';
export declare class CarbookingsService {
    private carbookingRepository;
    constructor(carbookingRepository: Repository<Carbooking>);
    create(createCarbookingDto: CreateCarbookingDto): Promise<CreateCarbookingDto & Carbooking>;
    findPastBookings(id: number): Promise<Carbooking[]>;
    findUpComingBookings(id: number): Promise<Carbooking[]>;
    findCancelledBookings(id: number): Promise<Carbooking[]>;
    findVendorBookings(id: number): Promise<Carbooking[]>;
    findAll(): Promise<Carbooking[]>;
    findOne(id: number): Promise<Carbooking>;
    update(id: number, updateCarbookingDto: UpdateCarbookingDto): Promise<import("typeorm").UpdateResult>;
    findUserBookings(id: number): Promise<Carbooking[]>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    carInvoiceAdmin(): Promise<{
        totalPayments: any;
        monthWiseTotals: any[];
        vendorTotals: any[];
        monthWiseVendorTotals: any[];
    }>;
    umrahBookingStats(userId: number): Promise<{
        totalBookings: number;
        totalRevenue: number;
        result: any[];
    }>;
    findTotalBookings(): Promise<{
        totalAmount: any;
        totalBookings: number;
    }>;
    getInvoiceSum(vendorId: number, startDate: Date, endDate: Date): Promise<number>;
}
