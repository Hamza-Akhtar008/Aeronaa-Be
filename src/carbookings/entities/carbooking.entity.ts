import { BaseEntity } from "base.entity";
import { Carrental } from "src/carrentals/entities/carrental.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('carbookings')
export class Carbooking extends BaseEntity {
    @Column({
        nullable: true
    })
    name: string


    @Column({
        nullable: true
    })
    email: string


    @Column({
        nullable: true
    })
    phoneNo: string


    @Column({
        nullable: true
    })
    pickUpTime: Date

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
      @JoinColumn()
      user: User;
    
      @ManyToOne(() => Carrental, { onDelete: 'CASCADE' })
      @JoinColumn()
      carRental: Carrental;

      @Column({nullable:true})
      amount:number

      @Column({
        nullable:true
      })
      pickUplocation:string

      @Column({
        nullable:true
      })
      dropOffLocation:string

        @Column({
        nullable:true
        })
        returnTime:Date

        




}
