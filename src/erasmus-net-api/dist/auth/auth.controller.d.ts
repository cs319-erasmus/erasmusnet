import { AuthService } from "./auth.service";
import { User } from "src/models/user.model";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: Pick<User, 'email' | 'password'>): Promise<void>;
    signup(name: string, password: string, email: string, role: string): Promise<any>;
}
