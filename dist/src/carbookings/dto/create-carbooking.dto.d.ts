import { Carrental } from "src/carrentals/entities/carrental.entity";
import { User } from "src/user/entities/user.entity";
export declare class CreateCarbookingDto {
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
