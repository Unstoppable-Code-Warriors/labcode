"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const pingpong_module_1 = require("./pingpong/pingpong.module");
const config_1 = require("@nestjs/config");
const labcode_module_1 = require("./labcode/labcode.module");
const Joi = require("joi");
const cache_manager_1 = require("@nestjs/cache-manager");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: Joi.object({
                    PONG: Joi.string().required(),
                    PORT: Joi.number().required(),
                }),
            }),
            cache_manager_1.CacheModule.register({
                isGlobal: true,
                ttl: 86400,
            }),
            pingpong_module_1.PingpongModule,
            labcode_module_1.LabcodeModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map