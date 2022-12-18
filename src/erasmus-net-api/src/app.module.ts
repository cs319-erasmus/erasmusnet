import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { ConfigModule } from '@nestjs/config';
import { AuthMiddleware } from './middleware/auth.middleware';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [AuthModule, 
     CourseModule,ConfigModule.forRoot(), ProfileModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({path: '/api', method: RequestMethod.ALL});
  }
}
