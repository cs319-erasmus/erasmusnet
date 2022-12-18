export declare class AuthService {
    signup(displayName: string, password: string, email: string, role: string): Promise<any>;
    private getToken;
    authenticate(authToken: string): Promise<any>;
}
