"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabcodeService = void 0;
const common_1 = require("@nestjs/common");
let LabcodeService = class LabcodeService {
    generateLabcode(testCode, type = 'none') {
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        const randomNumber = Math.floor(Math.random() * 999) + 1;
        const paddedNumber = randomNumber.toString().padStart(3, '0');
        const suffix = type === 'main' ? 'A' : type === 'secondary' ? 'B' : '';
        const labcode = `${testCode.trim()}${randomLetter}${paddedNumber}${suffix}`;
        return labcode;
    }
    generateBothLabcodes(testCode) {
        const labcode = this.generateLabcode(testCode, 'none');
        const mainLabcode = this.generateLabcode(testCode, 'main');
        const secondaryLabcode = this.generateLabcode(testCode, 'secondary');
        return {
            labcode,
            mainLabcode,
            secondaryLabcode,
        };
    }
};
exports.LabcodeService = LabcodeService;
exports.LabcodeService = LabcodeService = __decorate([
    (0, common_1.Injectable)()
], LabcodeService);
//# sourceMappingURL=labcode.service.js.map