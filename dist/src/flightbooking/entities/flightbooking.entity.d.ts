import { BaseEntity } from "base.entity";
import { Flight } from "src/flights/entities/flight.entity";
import { User } from "src/user/entities/user.entity";
export declare enum Status {
    CONFIRMED = "confirmed",
    RESERVED = "RESERVED"
}
export declare class Flightbooking extends BaseEntity {
    traveller: {
        firstName: string;
        lastName?: string;
        emailAddress?: string;
        phoneNumber?: string;
        gender?: string;
        dateOfBirth?: Date;
        nationality?: string;
        passportNumber?: string;
        passportExpiryDate?: Date;
        specialRequests?: string;
    }[];
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
    pnrNumber: string;
    bookingStatus: Status;
    ticket: string;
    flight: Flight;
    bookingFor: User;
    amount: number;
}
