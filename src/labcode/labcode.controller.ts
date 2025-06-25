import { Controller, Post, Body } from '@nestjs/common';
import { LabcodeService } from './labcode.service';
import { ApiOperation, ApiBody } from '@nestjs/swagger';
import { GenerateLabcodeDto } from './dto/generate-labcode.dto';

@Controller('labcode')
export class LabcodeController {
  constructor(private readonly labcodeService: LabcodeService) {}

  @ApiOperation({ summary: 'Generate both main and secondary labcodes' })
  @ApiBody({ type: GenerateLabcodeDto })
  @Post()
  generateBothLabcodes(@Body() generateLabcodeDto: GenerateLabcodeDto) {
    const result = this.labcodeService.generateBothLabcodes(generateLabcodeDto.testCode);
    return result;
  }
}
