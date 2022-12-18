import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export interface RequestModel extends Request {
    user: any;
}
export declare class AuthMiddleware implements NestMiddleware {
    private getToken;
    authenticate(authToken: string): Promise<any>;
    use(req: RequestModel, _: Response, next: NextFunction): Promise<void>;
}
