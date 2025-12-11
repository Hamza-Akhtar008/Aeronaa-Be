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
exports.CarrentalsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carrental_entity_1 = require("./entities/carrental.entity");
const typeorm_2 = require("typeorm");
let CarrentalsService = class CarrentalsService {
    constructor(carRentalRepository) {
        this.carRentalRepository = carRentalRepository;
    }
    create(createCarrentalDto) {
        return this.carRentalRepository.save(createCarrentalDto);
    }
    findAll(location, status) {
        location = location === null || location === void 0 ? void 0 : location.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return this.carRentalRepository.find({
            where: {
                location,
                status
            }
        });
    }
    findOne(id) {
        return this.carRentalRepository.find({
            where: {
                id
            }
        });
    }
    update(id, updateCarrentalDto) {
        return this.carRentalRepository.update(id, updateCarrentalDto);
    }
    remove(id) {
        return this.carRentalRepository.delete(id);
    }
    findByVendor(id) {
        return this.carRentalRepository.find({
            where: {
                createdBy: {
                    id
                }
            }
        });
    }
    async getStats(id) {
        return this.carRentalRepository.count({
            where: {
                createdBy: {
                    id
                }
            }
        });
    }
};
CarrentalsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carrental_entity_1.Carrental)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarrentalsService);
exports.CarrentalsService = CarrentalsService;
//# sourceMappingURL=carrentals.service.js.map