"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarbookingsModule = void 0;
const common_1 = require("@nestjs/common");
const carbookings_service_1 = require("./carbookings.service");
const carbookings_controller_1 = require("./carbookings.controller");
const typeorm_1 = require("@nestjs/typeorm");
const carbooking_entity_1 = require("./entities/carbooking.entity");
let CarbookingsModule = class CarbookingsModule {
};
CarbookingsModule = __decorate([
    (0, common_1.Module)({
        controllers: [carbookings_controller_1.CarbookingsController],
        providers: [carbookings_service_1.CarbookingsService],
        imports: [typeorm_1.TypeOrmModule.forFeature([carbooking_entity_1.Carbooking])],
        exports: [carbookings_service_1.CarbookingsService]
    })
], CarbookingsModule);
exports.CarbookingsModule = CarbookingsModule;
//# sourceMappingURL=carbookings.module.js.map