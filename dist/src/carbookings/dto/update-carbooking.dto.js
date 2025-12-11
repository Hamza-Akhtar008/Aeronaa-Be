"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarbookingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_carbooking_dto_1 = require("./create-carbooking.dto");
class UpdateCarbookingDto extends (0, mapped_types_1.PartialType)(create_carbooking_dto_1.CreateCarbookingDto) {
}
exports.UpdateCarbookingDto = UpdateCarbookingDto;
//# sourceMappingURL=update-carbooking.dto.js.map