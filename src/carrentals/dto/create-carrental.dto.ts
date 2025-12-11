import { ApiProperty } from "@nestjs/swagger"
import { Status, User } from "src/user/entities/user.entity"
import { CarStatus } from "../entities/carrental.entity"

export class CreateCarrentalDto {
    @ApiProperty()
      make:string
  
      @ApiProperty()
      model:string
  
      @ApiProperty()
      year:number
  
      @ApiProperty()
      licensePlate:string
  
      @ApiProperty()
      category:string
  
      @ApiProperty()
      seats:number
  
      @ApiProperty()
      mileage:string
  
      @ApiProperty()
      dailyRate:number
  
      @ApiProperty()
      location:string

      @ApiProperty()
      fuelType:string
  
      
     images?: string[]
  
     carStatus:CarStatus
    
     createdBy:User

     status?:Status
}
