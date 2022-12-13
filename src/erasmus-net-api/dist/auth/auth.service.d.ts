import { FirebaseService } from "src/firebase/firebase.service";
export declare class AuthService {
    private fireBaseService;
    constructor(fireBaseService: FirebaseService);
    login(): string;
    signup(): string;
}
