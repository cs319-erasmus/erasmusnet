import {
  createParamDecorator,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../auth/auth.service';
import * as admin from 'firebase-admin';
export interface RequestModel extends Request {
  user: any;
}
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private getToken(authToken: string): string {
    const match = authToken.match(/^Bearer (.*)$/);
    if (!match || match.length < 2) {
      throw new UnauthorizedException(
        'Invalid Authorization token - Token does not match Bearer .*',
      );
    }
    return match[1];
  }
  public async authenticate(authToken: string): Promise<any> {
    const tokenString = this.getToken(authToken);
    try {
      const decodedToken: admin.auth.DecodedIdToken = await admin
        .auth()
        .verifyIdToken(tokenString);
      console.log(decodedToken);
      const { email, uid, role } = decodedToken;
      return { email, uid, role };
    } catch (err) {
      throw new UnauthorizedException(err.message);
    }
  }

  public async use(req: RequestModel, _: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        throw new HttpException(
          { message: 'missing authz header' },
          HttpStatus.BAD_REQUEST,
        );
      }
      const user = await this.authenticate(authorization);
      console.log(user);
      req.user = user;
      next();
    } catch (err) {
      throw new HttpException(
        { message: 'invalid token' },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
