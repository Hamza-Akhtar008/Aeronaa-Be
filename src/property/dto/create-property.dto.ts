import { ApiProperty } from "@nestjs/swagger"
import { Status, User } from "src/user/entities/user.entity"

export class CreatePropertyDto {
    @ApiProperty()
    title:string
    
     @ApiProperty()
    listingType:string
    
     @ApiProperty()
    propertyType:string
    
     @ApiProperty()
      description:string
    
     @ApiProperty()
      status:string
    
     @ApiProperty()
      address:string
    
     @ApiProperty()
      city:string
    
     @ApiProperty()
      province:string
    
     @ApiProperty()
      postalCode:string
    
     @ApiProperty()
      country:string
    
     @ApiProperty()
      nearByLands:string
    
     @ApiProperty()
      builtUpArea:number
    
     @ApiProperty()
      plotArea:number
    
     @ApiProperty()
      bedrooms:number
    
     @ApiProperty()
      bathrooms:number
    
     @ApiProperty()
      kitchen:number
    
     @ApiProperty()
      livingRooms:number
    
     @ApiProperty()
      balconies:number
    
     @ApiProperty()
      yearBuilt:number
    
     @ApiProperty()
      numberOfFloors:number
    
     @ApiProperty()
    floorNumber:number
        
    @ApiProperty()
      furnishingStatus:string
    
     @ApiProperty()
      condition:string
    
     @ApiProperty()
      price:number
    
     @ApiProperty()
      priceNegotiable:boolean
    
     @ApiProperty()
      contactNumber:string
    
     @ApiProperty()
      contactEmail:string
    
     @ApiProperty()
      contactName:string
    
     @ApiProperty()
      images:string[]
    
     @ApiProperty()
      videoUrl:string
    
     @ApiProperty()
      amenities:string[]
    
     @ApiProperty()
      additionalfeatures:string[]

     user: User;

     @ApiProperty()
     activeStatus: Status;
      
    
      }
    

