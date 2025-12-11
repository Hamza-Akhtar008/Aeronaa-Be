import { BaseEntity } from "base.entity";
import { Status, User } from "src/user/entities/user.entity";
export declare enum CarStatus {
    ACTIVE = "active",
    MAINTAINANCE = "maintainance",
    RENTED = "rented"
}
export declare class Carrental extends BaseEntity {
    make: string;
    model: string;
    year: number;
    licensePlate: string;
    category: string;
    seats: number;
    mileage: string;
    dailyRate: number;
    location: string;
    images?: string[];
    carStatus: CarStatus;
    fuelType: string;
    createdBy: User;
    status: Status;
}
