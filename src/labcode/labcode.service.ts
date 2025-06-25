import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { GenerateLabcodeMappingDto } from './dto/gene-labcode.dto';
import { normalizeString } from 'src/utils';

@Injectable()
export class LabcodeService {
  private readonly logger = new Logger(LabcodeService.name);


  /**
   * Generates test code based on test type, test package, and sample type
   * @param dto - The gene labcode DTO
   * @returns The determined test code
   */
  generateGeneTestCode(dto: GenerateLabcodeMappingDto): { testCode: string; message: string } {
    const normalizedTestType = normalizeString(dto.testType);
    const normalizedTestPackage = normalizeString(dto.testPackage || '');
    const normalizedSampleType = normalizeString(dto.sampleType || '');

    this.logger.log(`Normalized test type: ${normalizedTestType}`);
    this.logger.log(`Normalized test package: ${normalizedTestPackage}`);
    this.logger.log(`Normalized sample type: ${normalizedSampleType}`);

    switch (normalizedTestType) {
      case 'ma_ung_thu_-_k_dich':
        return this.handleCancerCodeKTarget(normalizedTestPackage, normalizedSampleType);
      
      case 'ma_ung_thu_di_truyen':
        return this.handleHereditaryCancerCode(normalizedTestPackage);
      
      case 'hrd':
        return this.handleHRD(normalizedSampleType);
      
      default:
        return this.handleDefaultCodes(normalizedTestPackage);
    }
  }

  generateLabCodeCodeMapping(dto: GenerateLabcodeMappingDto){
    const testCode = this.generateGeneTestCode(dto);
    return this.generateLabcode(testCode.testCode);
  }

  /**
   * Handles Cancer Code - K Target test type
   */
  private handleCancerCodeKTarget(testPackage: string, sampleType: string): { testCode: string; message: string } {

    if(testPackage === '' || sampleType === ''){
      throw new BadRequestException('With Cancer Code - K Target test type, test package and sample type cannot be empty');
    }

    const packageSampleKey = `${testPackage}_${sampleType}`;
    
    const mappings: { [key: string]: string } = {
      'onco81_stl': 'L8',
      'onco81_mo/dich_mang_phoi': 'F8',
      'onco500_stl': 'O5',
      'onco500_mo/dich_mang_phoi': 'O5'
    };

    // Check specific mappings first
    if (mappings[packageSampleKey]) {
      return { testCode: mappings[packageSampleKey], message: 'Test code generated successfully' };
    }

    // Handle regular packages
    if (sampleType === 'stl') {
      return { testCode: 'LA', message: 'Regular package with STL sample type' };
    }
    if (sampleType === 'mo/dich_mang_phoi') {
      return { testCode: 'FA', message: 'Regular package with Mô/Dịch màng phổi sample type' };
    }

    throw new BadRequestException('Invalid combination for Cancer Code - K Target (Onco81, Onco500)');
  }

  /**
   * Handles Hereditary Cancer Code test type
   */
  private handleHereditaryCancerCode(testPackage: string): { testCode: string; message: string } {
    if(testPackage === ''){
      throw new BadRequestException('With Hereditary Cancer Code test type, test package cannot be empty');
    }

    const mappings: { [key: string]: string } = {
      'bcare': 'G2',
      '15_types_of_utdt': 'G15',
      '20_types_of_utdt': 'G20'
    };

    if (mappings[testPackage]) {
      return { testCode: mappings[testPackage], message: 'Test code generated successfully' };
    }

    throw new BadRequestException('Invalid test package for Hereditary Cancer Code (G2, G15, G20)');
  }

  /**
   * Handles HRD test type
   */
  private handleHRD(sampleType: string): { testCode: string; message: string } {
    if(sampleType === ''){
      throw new BadRequestException('With HRD test type, sample type cannot be empty');
    }

    const mappings: { [key: string]: string } = {
      'stl': 'LH',
      'mo/dich_mang_phoi': 'FH'
    };

    if (mappings[sampleType]) {
      return { testCode: mappings[sampleType], message: 'Test code generated successfully' };
    }

    throw new BadRequestException('Invalid sample type for HRD (STL, Mô/Dịch màng phổi)');
  }

  /**
   * Handles default test codes
   */
  private handleDefaultCodes(testPackage: string): { testCode: string; message: string } {
    if(testPackage === ''){
      throw new BadRequestException('With default test codes, test package cannot be empty');
    }

    const mappings: { [key: string]: string } = {
      'miniwes': 'WE',
      'carrier': 'CA',
      'fish': 'FI',
      'cnv': 'CNV',
      'digital_pcr': 'DG',
      'sanger': 'S',
      'hpv': 'HPV'
    };

    if (mappings[testPackage]) {
      return { testCode: mappings[testPackage], message: 'Test code generated successfully' };
    }

    throw new BadRequestException('Invalid test package for default codes (Miniwes, Carrier, Fish, CNV, Digital PCR, Sanger, HPV)');
  }

  /**
   * Generates a labcode with the format: {testCode}{randomLetter}{randomNumber}{type}
   * @param testCode - The input test code string
   * @returns A string containing the generated labcode
   */
  generateLabcode(testCode: string): {labcode: string, mainLabcode: string, secondaryLabcode: string} {
    // Generate random letter from A-Z (only once)
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    
    // Generate random number from 001-999 (zero-padded to 3 digits, only once)
    const randomNumber = Math.floor(Math.random() * 999) + 1;
    const paddedNumber = randomNumber.toString().padStart(3, '0');
    
    // Use the same random letter and number for all variants
    const labcode = `${testCode.trim()}${randomLetter}${paddedNumber}`;
    const mainLabcode = `${testCode.trim()}${randomLetter}${paddedNumber}A`;
    const secondaryLabcode = `${testCode.trim()}${randomLetter}${paddedNumber}B`;
    return {labcode, mainLabcode, secondaryLabcode};
  }

}
