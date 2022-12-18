import { Module } from '@nestjs/common';
import { CourseApprovalService } from './course-approval.service';
import { CourseApprovalController } from './course-approval.controller';

@Module({
  controllers: [CourseApprovalController],
  providers: [CourseApprovalService]
})
export class CourseApprovalModule {}
