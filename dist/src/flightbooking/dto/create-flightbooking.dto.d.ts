import { Flight } from "src/flights/entities/flight.entity";
import { User } from "src/user/entities/user.entity";
import { Status } from "../entities/flightbooking.entity";
export declare class CreateFlightbookingDto {
    firstName: string;
    middleName?: string;
    lastName: string;
    dob: Date;
    gender: string;
    email: string;
    phoneNumber: string;
    passportNumber: string;
    passportExpirationDate: Date;
    country: string;
    nationality: string;
    flight: Flight;
    bookingFor: User;
    bookingStatus: Status;
    ticket: string;
    pnrNumber?: string;
    amount: number;
}
