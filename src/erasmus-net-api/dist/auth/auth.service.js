"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
let AuthService = class AuthService {
    async signup(displayName, password, email, role) {
        try {
            const { uid } = await admin.auth().createUser({
                displayName,
                password,
                email,
            });
            await admin.auth().setCustomUserClaims(uid, { role });
            return { uid };
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error.message);
        }
    }
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
};
AuthService = __decorate([
    (0, common_1.Injectable)({})
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map