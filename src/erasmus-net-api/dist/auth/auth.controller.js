"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const CONSTANT = require("../constants/constants.api");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signup(name, password, email, role) {
        return this.authService.signup(name, password, email, role);
    }
    async authenticate(req) {
        const authToken = req.headers.authorization;
        if (!authToken) {
            throw new common_1.BadRequestException(CONSTANT.MISSING_AUTH_HEADER);
        }
        try {
            const { uid, email, role } = await this.authService.authenticate(authToken);
            return { uid, email, role, status: common_1.HttpStatus.OK };
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error.message);
        }
    }
};
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('password')),
    __param(2, (0, common_1.Body)('email')),
    __param(3, (0, common_1.Body)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Get)('authenticate'),
    (0, swagger_1.ApiBadRequestResponse)({
        schema: {
            example: {
                statusCode: 400,
                message: CONSTANT.MISSING_AUTH_HEADER,
                error: 'Bad Request',
            },
        },
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        schema: {
            example: {
                statusCode: 401,
                message: CONSTANT.INVALID_AUTH_TOKEN,
                error: 'Unauthorized',
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ schema: { example: { isAuthenticate: true, status: 200 } } }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "authenticate", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map