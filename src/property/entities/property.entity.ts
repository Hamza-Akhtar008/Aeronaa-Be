import { BaseEntity } from "base.entity";
import { Status, User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('property')
export class Property extends BaseEntity{
  @Column({
    nullable:true
  })
    title:string

  @Column({
     nullable:true       
  })
  listingType:string

  @Column({
      nullable:true
  })
  propertyType:string


  @Column({
      nullable:true
  })
  description:string

  @Column({
      nullable:true
  })
  status:string

  @Column({
      nullable:true
  })
  address:string

  @Column({
      nullable:true
  })
  city:string

  @Column({
      nullable:true
  })
  province:string

  @Column({
      nullable:true
  })
  postalCode:string

  @Column({
      nullable:true
  })
  country:string

  @Column({
      nullable:true
  })
  nearByLands:string

  @Column({
      nullable:true
  })
  builtUpArea:number

  @Column({
      nullable:true
  })
  plotArea:number

  @Column({
      nullable:true
  })
  bedrooms:number

  @Column({
      nullable:true
  })
  bathrooms:number

  @Column({
      nullable:true
  })
  kitchen:number

  @Column({
      nullable:true
  })
  livingRooms:number

  @Column({
      nullable:true
  })
  balconies:number

  @Column({
      nullable:true
  })
  yearBuilt:number

  @Column({
      nullable:true
  })
  numberOfFloors:number

  @Column({
      nullable:true
  })
    floorNumber:number
    
    @Column({
      nullable:true
  })
  furnishingStatus:string

  @Column({
      nullable:true
  })
  condition:string

  @Column({
      nullable:true
  })
  price:number

  @Column({
      nullable:true
  })
  priceNegotiable:boolean

  @Column({
      nullable:true
  })
  contactNumber:string

  @Column({
      nullable:true
  })
  contactEmail:string

  @Column({
      nullable:true
  })
  contactName:string

  @Column('text', {
    nullable: true,
    array: true,
  })
  images:string[]

  @Column({
      nullable:true
  })
  videoUrl:string

   @Column('text', {
    nullable: true,
    array: true,
  })
  amenities:string[]

  @Column('text', {
    nullable: true,
    array: true,
  })
  additionalfeatures:string[]

   @ManyToOne(() => User, {
      onDelete: 'CASCADE',
    })
    @JoinColumn()
    user: User;


    @Column({nullable:true,default:Status.PENDING})
    activeStatus: Status;

    
  

}
