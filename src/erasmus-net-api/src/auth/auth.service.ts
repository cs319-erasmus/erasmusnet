import { HttpException, HttpStatus,Injectable, UnauthorizedException } from "@nestjs/common";

import * as admin from 'firebase-admin';
    

@Injectable({})
export class AuthService{
  constructor(){}

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
  private getToken(authToken: string): string {
    const match = authToken.match(/^Bearer (.*)$/);
    if (!match || match.length < 2) {
      throw new UnauthorizedException('Invalid Authorization token - Token does not match Bearer .*');
    }
    return match[1];
  }
  public async authenticate(authToken: string): Promise<any> {
    const tokenString = this.getToken(authToken);
    try {
      const decodedToken: admin.auth.DecodedIdToken = await admin.auth().verifyIdToken(tokenString);
      console.log(decodedToken);
      const  {
        email,
        uid,
        role
      } = decodedToken;
      return { email, uid, role};
    } catch (err) {
      throw new UnauthorizedException(err.message);
    }
  }
}

/*

NestJS, TypeScript, Firebase, Async/Await (Part 2)

In Part 1, we only printed the HTTP errors in the console.

In Part 2, we are gonna quickly send a formal HTTPException, so
we can get the error while doing the request with Thunder Client.

*/
