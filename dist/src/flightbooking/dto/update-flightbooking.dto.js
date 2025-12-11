"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlightbookingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_flightbooking_dto_1 = require("./create-flightbooking.dto");
class UpdateFlightbookingDto extends (0, mapped_types_1.PartialType)(create_flightbooking_dto_1.CreateFlightbookingDto) {
}
exports.UpdateFlightbookingDto = UpdateFlightbookingDto;
//# sourceMappingURL=update-flightbooking.dto.js.map