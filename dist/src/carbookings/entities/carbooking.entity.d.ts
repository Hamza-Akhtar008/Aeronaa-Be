import { BaseEntity } from "base.entity";
import { Carrental } from "src/carrentals/entities/carrental.entity";
import { User } from "src/user/entities/user.entity";
export declare class Carbooking extends BaseEntity {
    name: string;
    email: string;
    phoneNo: string;
    pickUpTime: Date;
    user: User;
    carRental: Carrental;
    amount: number;
    pickUplocation: string;
    dropOffLocation: string;
    returnTime: Date;
}
