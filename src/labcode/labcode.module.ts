import { Module } from '@nestjs/common';
import { LabcodeService } from './labcode.service';
import { LabcodeController } from './labcode.controller';

@Module({
  providers: [LabcodeService],
  controllers: [LabcodeController]
})
export class LabcodeModule {}
