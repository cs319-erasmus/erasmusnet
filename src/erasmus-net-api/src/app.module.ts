import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { HostUniversityModule } from './host-university/host-university.module';
import { CourseModule } from './course/course.module';
import { FirebaseService } from './firebase/firebase.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, UserModule, HostUniversityModule,
     CourseModule,ConfigModule.forRoot()
],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
