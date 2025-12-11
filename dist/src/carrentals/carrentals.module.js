"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrentalsModule = void 0;
const common_1 = require("@nestjs/common");
const carrentals_service_1 = require("./carrentals.service");
const carrentals_controller_1 = require("./carrentals.controller");
const typeorm_1 = require("@nestjs/typeorm");
const carrental_entity_1 = require("./entities/carrental.entity");
const user_module_1 = require("../user/user.module");
const file_upload_module_1 = require("../file-upload/file-upload.module");
const carbookings_module_1 = require("../carbookings/carbookings.module");
let CarrentalsModule = class CarrentalsModule {
};
CarrentalsModule = __decorate([
    (0, common_1.Module)({
        controllers: [carrentals_controller_1.CarrentalsController],
        providers: [carrentals_service_1.CarrentalsService],
        imports: [typeorm_1.TypeOrmModule.forFeature([carrental_entity_1.Carrental]), user_module_1.UserModule, file_upload_module_1.FileUploadModule, carbookings_module_1.CarbookingsModule]
    })
], CarrentalsModule);
exports.CarrentalsModule = CarrentalsModule;
//# sourceMappingURL=carrentals.module.js.map