import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(name: string, password: string, email: string, role: string): Promise<any>;
}
