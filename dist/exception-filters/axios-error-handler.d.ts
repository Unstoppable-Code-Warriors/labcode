import { Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
export declare function createErrorHandler(logger: Logger, serviceName: string, customMessages?: {
    logPrefix?: string;
    unauthorizedMessage?: string;
    defaultMessage?: string;
}): (error: AxiosError) => Promise<never>;
