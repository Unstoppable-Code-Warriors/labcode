import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class GenerateLabcodeMappingDto {
  @ApiProperty({
    description: 'Test type (Mã ung thư - K Đích, Mã ung thư di truyền, HRD, hoặc các mã khác)',
    example: 'Mã ung thư - K Đích'
  })
  @IsString()
  @Transform(({ value }) => value?.trim())
  testType: string;

  @ApiProperty({
    description: 'Test package (e.g., Onco81, Onco500, BCARE, etc.)',
    example: 'Onco81',
    required: false
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  testPackage?: string;

  @ApiProperty({
    description: 'Sample type (e.g., STL, Mô/Dịch màng phổi)',
    example: 'STL',
    required: false
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  sampleType?: string;
} 