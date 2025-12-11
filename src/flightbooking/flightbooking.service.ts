import { Injectable } from '@nestjs/common';
import { CreateFlightbookingDto } from './dto/create-flightbooking.dto';
import { UpdateFlightbookingDto } from './dto/update-flightbooking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Flightbooking, Status } from './entities/flightbooking.entity';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class FlightbookingService {
  constructor(@InjectRepository(Flightbooking)
  private readonly flightBookingRepository: Repository<Flightbooking>) {

  }
  create(createFlightbookingDto: CreateFlightbookingDto) {
    return this.flightBookingRepository.save(createFlightbookingDto)
  }

  getUserFlightBookings(id: number) {
    return this.flightBookingRepository.findOne({
      where: {
        bookingFor: {
          id
        }

      },
      relations: ['bookingFor', 'flight']
    })

  }

  async updateTicket(id: number, ticket: string) {
    const bookingTicket = await this.findOne(id)
    bookingTicket.ticket = ticket
    return this.flightBookingRepository.save(bookingTicket)
  }

  getUserUpcomingBookings(id: number) {
    return this.flightBookingRepository.find({
      where: {
        bookingFor: { id },
        flight: {
          arrivalDate: MoreThan(new Date(Date.now() - 86400000)),
        }
      },
      relations: ['bookingFor', 'flight'],
      order: {
        flight: {
          arrivalDate: 'ASC'
        }
      }

    })




  }

  async getAdminStats(){
     const totalPayments = await this.flightBookingRepository
  .createQueryBuilder("booking")
  .select(`SUM(booking.amount)`, "Total")
  .getRawOne();
  

const monthWiseTotals = await this.flightBookingRepository
  .createQueryBuilder("booking")
  .select("TO_CHAR(booking.createdAt, 'YYYY-MM')", "month")
  .addSelect("SUM(booking.amount)", "total")
  .groupBy("month")
  .orderBy("month", "ASC")
  .getRawMany();

 



  return {
    totalPayments,
    monthWiseTotals,
  }
  }

  



  getUserPastBookings(id: number) {
    return this.flightBookingRepository.find({
      where: {
        bookingFor: { id },
        flight: {
          arrivalDate: LessThan(new Date(Date.now() - 86400000)),
        }
      },
      relations: ['bookingFor', 'flight'],
      order: {
        flight: {
          arrivalDate: 'DESC'
        }
      }

    })




  }

  findAll(status: Status) {
    return this.flightBookingRepository.find({
      order: {
        createdAt: 'DESC'
      },
      relations: { flight: true }
    })
  }

  findOne(id: number) {
    return this.flightBookingRepository.findOne({
      where: {
        id
      },
      relations: ['bookingFor', 'flight']
    })
  }

  update(id: number, updateFlightbookingDto: UpdateFlightbookingDto) {
    return this.flightBookingRepository.update(id, updateFlightbookingDto)
  }

  remove(id: number) {
    return this.flightBookingRepository.delete(id)
  }

   async findTotalBookings() {
    const totalAmount = await this.flightBookingRepository
      .createQueryBuilder('booking')
      .select('SUM(booking.amount)', 'totalAmount')
      .getRawOne();
    const totalBookings = await this.flightBookingRepository.count();
    return {
      totalAmount: totalAmount,
      totalBookings: totalBookings
    }
  }

    async getInvoiceSum( startDate: Date, endDate: Date) {
  
      return await this.flightBookingRepository.sum('amount', {
        createdAt: Between(startDate, endDate),
        
        
      })
    }
}
