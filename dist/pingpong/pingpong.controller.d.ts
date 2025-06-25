import { PingpongService } from './pingpong.service';
export declare class PingpongController {
    private PingpongService;
    constructor(PingpongService: PingpongService);
    pingpong(): string;
}
