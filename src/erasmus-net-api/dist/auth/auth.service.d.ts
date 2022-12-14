export declare class AuthService {
    constructor();
    login(email: string, password: string): Promise<void>;
    signup(displayName: string, password: string, email: string, role: string): Promise<any>;
}
