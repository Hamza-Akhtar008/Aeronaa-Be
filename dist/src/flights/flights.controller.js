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
exports.FlightsController = void 0;
const common_1 = require("@nestjs/common");
const flights_service_1 = require("./flights.service");
const create_flight_dto_1 = require("./dto/create-flight.dto");
const update_flight_dto_1 = require("./dto/update-flight.dto");
const swagger_1 = require("@nestjs/swagger");
const create_segment_dto_1 = require("./dto/create-segment.dto");
const update_segment_dto_1 = require("./dto/update-segment.dto");
let FlightsController = class FlightsController {
    constructor(flightsService) {
        this.flightsService = flightsService;
    }
    create(createFlightDto) {
        return this.flightsService.create(createFlightDto);
    }
    async createSegments(createSegmentDto) {
        return this.flightsService.createSegment(createSegmentDto);
    }
    async updateSegments(createSegmentDto, id) {
        console.log('segment Id', id);
        console.log('the updatedto', createSegmentDto);
        return this.flightsService.updateSegment(+id, createSegmentDto);
    }
    async deleteSegment(id) {
        return this.flightsService.deleteSegment(+id);
    }
    async findFlightSegments(id) {
        return this.flightsService.findFlightSegment(+id);
    }
    findAll(from, to, departureDate, returnDate, flightClass) {
        const parsedDeparture = departureDate ? new Date(departureDate) : undefined;
        const parsedReturn = returnDate ? new Date(returnDate) : undefined;
        return this.flightsService.findAll(from, to, flightClass, parsedDeparture, parsedReturn);
    }
    findOne(id) {
        return this.flightsService.findOne(+id);
    }
    update(id, updateFlightDto) {
        return this.flightsService.update(+id, updateFlightDto);
    }
    remove(id) {
        return this.flightsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flight_dto_1.CreateFlightDto]),
    __metadata("design:returntype", void 0)
], FlightsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/create/segments'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_segment_dto_1.CreateSegmentDto]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "createSegments", null);
__decorate([
    (0, common_1.Patch)('/create/segments/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_segment_dto_1.UpdateSegmentDto, String]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "updateSegments", null);
__decorate([
    (0, common_1.Delete)('/create/segments/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "deleteSegment", null);
__decorate([
    (0, common_1.Get)('/find/segments/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "findFlightSegments", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('from')),
    __param(1, (0, common_1.Query)('to')),
    __param(2, (0, common_1.Query)('departureDate')),
    __param(3, (0, common_1.Query)('returnDate')),
    __param(4, (0, common_1.Query)('flightClass')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], FlightsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flight_dto_1.UpdateFlightDto]),
    __metadata("design:returntype", void 0)
], FlightsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightsController.prototype, "remove", null);
FlightsController = __decorate([
    (0, swagger_1.ApiTags)('flights'),
    (0, common_1.Controller)('flights'),
    __metadata("design:paramtypes", [flights_service_1.FlightsService])
], FlightsController);
exports.FlightsController = FlightsController;
//# sourceMappingURL=flights.controller.js.map