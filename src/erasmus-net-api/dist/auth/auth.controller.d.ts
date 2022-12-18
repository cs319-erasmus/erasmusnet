import { AuthService } from './auth.service';
import { Request } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(name: string, password: string, email: string, role: string): Promise<any>;
    authenticate(req: Request): Promise<any>;
}
