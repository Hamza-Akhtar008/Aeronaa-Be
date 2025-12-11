import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { CreateSegmentDto } from './dto/create-segment.dto';
import { UpdateSegmentDto } from './dto/update-segment.dto';
export declare class FlightsController {
    private readonly flightsService;
    constructor(flightsService: FlightsService);
    create(createFlightDto: CreateFlightDto): Promise<CreateFlightDto & import("./entities/flight.entity").Flight>;
    createSegments(createSegmentDto: CreateSegmentDto): Promise<CreateSegmentDto & import("./entities/segment.entity").FlightSegment>;
    updateSegments(createSegmentDto: UpdateSegmentDto, id: string): Promise<import("typeorm").UpdateResult>;
    deleteSegment(id: string): Promise<import("typeorm").DeleteResult>;
    findFlightSegments(id: string): Promise<import("./entities/segment.entity").FlightSegment[]>;
    findAll(from?: string, to?: string, departureDate?: string, returnDate?: string, flightClass?: string): Promise<import("./entities/flight.entity").Flight[]>;
    findOne(id: string): Promise<import("./entities/flight.entity").Flight>;
    update(id: string, updateFlightDto: UpdateFlightDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
