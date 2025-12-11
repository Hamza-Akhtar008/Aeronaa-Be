import { Injectable } from '@nestjs/common';
import { CreateCarbookingDto } from './dto/create-carbooking.dto';
import { UpdateCarbookingDto } from './dto/update-carbooking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Carbooking } from './entities/carbooking.entity';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class CarbookingsService {
  constructor(@InjectRepository(Carbooking) private carbookingRepository: Repository<Carbooking>) {

  }
  create(createCarbookingDto: CreateCarbookingDto) {
    return this.carbookingRepository.save(createCarbookingDto);
  }

  async findPastBookings(id: number) {
    return this.carbookingRepository.find({
      where: {
        user: {
          id
        },
        pickUpTime: LessThan(new Date(Date.now() - 86400000)),
        isActive: true


      }
    })

  }

  async findUpComingBookings(id: number) {
    return this.carbookingRepository.find({
      where: {
        user: {
          id
        },
        pickUpTime: MoreThan(new Date(Date.now() - 86400000)),
        isActive: true


      }
    })

  }

  async findCancelledBookings(id: number) {
    return this.carbookingRepository.find({
      where: {
        user: {
          id
        },

        isActive: false


      }
    })

  }



  findVendorBookings(id: number) {
    return this.carbookingRepository.find({
      where: {
        carRental: {
          createdBy: {
            id
          }

        }
      },
      relations: ['carRental']
    });
  }
  findAll() {
    return this.carbookingRepository.find({
      relations: ['carRental', 'user'],
      order: {
        createdAt: 'DESC'
      }
    });
  }

  findOne(id: number) {
    return this.carbookingRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: number, updateCarbookingDto: UpdateCarbookingDto) {
    return this.carbookingRepository.update(id, updateCarbookingDto);
  }

  findUserBookings(id: number) {
    return this.carbookingRepository.find({
      where: {
        user: {
          id
        },

      },
      relations: ['carRental']
    })
  }

  remove(id: number) {
    return this.carbookingRepository.delete(id)
  }

  async carInvoiceAdmin() {

    const totalPayments = await this.carbookingRepository
      .createQueryBuilder("booking")
      .select(`SUM(booking.amount)`, "Total")
      .getRawOne();


    const monthWiseTotals = await this.carbookingRepository
      .createQueryBuilder("booking")
      .select("TO_CHAR(booking.createdAt, 'YYYY-MM')", "month")
      .addSelect("SUM(booking.amount)", "total")
      .groupBy("month")
      .orderBy("month", "ASC")
      .getRawMany();

    const vendorTotals = await this.carbookingRepository
      .createQueryBuilder("booking")
      .leftJoin("booking.carRental", "hotel")
      .leftJoin("hotel.createdBy", "vendor")
      .select("vendor.id", "vendorId")
      .addSelect("vendor.name", "vendorName")
      .addSelect("SUM(booking.amount)", "total")
      .groupBy("vendor.id")
      .addGroupBy("vendor.name")
      .orderBy("total", "DESC")
      .getRawMany();

    const monthWiseVendorTotals = await this.carbookingRepository
      .createQueryBuilder("booking")
      .leftJoin("booking.carRental", "hotel")
      .leftJoin("hotel.createdBy", "vendor")
      .select("vendor.id", "vendorId")
      .addSelect("vendor.name", "vendorName")
      .addSelect("TO_CHAR(booking.createdAt, 'YYYY-MM')", "month")
      .addSelect("SUM(booking.amount)", "total") // 👈 overall total
      .groupBy("vendor.id")
      .addGroupBy("vendor.name")
      .addGroupBy("month")
      .orderBy("vendor.id", "ASC")
      .addOrderBy("month", "ASC")
      .getRawMany();

    return {
      totalPayments,
      monthWiseTotals,
      vendorTotals,
      monthWiseVendorTotals,
    }
  }

  async umrahBookingStats(userId: number) {
    const totalBookings = await this.carbookingRepository.count({
      where: {
        carRental: {
          createdBy: {
            id: userId
          }
        }
      }
    })
    const totalRevenue = await this.carbookingRepository.sum('amount', {
      carRental: {
        createdBy: {
          id: userId
        }
      }
    }
    )
    const result = await this.carbookingRepository
      .createQueryBuilder('booking').
      leftJoin('booking.carRental', 'umrah')
      .leftJoin('umrah.createdBy', 'user')
      .select('umrah.category', 'category')
      .addSelect('COUNT(booking.id)', 'count')
      .where('user.id = :userId', { userId })
      .groupBy('umrah.category')
      .getRawMany();

    return {
      totalBookings,
      totalRevenue,
      result
    }
  }
  async findTotalBookings() {
    const totalAmount = await this.carbookingRepository
      .createQueryBuilder('booking')
      .select('SUM(booking.amount)', 'totalAmount')
      .getRawOne();
    const totalBookings = await this.carbookingRepository.count();
    return {
      totalAmount: totalAmount,
      totalBookings: totalBookings
    }
  }
  async getInvoiceSum(vendorId: number, startDate: Date, endDate: Date) {

    return await this.carbookingRepository.sum('amount', {
      createdAt: Between(startDate, endDate),
      carRental: {
        createdBy: {
          id: vendorId
        }
      }
    })
  }

}
