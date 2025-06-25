import { Module } from '@nestjs/common';
import { PingpongModule } from './pingpong/pingpong.module';
import { ConfigModule } from '@nestjs/config';
import { LabcodeModule } from './labcode/labcode.module';
import * as Joi from 'joi';
import { CacheModule } from '@nestjs/cache-manager';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PONG: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 86400,
    }),
    PingpongModule,
    LabcodeModule,
  ],
})
export class AppModule {}
