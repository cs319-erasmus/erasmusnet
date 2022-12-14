import { HttpException, HttpStatus,Injectable, UnauthorizedException } from "@nestjs/common";
// import { FirebaseService } from "src/firebase/firebase.service";
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
import * as admin from 'firebase-admin';
    

@Injectable({})
export class AuthService{
  constructor(){}
  public async login(
      email: string,
      password: string,
    ){
      try {
        
      } catch (error: unknown) {
  
      }
  }

  public async signup(displayName: string, password: string, email: string, role: string): Promise<any>{
    try{
      const {uid} = await admin.auth().createUser({
        displayName,
        password,
        email
      });
      await admin.auth().setCustomUserClaims(uid, {role});
      return {uid};
    } catch (error) {
      throw new UnauthorizedException(error.message);
        }
    }
}

/*

NestJS, TypeScript, Firebase, Async/Await (Part 2)

In Part 1, we only printed the HTTP errors in the console.

In Part 2, we are gonna quickly send a formal HTTPException, so
we can get the error while doing the request with Thunder Client.

*/
