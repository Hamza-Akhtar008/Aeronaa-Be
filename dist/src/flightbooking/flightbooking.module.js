"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightbookingModule = void 0;
const common_1 = require("@nestjs/common");
const flightbooking_service_1 = require("./flightbooking.service");
const flightbooking_controller_1 = require("./flightbooking.controller");
const typeorm_1 = require("@nestjs/typeorm");
const flightbooking_entity_1 = require("./entities/flightbooking.entity");
const file_upload_module_1 = require("../file-upload/file-upload.module");
const email_module_1 = require("../email/email.module");
let FlightbookingModule = class FlightbookingModule {
};
FlightbookingModule = __decorate([
    (0, common_1.Module)({
        controllers: [flightbooking_controller_1.FlightbookingController],
        providers: [flightbooking_service_1.FlightbookingService],
        imports: [typeorm_1.TypeOrmModule.forFeature([flightbooking_entity_1.Flightbooking]), file_upload_module_1.FileUploadModule, email_module_1.EmailModule],
        exports: [flightbooking_service_1.FlightbookingService]
    })
], FlightbookingModule);
exports.FlightbookingModule = FlightbookingModule;
//# sourceMappingURL=flightbooking.module.js.map