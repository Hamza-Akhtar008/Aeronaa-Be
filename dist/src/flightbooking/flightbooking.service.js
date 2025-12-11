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
exports.FlightbookingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const flightbooking_entity_1 = require("./entities/flightbooking.entity");
const typeorm_2 = require("typeorm");
let FlightbookingService = class FlightbookingService {
    constructor(flightBookingRepository) {
        this.flightBookingRepository = flightBookingRepository;
    }
    create(createFlightbookingDto) {
        return this.flightBookingRepository.save(createFlightbookingDto);
    }
    getUserFlightBookings(id) {
        return this.flightBookingRepository.findOne({
            where: {
                bookingFor: {
                    id
                }
            },
            relations: ['bookingFor', 'flight']
        });
    }
    async updateTicket(id, ticket) {
        const bookingTicket = await this.findOne(id);
        bookingTicket.ticket = ticket;
        return this.flightBookingRepository.save(bookingTicket);
    }
    getUserUpcomingBookings(id) {
        return this.flightBookingRepository.find({
            where: {
                bookingFor: { id },
                flight: {
                    arrivalDate: (0, typeorm_2.MoreThan)(new Date(Date.now() - 86400000)),
                }
            },
            relations: ['bookingFor', 'flight'],
            order: {
                flight: {
                    arrivalDate: 'ASC'
                }
            }
        });
    }
    async getAdminStats() {
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
        };
    }
    getUserPastBookings(id) {
        return this.flightBookingRepository.find({
            where: {
                bookingFor: { id },
                flight: {
                    arrivalDate: (0, typeorm_2.LessThan)(new Date(Date.now() - 86400000)),
                }
            },
            relations: ['bookingFor', 'flight'],
            order: {
                flight: {
                    arrivalDate: 'DESC'
                }
            }
        });
    }
    findAll(status) {
        return this.flightBookingRepository.find({
            order: {
                createdAt: 'DESC'
            },
            relations: { flight: true }
        });
    }
    findOne(id) {
        return this.flightBookingRepository.findOne({
            where: {
                id
            },
            relations: ['bookingFor', 'flight']
        });
    }
    update(id, updateFlightbookingDto) {
        return this.flightBookingRepository.update(id, updateFlightbookingDto);
    }
    remove(id) {
        return this.flightBookingRepository.delete(id);
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
        };
    }
    async getInvoiceSum(startDate, endDate) {
        return await this.flightBookingRepository.sum('amount', {
            createdAt: (0, typeorm_2.Between)(startDate, endDate),
        });
    }
};
FlightbookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flightbooking_entity_1.Flightbooking)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FlightbookingService);
exports.FlightbookingService = FlightbookingService;
//# sourceMappingURL=flightbooking.service.js.map