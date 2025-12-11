"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarbookingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carbooking_entity_1 = require("./entities/carbooking.entity");
const typeorm_2 = require("typeorm");
let CarbookingsService = class CarbookingsService {
    constructor(carbookingRepository) {
        this.carbookingRepository = carbookingRepository;
    }
    create(createCarbookingDto) {
        return this.carbookingRepository.save(createCarbookingDto);
    }
    async findPastBookings(id) {
        return this.carbookingRepository.find({
            where: {
                user: {
                    id
                },
                pickUpTime: (0, typeorm_2.LessThan)(new Date(Date.now() - 86400000)),
                isActive: true
            }
        });
    }
    async findUpComingBookings(id) {
        return this.carbookingRepository.find({
            where: {
                user: {
                    id
                },
                pickUpTime: (0, typeorm_2.MoreThan)(new Date(Date.now() - 86400000)),
                isActive: true
            }
        });
    }
    async findCancelledBookings(id) {
        return this.carbookingRepository.find({
            where: {
                user: {
                    id
                },
                isActive: false
            }
        });
    }
    findVendorBookings(id) {
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
    findOne(id) {
        return this.carbookingRepository.findOne({
            where: {
                id
            }
        });
    }
    update(id, updateCarbookingDto) {
        return this.carbookingRepository.update(id, updateCarbookingDto);
    }
    findUserBookings(id) {
        return this.carbookingRepository.find({
            where: {
                user: {
                    id
                },
            },
            relations: ['carRental']
        });
    }
    remove(id) {
        return this.carbookingRepository.delete(id);
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
            .addSelect("SUM(booking.amount)", "total")
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
        };
    }
    async umrahBookingStats(userId) {
        const totalBookings = await this.carbookingRepository.count({
            where: {
                carRental: {
                    createdBy: {
                        id: userId
                    }
                }
            }
        });
        const totalRevenue = await this.carbookingRepository.sum('amount', {
            carRental: {
                createdBy: {
                    id: userId
                }
            }
        });
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
        };
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
        };
    }
    async getInvoiceSum(vendorId, startDate, endDate) {
        return await this.carbookingRepository.sum('amount', {
            createdAt: (0, typeorm_2.Between)(startDate, endDate),
            carRental: {
                createdBy: {
                    id: vendorId
                }
            }
        });
    }
};
CarbookingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carbooking_entity_1.Carbooking)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarbookingsService);
exports.CarbookingsService = CarbookingsService;
//# sourceMappingURL=carbookings.service.js.map