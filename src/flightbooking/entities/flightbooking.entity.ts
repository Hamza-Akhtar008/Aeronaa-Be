import { BaseEntity } from "base.entity";
import { Flight } from "src/flights/entities/flight.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";


export enum Status{
    CONFIRMED='confirmed',
    RESERVED='RESERVED'
}

@Entity('flight-booking')
export class Flightbooking extends BaseEntity{
     @Column({ type: 'jsonb', nullable: true })
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
    @Column()
    firstName:string

    @Column({
        nullable:true
    })
    middleName?:string
    
    @Column()
    lastName:string

    @Column()
    dob:Date

    @Column()
    gender:string

    @Column()
    email:string

    @Column()
    phoneNumber:string

    @Column()
    passportNumber:string

    @Column()
    passportExpirationDate:Date

    @Column()
    country:string

    @Column()
    nationality:string

    @Column({
      default:null  
    })
    pnrNumber:string

    @Column({
        default:Status.RESERVED
    })
    bookingStatus:Status

    @Column({
        nullable:true
    })
    ticket:string


    @ManyToOne(()=>(Flight),{onDelete:'CASCADE'})
    @JoinColumn()
    flight:Flight

    @ManyToOne(()=>(User),{onDelete:'CASCADE'})
    @JoinColumn()
    bookingFor:User

    @Column({
        nullable:true
    })
    amount:number




}
