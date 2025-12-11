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
exports.PropertyController = void 0;
const common_1 = require("@nestjs/common");
const property_service_1 = require("./property.service");
const create_property_dto_1 = require("./dto/create-property.dto");
const update_property_dto_1 = require("./dto/update-property.dto");
const platform_express_1 = require("@nestjs/platform-express");
const guard_1 = require("../auth/guard");
const currentuser_1 = require("../decorator/currentuser");
const file_upload_service_1 = require("../file-upload/file-upload.service");
const swagger_1 = require("@nestjs/swagger");
let PropertyController = class PropertyController {
    constructor(propertyService, fileUploadService) {
        this.propertyService = propertyService;
        this.fileUploadService = fileUploadService;
    }
    async create(createPropertyDto, user, files) {
        var images = [];
        if ((files === null || files === void 0 ? void 0 : files.length) > 0) {
            for (const [index, file] of files.entries()) {
                var url;
                url = await this.fileUploadService.uploadToS3(file.buffer, file.originalname);
                images.push(url.Location);
            }
            return this.propertyService.create(Object.assign(Object.assign({}, createPropertyDto), { user: user.userId, images: images }));
        }
        else
            return this.propertyService.create(Object.assign(Object.assign({}, createPropertyDto), { user: user.userId }));
    }
    findAll(listingType, location) {
        return this.propertyService.findAll(listingType, location);
    }
    findUserBased(user) {
        return this.propertyService.findUserBased(user.userId);
    }
    findOne(id) {
        return this.propertyService.findOne(+id);
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
                return this.propertyService.update(+id, updateHotelDto);
            }
            else
                return this.propertyService.update(+id, Object.assign(Object.assign({}, updateHotelDto), { images: images }));
        }
    }
    remove(id) {
        return this.propertyService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, currentuser_1.currentUser)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_property_dto_1.CreatePropertyDto, Object, Array]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('listingType')),
    __param(1, (0, common_1.Query)('location')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('/user/all'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, currentuser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findUserBased", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_property_dto_1.UpdatePropertyDto, Array]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "remove", null);
PropertyController = __decorate([
    (0, swagger_1.ApiTags)('Property'),
    (0, common_1.Controller)('property'),
    __metadata("design:paramtypes", [property_service_1.PropertyService,
        file_upload_service_1.FileService])
], PropertyController);
exports.PropertyController = PropertyController;
//# sourceMappingURL=property.controller.js.map