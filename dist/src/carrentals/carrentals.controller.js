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
exports.CarrentalsController = void 0;
const common_1 = require("@nestjs/common");
const carrentals_service_1 = require("./carrentals.service");
const create_carrental_dto_1 = require("./dto/create-carrental.dto");
const update_carrental_dto_1 = require("./dto/update-carrental.dto");
const platform_express_1 = require("@nestjs/platform-express");
const guard_1 = require("../auth/guard");
const currentuser_1 = require("../decorator/currentuser");
const user_service_1 = require("../user/user.service");
const file_upload_service_1 = require("../file-upload/file-upload.service");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../user/entities/user.entity");
const carbookings_service_1 = require("../carbookings/carbookings.service");
let CarrentalsController = class CarrentalsController {
    constructor(carrentalsService, usersService, fileUploadService, carBookingService) {
        this.carrentalsService = carrentalsService;
        this.usersService = usersService;
        this.fileUploadService = fileUploadService;
        this.carBookingService = carBookingService;
    }
    async create(createCarrentalDto, user, files) {
        console.log("i am hit");
        const currentUser = await this.usersService.findOne(user.userId);
        var images = [];
        console.log("iam file ", files);
        if ((files === null || files === void 0 ? void 0 : files.length) > 0) {
            for (const [index, file] of files.entries()) {
                var url;
                url = await this.fileUploadService.uploadToS3(file.buffer, file.originalname);
                images.push(url.Location);
            }
            return this.carrentalsService.create(Object.assign(Object.assign({}, createCarrentalDto), { images: images, createdBy: currentUser }));
        }
        else
            throw new common_1.BadRequestException('Please upload atleast one image');
    }
    findAll(location, status) {
        return this.carrentalsService.findAll(location, status);
    }
    findOne(id) {
        return this.carrentalsService.findOne(+id);
    }
    async update(id, updateHotelDto, files) {
        var images = [];
        if ((files === null || files === void 0 ? void 0 : files.length) > 0) {
            for (const [index, file] of files.entries()) {
                var url;
                url = await this.fileUploadService.uploadToS3(file.buffer, file.originalname);
                images.push(url.Location);
            }
            if (Array.isArray(updateHotelDto.images) && updateHotelDto.images.length > 0) {
                updateHotelDto.images = [...updateHotelDto.images, ...images];
                return this.carrentalsService.update(+id, updateHotelDto);
            }
            else
                return this.carrentalsService.update(+id, Object.assign(Object.assign({}, updateHotelDto), { images: images }));
        }
        else
            return this.carrentalsService.update(+id, updateHotelDto);
    }
    remove(id) {
        return this.carrentalsService.remove(+id);
    }
    async findByVendor(user) {
        return this.carrentalsService.findByVendor(user.userId);
    }
    async getStats(user) {
        const totalCars = await this.carrentalsService.getStats(user.userId);
        const stats = await this.carBookingService.umrahBookingStats(user.userId);
        return { totalCars, stats };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, currentuser_1.currentUser)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carrental_dto_1.CreateCarrentalDto, Object, Array]),
    __metadata("design:returntype", Promise)
], CarrentalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('location')),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CarrentalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarrentalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_carrental_dto_1.UpdateCarrentalDto,
        Array]),
    __metadata("design:returntype", Promise)
], CarrentalsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarrentalsController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Get)('/fleet/vendor'),
    __param(0, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarrentalsController.prototype, "findByVendor", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('/dashboard/stats'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarrentalsController.prototype, "getStats", null);
CarrentalsController = __decorate([
    (0, swagger_1.ApiTags)('CarRentals'),
    (0, common_1.Controller)('carrentals'),
    __metadata("design:paramtypes", [carrentals_service_1.CarrentalsService,
        user_service_1.UserService,
        file_upload_service_1.FileService,
        carbookings_service_1.CarbookingsService])
], CarrentalsController);
exports.CarrentalsController = CarrentalsController;
//# sourceMappingURL=carrentals.controller.js.map