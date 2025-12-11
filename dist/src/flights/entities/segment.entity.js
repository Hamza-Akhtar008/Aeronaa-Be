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
exports.FlightSegment = exports.SegmentType = exports.CabinClass = void 0;
const base_entity_1 = require("../../../base.entity");
const typeorm_1 = require("typeorm");
const flight_entity_1 = require("./flight.entity");
var CabinClass;
(function (CabinClass) {
    CabinClass["ECONOMY"] = "economy";
    CabinClass["BUSINESS"] = "business";
    CabinClass["FIRST"] = "first";
})(CabinClass = exports.CabinClass || (exports.CabinClass = {}));
var SegmentType;
(function (SegmentType) {
    SegmentType["OUTBOUND"] = "outbound";
    SegmentType["RETURN"] = "return";
})(SegmentType = exports.SegmentType || (exports.SegmentType = {}));
let FlightSegment = class FlightSegment extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FlightSegment.prototype, "flightNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FlightSegment.prototype, "departureAirport", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FlightSegment.prototype, "arrivalAirport", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FlightSegment.prototype, "departureTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FlightSegment.prototype, "arrivalTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FlightSegment.prototype, "departurelocation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FlightSegment.prototype, "arrivallocation", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], FlightSegment.prototype, "flightDuration", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    __metadata("design:type", Number)
], FlightSegment.prototype, "layoverDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FlightSegment.prototype, "aircraftType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FlightSegment.prototype, "operatingCarrier", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FlightSegment.prototype, "marketingCarrier", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", Boolean)
], FlightSegment.prototype, "baggageRecheckRequired", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: CabinClass,
    }),
    __metadata("design:type", String)
], FlightSegment.prototype, "cabinClass", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: SegmentType,
    }),
    __metadata("design:type", String)
], FlightSegment.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => flight_entity_1.Flight, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", flight_entity_1.Flight)
], FlightSegment.prototype, "flight", void 0);
FlightSegment = __decorate([
    (0, typeorm_1.Entity)('segment')
], FlightSegment);
exports.FlightSegment = FlightSegment;
//# sourceMappingURL=segment.entity.js.map