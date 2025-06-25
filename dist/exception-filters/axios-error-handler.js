"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorHandler = createErrorHandler;
const common_1 = require("@nestjs/common");
function createErrorHandler(logger, serviceName, customMessages = {}) {
    return async (error) => {
        const errorData = error.response?.data;
        const errorParse = typeof errorData === 'object' ? JSON.stringify(errorData) : errorData;
        const logPrefix = customMessages.logPrefix || `Error in ${serviceName}`;
        logger.error(`${logPrefix}: ${errorParse}`);
        if (error.response?.status === 401) {
            const res = {
                status: 401,
                message: customMessages.unauthorizedMessage ||
                    `Error in ${serviceName}: Invalid token`,
                error: 'Unauthorized',
            };
            throw new common_1.HttpException(`${res.message}`, res.status, {
                cause: new Error(),
                description: 'Unauthorized',
            });
        }
        throw new common_1.HttpException({
            statusCode: error.response?.status || 500,
            message: customMessages.defaultMessage || `Error in ${serviceName}`,
        }, error.response?.status || 500, {
            cause: new Error(),
            description: customMessages.defaultMessage || `Error in ${serviceName}`,
        });
    };
}
//# sourceMappingURL=axios-error-handler.js.map