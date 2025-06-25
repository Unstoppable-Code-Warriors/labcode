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
exports.LabcodeController = void 0;
const common_1 = require("@nestjs/common");
const labcode_service_1 = require("./labcode.service");
const swagger_1 = require("@nestjs/swagger");
const generate_labcode_dto_1 = require("./dto/generate-labcode.dto");
let LabcodeController = class LabcodeController {
    labcodeService;
    constructor(labcodeService) {
        this.labcodeService = labcodeService;
    }
    generateBothLabcodes(generateLabcodeDto) {
        const result = this.labcodeService.generateBothLabcodes(generateLabcodeDto.testCode);
        return result;
    }
};
exports.LabcodeController = LabcodeController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Generate both main and secondary labcodes' }),
    (0, swagger_1.ApiBody)({ type: generate_labcode_dto_1.GenerateLabcodeDto }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_labcode_dto_1.GenerateLabcodeDto]),
    __metadata("design:returntype", void 0)
], LabcodeController.prototype, "generateBothLabcodes", null);
exports.LabcodeController = LabcodeController = __decorate([
    (0, common_1.Controller)('labcode'),
    __metadata("design:paramtypes", [labcode_service_1.LabcodeService])
], LabcodeController);
//# sourceMappingURL=labcode.controller.js.map