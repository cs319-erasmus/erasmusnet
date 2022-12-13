import { HttpException, HttpStatus,Injectable } from "@nestjs/common";
import { FirebaseService } from "src/firebase/firebase.service";
import { MockUser } from "src/models/mockUser.model";
import {        
        AuthError,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        UserCredential,
} from 'firebase/auth';
import { 
    setDoc, 
    DocumentReference,
    doc,
    getDoc,
    DocumentSnapshot,
    DocumentData,
} from 'firebase/firestore';
import { User } from "src/user/entities/user.entity";
    

@Injectable({})
export class AuthService{
    constructor(private fireBaseService: FirebaseService){}
    public async login(
        email: string,
        password: string,
      ): Promise<Omit<MockUser, 'password'>> {
        try {
          const userCredential: UserCredential = await signInWithEmailAndPassword(
            this.fireBaseService.auth,
            email,
            password,
          );
    
          if (userCredential) {
            const id: string = userCredential.user.uid;
            const docRef: DocumentReference = doc(
              this.fireBaseService.usersCollection,
              id,
            );
    
            const snapshot: DocumentSnapshot<DocumentData> = await getDoc(docRef);
            const loggedUser: MockUser = {
              ...snapshot.data(),
              id: snapshot.id,
            } as MockUser;
    
            delete loggedUser.password;
            return loggedUser;
          }
        } catch (error: unknown) {
          const firebaseAuthError = error as AuthError;
    
          console.log(`[FIREBASE AUTH ERROR CODE]: ${firebaseAuthError.code}`);
    
          if (firebaseAuthError.code === 'auth/wrong-password') {
            throw new HttpException(
              'Email or password incorrect.',
              HttpStatus.FORBIDDEN,
            );
          }
    
          if (firebaseAuthError.code === 'auth/user-not-found') {
            throw new HttpException('Email not found.', HttpStatus.NOT_FOUND);
          }
        }
      }

    public async signup(body: Omit<MockUser, 'id'>): Promise<void>{
        try{
            const userCredential: UserCredential =
            await createUserWithEmailAndPassword(
            this.fireBaseService.auth,
            body.email,
            body.password,
        );
        if (userCredential) {
            const id: string = userCredential.user.uid;
            const docRef: DocumentReference = doc(
                this.fireBaseService.usersCollection,
                id,
            );
            await setDoc(docRef, body);
      }
    } catch (error: unknown) {
      const firebaseAuthError = error as AuthError;

      console.log(`[FIREBASE AUTH ERROR CODE]: ${firebaseAuthError.code}`);

      if (firebaseAuthError.code === 'auth/email-already-in-use') {
        throw new HttpException('Email already exists.', HttpStatus.CONFLICT);
      }
        }
    }
}

/*

NestJS, TypeScript, Firebase, Async/Await (Part 2)

In Part 1, we only printed the HTTP errors in the console.

In Part 2, we are gonna quickly send a formal HTTPException, so
we can get the error while doing the request with Thunder Client.

*/
