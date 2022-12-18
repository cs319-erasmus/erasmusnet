import {
  createParamDecorator,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../auth/auth.service';
export interface RequestModel extends Request {
  user: any;
}
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  public async use(req: RequestModel, _: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        throw new HttpException(
          { message: 'missing authz header' },
          HttpStatus.BAD_REQUEST,
        );
      }
      const user = await this.authService.authenticate(authorization);
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
