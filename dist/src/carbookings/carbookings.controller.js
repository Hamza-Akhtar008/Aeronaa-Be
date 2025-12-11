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
exports.CarbookingsController = void 0;
const common_1 = require("@nestjs/common");
const carbookings_service_1 = require("./carbookings.service");
const create_carbooking_dto_1 = require("./dto/create-carbooking.dto");
const update_carbooking_dto_1 = require("./dto/update-carbooking.dto");
const swagger_1 = require("@nestjs/swagger");
const guard_1 = require("../auth/guard");
const currentuser_1 = require("../decorator/currentuser");
let CarbookingsController = class CarbookingsController {
    constructor(carbookingsService) {
        this.carbookingsService = carbookingsService;
    }
    create(createCarbookingDto, user) {
        return this.carbookingsService.create(Object.assign(Object.assign({}, createCarbookingDto), { user: user.userId }));
    }
    findVendorAll(user) {
        return this.carbookingsService.findVendorBookings(user.userId);
    }
    findPastBookings(user) {
        return this.carbookingsService.findPastBookings(user.userId);
    }
    findCancelledBookings(user) {
        return this.carbookingsService.findCancelledBookings(user.userId);
    }
    findUpComingBookings(user) {
        return this.carbookingsService.findUpComingBookings(user.userId);
    }
    findAll() {
        return this.carbookingsService.findAll();
    }
    findOne(id) {
        return this.carbookingsService.findOne(+id);
    }
    update(id, updateCarbookingDto) {
        return this.carbookingsService.update(+id, updateCarbookingDto);
    }
    remove(id) {
        return this.carbookingsService.remove(+id);
    }
    findByAgent(id) {
        return this.carbookingsService.findUserBookings(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carbooking_dto_1.CreateCarbookingDto, Object]),
    __metadata("design:returntype", void 0)
], CarbookingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/vendor/all'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarbookingsController.prototype, "findVendorAll", null);
__decorate([
    (0, common_1.Get)('/past'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarbookingsController.prototype, "findPastBookings", null);
__decorate([
    (0, common_1.Get)('/cancelled'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarbookingsController.prototype, "findCancelledBookings", null);
__decorate([
    (0, common_1.Get)('/upcoming'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarbookingsController.prototype, "findUpComingBookings", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarbookingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarbookingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_carbooking_dto_1.UpdateCarbookingDto]),
    __metadata("design:returntype", void 0)
], CarbookingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarbookingsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/agent/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarbookingsController.prototype, "findByAgent", null);
CarbookingsController = __decorate([
    (0, swagger_1.ApiTags)('carbookings'),
    (0, common_1.Controller)('carbookings'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [carbookings_service_1.CarbookingsService])
], CarbookingsController);
exports.CarbookingsController = CarbookingsController;
//# sourceMappingURL=carbookings.controller.js.map