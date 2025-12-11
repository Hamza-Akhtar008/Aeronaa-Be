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
exports.PropertyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const property_entity_1 = require("./entities/property.entity");
const typeorm_2 = require("typeorm");
let PropertyService = class PropertyService {
    constructor(propertyRepository) {
        this.propertyRepository = propertyRepository;
    }
    create(createPropertyDto) {
        return this.propertyRepository.save(createPropertyDto);
    }
    findAll(listingType, location) {
        return this.propertyRepository.find({
            where: {
                listingType,
                city: location
            },
            relations: ['user']
        });
    }
    findOne(id) {
        return this.propertyRepository.findOne({
            where: {
                id
            }
        });
    }
    findUserBased(id) {
        return this.propertyRepository.find({
            where: {
                user: {
                    id
                }
            }
        });
    }
    update(id, updatePropertyDto) {
        return this.propertyRepository.update(id, updatePropertyDto);
    }
    remove(id) {
        return this.propertyRepository.delete(id);
    }
};
PropertyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(property_entity_1.Property)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PropertyService);
exports.PropertyService = PropertyService;
//# sourceMappingURL=property.service.js.map