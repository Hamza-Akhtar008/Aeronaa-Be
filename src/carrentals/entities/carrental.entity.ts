import { BaseEntity } from "base.entity";
import { Status, User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

export enum CarStatus{
    ACTIVE='active',
    MAINTAINANCE='maintainance',
    RENTED='rented'
}

@Entity('car-rentals')
export class Carrental extends BaseEntity {
    @Column()
    make:string

    @Column()
    model:string

    @Column()
    year:number

    @Column()
    licensePlate:string

    @Column()
    category:string

    @Column()
    seats:number

    @Column()
    mileage:string

    @Column()
    dailyRate:number

    @Column()
    location:string

     @Column('text', {
    nullable: true,
    array: true,
  })
  images?: string[]

  @Column()
  carStatus:CarStatus

  @Column({
    nullable:true
  })
  fuelType:string


  @ManyToOne(() => User, {
      onDelete: 'CASCADE',
    })
    @JoinColumn()
    
  createdBy:User

  @Column({
    nullable:true,
    default:Status.PENDING
  })
  status:Status


}
