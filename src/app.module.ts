import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LabcodeModule } from './labcode/labcode.module';
import { CacheModule } from '@nestjs/cache-manager';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 86400,
    }),
    LabcodeModule,
  ],
})
export class AppModule {}
