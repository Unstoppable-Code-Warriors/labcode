export declare class LabcodeService {
    generateLabcode(testCode: string, type?: 'main' | 'secondary' | 'none'): string;
    generateBothLabcodes(testCode: string): {
        mainLabcode: string;
        secondaryLabcode: string;
        labcode: string;
    };
}
