import { CreateFlightbookingDto } from './dto/create-flightbooking.dto';
import { UpdateFlightbookingDto } from './dto/update-flightbooking.dto';
import { Flightbooking, Status } from './entities/flightbooking.entity';
import { Repository } from 'typeorm';
export declare class FlightbookingService {
    private readonly flightBookingRepository;
    constructor(flightBookingRepository: Repository<Flightbooking>);
    create(createFlightbookingDto: CreateFlightbookingDto): Promise<CreateFlightbookingDto & Flightbooking>;
    getUserFlightBookings(id: number): Promise<Flightbooking>;
    updateTicket(id: number, ticket: string): Promise<Flightbooking>;
    getUserUpcomingBookings(id: number): Promise<Flightbooking[]>;
    getAdminStats(): Promise<{
        totalPayments: any;
        monthWiseTotals: any[];
    }>;
    getUserPastBookings(id: number): Promise<Flightbooking[]>;
    findAll(status: Status): Promise<Flightbooking[]>;
    findOne(id: number): Promise<Flightbooking>;
    update(id: number, updateFlightbookingDto: UpdateFlightbookingDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findTotalBookings(): Promise<{
        totalAmount: any;
        totalBookings: number;
    }>;
    getInvoiceSum(startDate: Date, endDate: Date): Promise<number>;
}
