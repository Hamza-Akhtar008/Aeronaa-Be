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
exports.Flightbooking = exports.Status = void 0;
const base_entity_1 = require("../../../base.entity");
const flight_entity_1 = require("../../flights/entities/flight.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
var Status;
(function (Status) {
    Status["CONFIRMED"] = "confirmed";
    Status["RESERVED"] = "RESERVED";
})(Status = exports.Status || (exports.Status = {}));
let Flightbooking = class Flightbooking extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], Flightbooking.prototype, "traveller", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flightbooking.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], Flightbooking.prototype, "middleName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flightbooking.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Flightbooking.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flightbooking.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flightbooking.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flightbooking.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flightbooking.prototype, "passportNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Flightbooking.prototype, "passportExpirationDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flightbooking.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flightbooking.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: null
    }),
    __metadata("design:type", String)
], Flightbooking.prototype, "pnrNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: Status.RESERVED
    }),
    __metadata("design:type", String)
], Flightbooking.prototype, "bookingStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], Flightbooking.prototype, "ticket", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => (flight_entity_1.Flight), { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", flight_entity_1.Flight)
], Flightbooking.prototype, "flight", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => (user_entity_1.User), { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Flightbooking.prototype, "bookingFor", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", Number)
], Flightbooking.prototype, "amount", void 0);
Flightbooking = __decorate([
    (0, typeorm_1.Entity)('flight-booking')
], Flightbooking);
exports.Flightbooking = Flightbooking;
//# sourceMappingURL=flightbooking.entity.js.map