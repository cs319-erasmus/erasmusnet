import { firestore } from 'firebase-admin';
import { UserDTO } from './profileDto/user.dto';
export declare class ProfileService {
    create(userProfile: UserDTO, role: string): Promise<firestore.WriteResult>;
    findAll(role: string): Promise<firestore.QuerySnapshot<firestore.DocumentData>>;
    findOne(uid: string, role: string): Promise<firestore.DocumentSnapshot<firestore.DocumentData>>;
    remove(uid: string, role: string): Promise<firestore.WriteResult>;
}
