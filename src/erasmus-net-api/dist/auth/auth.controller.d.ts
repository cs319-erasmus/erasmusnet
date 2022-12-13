import { AuthService } from "./auth.service";
import { MockUser } from "src/models/mockUser.model";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: Pick<MockUser, 'email' | 'password'>): Promise<Omit<MockUser, "password">>;
    signup(body: Omit<MockUser, 'id'>): Promise<void>;
}
