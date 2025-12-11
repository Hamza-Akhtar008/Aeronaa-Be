import { Status, User } from "src/user/entities/user.entity";
import { CarStatus } from "../entities/carrental.entity";
export declare class CreateCarrentalDto {
    make: string;
    model: string;
    year: number;
    licensePlate: string;
    category: string;
    seats: number;
    mileage: string;
    dailyRate: number;
    location: string;
    fuelType: string;
    images?: string[];
    carStatus: CarStatus;
    createdBy: User;
    status?: Status;
}
