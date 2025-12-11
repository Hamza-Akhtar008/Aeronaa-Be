import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight } from './entities/flight.entity';
import { Repository } from 'typeorm';
import { CreateSegmentDto } from './dto/create-segment.dto';
import { FlightSegment } from './entities/segment.entity';
import { UpdateSegmentDto } from './dto/update-segment.dto';
export declare class FlightsService {
    private flightRepository;
    private segmentRepository;
    constructor(flightRepository: Repository<Flight>, segmentRepository: Repository<FlightSegment>);
    create(createFlightDto: CreateFlightDto): Promise<CreateFlightDto & Flight>;
    createSegment(createSegmentDto: CreateSegmentDto): Promise<CreateSegmentDto & FlightSegment>;
    updateSegment(id: any, updateSegmentDto: UpdateSegmentDto): Promise<import("typeorm").UpdateResult>;
    deleteSegment(id: any): Promise<import("typeorm").DeleteResult>;
    findFlightSegment(flightId: number): Promise<FlightSegment[]>;
    findAll(from?: string, to?: string, flightClass?: string, departureDate?: Date, returnDate?: Date): Promise<Flight[]>;
    findOne(id: number): Promise<Flight>;
    update(id: number, updateFlightDto: UpdateFlightDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
