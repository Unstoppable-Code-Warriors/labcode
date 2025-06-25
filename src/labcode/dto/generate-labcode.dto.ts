import { IsString, IsNotEmpty, Length, IsIn } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { LABCODE_TEST_CODES } from '../../constants/labcode';

export class GenerateLabcodeDto {
  @ApiProperty({
    description: 'Test code for generating labcode',
    enum: LABCODE_TEST_CODES,
    example: 'L8'
  })
  @IsString()
  @IsNotEmpty({ message: 'Test code cannot be empty' })
  @Transform(({ value }) => value?.trim())
  @Length(1, 10, { message: 'Test code must be between 1 and 10 characters' })
  @IsIn(LABCODE_TEST_CODES, { 
    message: `Test code must be one of: ${LABCODE_TEST_CODES.join(', ')}` 
  })
  testCode: string;
} 