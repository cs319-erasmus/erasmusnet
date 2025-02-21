"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const course_module_1 = require("./course/course.module");
const config_1 = require("@nestjs/config");
const auth_middleware_1 = require("./middleware/auth.middleware");
const profile_module_1 = require("./profile/profile.module");
const preapproval_module_1 = require("./preapproval/preapproval.module");
const course_approval_module_1 = require("./course-approval/course-approval.module");
const list_module_1 = require("./list/list.module");
const placement_module_1 = require("./placement/placement.module");
const stage_module_1 = require("./stage/stage.module");
const appointment_module_1 = require("./appointments/appointment.module");
const hostuniversity_module_1 = require("./hostuniversity/hostuniversity.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes({ path: '/api', method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            course_module_1.CourseModule,
            config_1.ConfigModule.forRoot(),
            profile_module_1.ProfileModule,
            preapproval_module_1.PreapprovalModule,
            course_approval_module_1.CourseApprovalModule,
            list_module_1.ListModule,
            placement_module_1.PlacementModule,
            stage_module_1.StageModule,
            appointment_module_1.AppointmentModule,
            hostuniversity_module_1.HostUniversityModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map