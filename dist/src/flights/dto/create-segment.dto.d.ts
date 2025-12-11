import { CabinClass, SegmentType } from "../entities/segment.entity";
import { Flight } from "../entities/flight.entity";
export declare class CreateSegmentDto {
    flightNumber: string;
    departureAirport: string;
    arrivalAirport: string;
    departureTime: string;
    arrivalTime: string;
    departurelocation: string;
    arrivallocation: string;
    flightDuration: number;
    layoverDuration?: number;
    aircraftType?: string;
    operatingCarrier?: string;
    marketingCarrier?: string;
    baggageRecheckRequired: boolean;
    cabinClass: CabinClass;
    type: SegmentType;
    flight: Flight;
}
