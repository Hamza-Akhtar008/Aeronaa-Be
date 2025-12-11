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
exports.FlightsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const flight_entity_1 = require("./entities/flight.entity");
const typeorm_2 = require("typeorm");
const segment_entity_1 = require("./entities/segment.entity");
let FlightsService = class FlightsService {
    constructor(flightRepository, segmentRepository) {
        this.flightRepository = flightRepository;
        this.segmentRepository = segmentRepository;
    }
    create(createFlightDto) {
        return this.flightRepository.save(createFlightDto);
    }
    createSegment(createSegmentDto) {
        return this.segmentRepository.save(createSegmentDto);
    }
    updateSegment(id, updateSegmentDto) {
        return this.segmentRepository.update(id, updateSegmentDto);
    }
    deleteSegment(id) {
        return this.segmentRepository.delete(id);
    }
    findFlightSegment(flightId) {
        return this.segmentRepository.find({
            where: { flight: {
                    id: flightId
                }
            },
            relations: { flight: true }
        });
    }
    findAll(from, to, flightClass, departureDate, returnDate) {
        return this.flightRepository.find({
            where: {
                from,
                to,
                departureDate,
                returnDate,
                flightClass,
            },
            relations: { segments: true }
        });
    }
    findOne(id) {
        return this.flightRepository.findOne({
            where: {
                id,
            },
            relations: { segments: true }
        });
    }
    update(id, updateFlightDto) {
        return this.flightRepository.update(id, updateFlightDto);
    }
    remove(id) {
        return this.flightRepository.delete(id);
    }
};
FlightsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flight_entity_1.Flight)),
    __param(1, (0, typeorm_1.InjectRepository)(segment_entity_1.FlightSegment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FlightsService);
exports.FlightsService = FlightsService;
//# sourceMappingURL=flights.service.js.map