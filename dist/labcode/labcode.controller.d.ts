import { LabcodeService } from './labcode.service';
import { GenerateLabcodeDto } from './dto/generate-labcode.dto';
export declare class LabcodeController {
    private readonly labcodeService;
    constructor(labcodeService: LabcodeService);
    generateBothLabcodes(generateLabcodeDto: GenerateLabcodeDto): {
        mainLabcode: string;
        secondaryLabcode: string;
        labcode: string;
    };
}
