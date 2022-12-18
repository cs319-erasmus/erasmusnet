"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const http_exception_1 = require("@nestjs/common/exceptions/http.exception");
const admin = require("firebase-admin");
let AuthMiddleware = class AuthMiddleware {
    getToken(authToken) {
        const match = authToken.match(/^Bearer (.*)$/);
        if (!match || match.length < 2) {
            throw new common_1.UnauthorizedException('Invalid Authorization token - Token does not match Bearer .*');
        }
        return match[1];
    }
    async authenticate(authToken) {
        const tokenString = this.getToken(authToken);
        try {
            const decodedToken = await admin
                .auth()
                .verifyIdToken(tokenString);
            console.log(decodedToken);
            const { email, uid, role } = decodedToken;
            return { email, uid, role };
        }
        catch (err) {
            throw new common_1.UnauthorizedException(err.message);
        }
    }
    async use(req, _, next) {
        try {
            const { authorization } = req.headers;
            if (!authorization) {
                throw new http_exception_1.HttpException({ message: 'missing authz header' }, common_1.HttpStatus.BAD_REQUEST);
            }
            const user = await this.authenticate(authorization);
            console.log(user);
            req.user = user;
            next();
        }
        catch (err) {
            throw new http_exception_1.HttpException({ message: 'invalid token' }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map