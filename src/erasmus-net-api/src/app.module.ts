import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { ConfigModule } from '@nestjs/config';
import { AuthMiddleware } from './middleware/auth.middleware';
import { ProfileModule } from './profile/profile.module';
import { PreapprovalModule } from './preapproval/preapproval.module';
import { CourseApprovalModule } from './course-approval/course-approval.module';
import { ListModule } from './list/list.module';
import { PlacementModule } from './placement/placement.module';
import { StageModule } from './stage/stage.module';
import { AppointmentModule } from './appointments/appointment.module';
import { HostUniversityModule } from './hostuniversity/hostuniversity.module';

@Module({
  imports: [
    AuthModule,
    CourseModule,
    ConfigModule.forRoot(),
    ProfileModule,
    PreapprovalModule,
    CourseApprovalModule,
    ListModule,
    PlacementModule,
    StageModule,
    AppointmentModule,
    HostUniversityModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '/api', method: RequestMethod.ALL });
  }
}
