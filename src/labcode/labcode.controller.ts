import { Controller, Post, Body } from '@nestjs/common';
import { LabcodeService } from './labcode.service';
import { ApiOperation, ApiBody } from '@nestjs/swagger';
import { GenerateLabcodeDto } from './dto/generate-labcode.dto';
import { GenerateLabcodeMappingDto } from './dto/gene-labcode.dto';


@Controller('labcode')
export class LabcodeController {
  constructor(private readonly labcodeService: LabcodeService) {}

  @ApiOperation({ summary: 'Generate both main and secondary labcodes' })
  @ApiBody({ type: GenerateLabcodeDto })
  @Post()
  generateBothLabcodes(@Body() generateLabcodeDto: GenerateLabcodeDto) {
    const result = this.labcodeService.generateLabcode(generateLabcodeDto.testCode);
    return {data:result, message: 'Labcode generated successfully'};
  }

  @ApiOperation({ summary: 'Generate test code for gene testing based on test type, package, and sample type' })
  @ApiBody({ type: GenerateLabcodeMappingDto })
  @Post('mapping')
  generateGeneTestCode(@Body() geneLabcodeDto: GenerateLabcodeMappingDto) {
    const result = this.labcodeService.generateLabCodeCodeMapping(geneLabcodeDto);
    return {data:result, message: 'Labcode generated successfully'};
  }
}
