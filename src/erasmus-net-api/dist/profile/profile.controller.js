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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const profile_service_1 = require("./profile.service");
const auth_guard_1 = require("../middleware/auth.guard");
const role_decorator_1 = require("../middleware/role.decorator");
const student_dto_1 = require("./profileDto/student.dto");
const coordinator_dto_1 = require("./profileDto/coordinator.dto");
const admin_dto_1 = require("./profileDto/admin.dto");
const instructor_dto_1 = require("./profileDto/instructor.dto");
const inStudent_dto_1 = require("./profileDto/inStudent.dto");
const auth_service_1 = require("../auth/auth.service");
let ProfileController = class ProfileController {
    constructor(profileService, authService) {
        this.profileService = profileService;
        this.authService = authService;
    }
    createStudent(studentDto) {
        return this.profileService.create(studentDto, 'student');
    }
    createCoordinator(coordinatorDTO) {
        return this.profileService.create(coordinatorDTO, 'coordinator');
    }
    createAdmin(adminDTO) {
        return this.profileService.create(adminDTO, 'admin');
    }
    createInstructor(instructorDto) {
        return this.profileService.create(instructorDto, 'instructor');
    }
    createInStudent(inStudentDto) {
        return this.profileService.create(inStudentDto, 'inStudent');
    }
    async findOwnProfile(req) {
        const authToken = req.headers.authorization;
        try {
            const { uid, email, role } = await this.authService.authenticate(authToken);
            return this.profileService.findOne(uid, role);
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error.message);
        }
    }
    findAll(roleObj) {
        return this.profileService.findAll(roleObj.role);
    }
    findOne(uidObj) {
        return this.profileService.findOne(uidObj.uid, uidObj.role);
    }
    async removeOwn(req) {
        const authToken = req.headers.authorization;
        try {
            const { uid, email, role } = await this.authService.authenticate(authToken);
            return this.profileService.remove(uid, role);
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error.message);
        }
    }
};
__decorate([
    (0, role_decorator_1.Roles)('student'),
    (0, common_1.Post)('student'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.StudentDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "createStudent", null);
__decorate([
    (0, role_decorator_1.Roles)('coordinator'),
    (0, common_1.Post)('coordinator'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coordinator_dto_1.CoordinatorDTO]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "createCoordinator", null);
__decorate([
    (0, role_decorator_1.Roles)('admin'),
    (0, common_1.Post)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.AdminDTO]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "createAdmin", null);
__decorate([
    (0, role_decorator_1.Roles)('instructor'),
    (0, common_1.Post)('instructor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [instructor_dto_1.InstructorDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "createInstructor", null);
__decorate([
    (0, role_decorator_1.Roles)('inStudent'),
    (0, common_1.Post)('inStudent'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inStudent_dto_1.InStudentDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "createInStudent", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "findOwnProfile", null);
__decorate([
    (0, role_decorator_1.Roles)('admin'),
    (0, common_1.Get)('admin/all'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)('admin'),
    (0, common_1.Get)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "removeOwn", null);
ProfileController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.RolesGuard),
    (0, common_1.Controller)('api/profile'),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        auth_service_1.AuthService])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map