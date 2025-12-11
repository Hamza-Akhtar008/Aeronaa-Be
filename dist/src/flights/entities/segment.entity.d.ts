import { BaseEntity } from 'base.entity';
import { Flight } from './flight.entity';
export declare enum CabinClass {
    ECONOMY = "economy",
    BUSINESS = "business",
    FIRST = "first"
}
export declare enum SegmentType {
    OUTBOUND = "outbound",
    RETURN = "return"
}
export declare class FlightSegment extends BaseEntity {
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
