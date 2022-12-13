import { FirebaseService } from "src/firebase/firebase.service";
import { MockUser } from "src/models/mockUser.model";
export declare class AuthService {
    private fireBaseService;
    constructor(fireBaseService: FirebaseService);
    login(email: string, password: string): Promise<Omit<MockUser, 'password'>>;
    signup(body: Omit<MockUser, 'id'>): Promise<void>;
}
