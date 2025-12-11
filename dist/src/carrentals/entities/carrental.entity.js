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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrental = exports.CarStatus = void 0;
const base_entity_1 = require("../../../base.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
var CarStatus;
(function (CarStatus) {
    CarStatus["ACTIVE"] = "active";
    CarStatus["MAINTAINANCE"] = "maintainance";
    CarStatus["RENTED"] = "rented";
})(CarStatus = exports.CarStatus || (exports.CarStatus = {}));
let Carrental = class Carrental extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrental.prototype, "make", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrental.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Carrental.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrental.prototype, "licensePlate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrental.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Carrental.prototype, "seats", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrental.prototype, "mileage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Carrental.prototype, "dailyRate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrental.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        nullable: true,
        array: true,
    }),
    __metadata("design:type", Array)
], Carrental.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrental.prototype, "carStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], Carrental.prototype, "fuelType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Carrental.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        default: user_entity_1.Status.PENDING
    }),
    __metadata("design:type", String)
], Carrental.prototype, "status", void 0);
Carrental = __decorate([
    (0, typeorm_1.Entity)('car-rentals')
], Carrental);
exports.Carrental = Carrental;
//# sourceMappingURL=carrental.entity.js.map