import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../auth/auth.service';
export interface RequestModel extends Request {
    user: any;
}
export declare class AuthMiddleware implements NestMiddleware {
    private readonly authService;
    constructor(authService: AuthService);
    use(req: RequestModel, _: Response, next: NextFunction): Promise<void>;
}
