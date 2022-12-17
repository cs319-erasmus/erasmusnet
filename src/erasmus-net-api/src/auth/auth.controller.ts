import { BadRequestException,Body, Controller, Get, Post, HttpStatus, Req, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDTO } from "src/user/dto/user.dto";
import { User } from "src/models/user.model";
import { } from '@nestjs/common';
import {
  ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request } from 'express';
import * as CONSTANT from '../constants/constants.api';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
    @Post('signup')
    public signup(
        @Body('name') name: string, 
        @Body('password') password: string,
        @Body('email') email: string,
        @Body('role') role: string
    ) {
        return this.authService.signup(name, password, email, role);
    }
    
    @Get('authenticate')
    @ApiBadRequestResponse({ schema: { example: { statusCode: 400, message: CONSTANT.MISSING_AUTH_HEADER, error: 'Bad Request' } } })
    @ApiUnauthorizedResponse({ schema: { example: { statusCode: 401, message: CONSTANT.INVALID_AUTH_TOKEN, error: 'Unauthorized' } } })
    @ApiOkResponse({ schema: { example: { isAuthenticate: true, status: 200 } } })
    public async authenticate(@Req() req: Request): Promise<any> {
    const authToken = req.headers.authorization;

    if (!authToken) {
        throw new BadRequestException(CONSTANT.MISSING_AUTH_HEADER);
    }
    try {
        const {uid, email,role } = await this.authService.authenticate(authToken);
        return { uid, email, role,  status: HttpStatus.OK };
    } catch (error) {
        throw new UnauthorizedException(error.message);
    }
    }
}