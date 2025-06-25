"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabcodeModule = void 0;
const common_1 = require("@nestjs/common");
const labcode_service_1 = require("./labcode.service");
const labcode_controller_1 = require("./labcode.controller");
let LabcodeModule = class LabcodeModule {
};
exports.LabcodeModule = LabcodeModule;
exports.LabcodeModule = LabcodeModule = __decorate([
    (0, common_1.Module)({
        providers: [labcode_service_1.LabcodeService],
        controllers: [labcode_controller_1.LabcodeController]
    })
], LabcodeModule);
//# sourceMappingURL=labcode.module.js.map