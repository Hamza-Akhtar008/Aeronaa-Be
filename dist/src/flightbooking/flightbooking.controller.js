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
exports.FlightbookingController = void 0;
const common_1 = require("@nestjs/common");
const flightbooking_service_1 = require("./flightbooking.service");
const create_flightbooking_dto_1 = require("./dto/create-flightbooking.dto");
const update_flightbooking_dto_1 = require("./dto/update-flightbooking.dto");
const swagger_1 = require("@nestjs/swagger");
const guard_1 = require("../auth/guard");
const currentuser_1 = require("../decorator/currentuser");
const flightbooking_entity_1 = require("./entities/flightbooking.entity");
const platform_express_1 = require("@nestjs/platform-express");
const file_upload_service_1 = require("../file-upload/file-upload.service");
const email_service_1 = require("../email/email.service");
let FlightbookingController = class FlightbookingController {
    constructor(flightbookingService, fileUploadService, emailService) {
        this.flightbookingService = flightbookingService;
        this.fileUploadService = fileUploadService;
        this.emailService = emailService;
    }
    async create(createFlightbookingDto, user) {
        const booking = await this.flightbookingService.create(Object.assign(Object.assign({}, createFlightbookingDto), { bookingFor: user.userId }));
        return booking;
    }
    async updateTicket(id, file) {
        if (file) {
            const url = await this.fileUploadService.uploadToS3(file.buffer, file.originalname);
            const update = await this.flightbookingService.updateTicket(+id, url.Location);
            const flightBooking = await this.flightbookingService.findOne(+id);
            const email = await this.emailService.flightConfirmationMail({
                to: flightBooking.bookingFor.email,
                subject: 'Flight Booking Confirmation',
                text: 'Your flight booking is confirmed',
            }, flightBooking.ticket);
            return update;
        }
    }
    getUserFlighBookings(user) {
        return this.flightbookingService.getUserFlightBookings(user.userId);
    }
    getUserPastBookings(user) {
        return this.flightbookingService.getUserPastBookings(user.userId);
    }
    getUserUpComingBookings(user) {
        return this.flightbookingService.getUserUpcomingBookings(user.userId);
    }
    async getAdminStats() {
        return this.flightbookingService.getAdminStats();
    }
    findAll(status) {
        return this.flightbookingService.findAll(status);
    }
    findOne(id) {
        return this.flightbookingService.findOne(+id);
    }
    update(id, updateFlightbookingDto) {
        return this.flightbookingService.update(+id, updateFlightbookingDto);
    }
    remove(id) {
        return this.flightbookingService.remove(+id);
    }
    getAgentBookings(id) {
        return this.flightbookingService.getUserFlightBookings(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flightbooking_dto_1.CreateFlightbookingDto, Object]),
    __metadata("design:returntype", Promise)
], FlightbookingController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('ticket/file/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('ticket')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FlightbookingController.prototype, "updateTicket", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Get)('/user/based/'),
    __param(0, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FlightbookingController.prototype, "getUserFlighBookings", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Get)('/user/past/'),
    __param(0, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FlightbookingController.prototype, "getUserPastBookings", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Get)('/user/upcoming/'),
    __param(0, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FlightbookingController.prototype, "getUserUpComingBookings", null);
__decorate([
    (0, common_1.Get)('admin/stats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightbookingController.prototype, "getAdminStats", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightbookingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightbookingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flightbooking_dto_1.UpdateFlightbookingDto]),
    __metadata("design:returntype", void 0)
], FlightbookingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightbookingController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/agent/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightbookingController.prototype, "getAgentBookings", null);
FlightbookingController = __decorate([
    (0, swagger_1.ApiTags)('flight-bookings'),
    (0, common_1.Controller)('flightbooking'),
    __metadata("design:paramtypes", [flightbooking_service_1.FlightbookingService,
        file_upload_service_1.FileService,
        email_service_1.EmailService])
], FlightbookingController);
exports.FlightbookingController = FlightbookingController;
//# sourceMappingURL=flightbooking.controller.js.map