import { ApiProperty } from "@nestjs/swagger";
import { Carrental } from "src/carrentals/entities/carrental.entity";
import { User } from "src/user/entities/user.entity";
import { Entity } from "typeorm";

export class CreateCarbookingDto {
    @ApiProperty()
    name: string


    @ApiProperty()
    email: string


    @ApiProperty()
    phoneNo: string


    @ApiProperty()
    pickUpTime: Date


    user: User;

    @ApiProperty()
    carRental: Carrental;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    pickUplocation: string

    @ApiProperty()
    dropOffLocation: string

    @ApiProperty()
    returnTime: Date

    
}
