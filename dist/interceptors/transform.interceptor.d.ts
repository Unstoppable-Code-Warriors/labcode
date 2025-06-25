import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface IResponse<T> {
    statusCode: number;
    message: string;
    data: T;
}
export declare class TransformInterceptor<T> implements NestInterceptor<T, IResponse<T>> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<IResponse<T>>;
}
