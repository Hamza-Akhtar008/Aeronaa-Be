"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarrentalDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_carrental_dto_1 = require("./create-carrental.dto");
class UpdateCarrentalDto extends (0, mapped_types_1.PartialType)(create_carrental_dto_1.CreateCarrentalDto) {
}
exports.UpdateCarrentalDto = UpdateCarrentalDto;
//# sourceMappingURL=update-carrental.dto.js.map