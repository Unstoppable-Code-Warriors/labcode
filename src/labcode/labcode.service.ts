import { Injectable } from '@nestjs/common';

@Injectable()
export class LabcodeService {
  /**
   * Generates a labcode with the format: {testCode}{randomLetter}{randomNumber}{type}
   * @param testCode - The input test code string
   * @param type - The type of labcode ('main' for A suffix, 'secondary' for B suffix)
   * @returns A string containing the generated labcode
   */
  generateLabcode(testCode: string, type: 'main' | 'secondary' | 'none' = 'none'): string {
    // Generate random letter from A-Z
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    
    // Generate random number from 001-999 (zero-padded to 3 digits)
    const randomNumber = Math.floor(Math.random() * 999) + 1;
    const paddedNumber = randomNumber.toString().padStart(3, '0');
    
    // Determine suffix based on type
    const suffix = type === 'main' ? 'A' : type === 'secondary' ? 'B' : '';
    
    const labcode = `${testCode.trim()}${randomLetter}${paddedNumber}${suffix}`;
    return labcode;
  }

  /**
   * Generates both main and secondary labcodes
   * @param testCode - The input test code string
   * @returns An object containing both main and secondary labcodes
   */
  generateBothLabcodes(testCode: string): { mainLabcode: string; secondaryLabcode: string; labcode: string } {
    const labcode = this.generateLabcode(testCode, 'none');
    const mainLabcode = this.generateLabcode(testCode, 'main');
    const secondaryLabcode = this.generateLabcode(testCode, 'secondary');
    
    return {
      labcode,
      mainLabcode,
      secondaryLabcode,
    };
  }
}
