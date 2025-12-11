/// <reference types="multer" />
import { FlightbookingService } from './flightbooking.service';
import { CreateFlightbookingDto } from './dto/create-flightbooking.dto';
import { UpdateFlightbookingDto } from './dto/update-flightbooking.dto';
import { Status } from "./entities/flightbooking.entity";
import { FileService } from 'src/file-upload/file-upload.service';
import { EmailService } from 'src/email/email.service';
export declare class FlightbookingController {
    private readonly flightbookingService;
    private readonly fileUploadService;
    private readonly emailService;
    constructor(flightbookingService: FlightbookingService, fileUploadService: FileService, emailService: EmailService);
    create(createFlightbookingDto: CreateFlightbookingDto, user: any): Promise<CreateFlightbookingDto & import("./entities/flightbooking.entity").Flightbooking>;
    updateTicket(id: string, file: Express.Multer.File): Promise<import("./entities/flightbooking.entity").Flightbooking>;
    getUserFlighBookings(user: any): Promise<import("./entities/flightbooking.entity").Flightbooking>;
    getUserPastBookings(user: any): Promise<import("./entities/flightbooking.entity").Flightbooking[]>;
    getUserUpComingBookings(user: any): Promise<import("./entities/flightbooking.entity").Flightbooking[]>;
    getAdminStats(): Promise<{
        totalPayments: any;
        monthWiseTotals: any[];
    }>;
    findAll(status: Status): Promise<import("./entities/flightbooking.entity").Flightbooking[]>;
    findOne(id: string): Promise<import("./entities/flightbooking.entity").Flightbooking>;
    update(id: string, updateFlightbookingDto: UpdateFlightbookingDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    getAgentBookings(id: string): Promise<import("./entities/flightbooking.entity").Flightbooking>;
}
