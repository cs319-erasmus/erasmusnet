import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { CourseApprovalService } from './course-approval.service';
import { CourseApprovalDTO } from './courseApprovalDto/courseApproval.dto';

@Controller('api/course-approval')
export class CourseApprovalController {
  constructor(private readonly courseApprovalService: CourseApprovalService) {}

  @Post()
  create(@Body() courseApprovalDTO: CourseApprovalDTO) {
    return this.courseApprovalService.create(courseApprovalDTO);
  }

  @Get()
  findAll(@Headers('instructorId') instructorId: string ) {
    return this.courseApprovalService.findAll(instructorId);
  }

  @Get("/status")
  status(@Headers('instructorId') instructorId: string, @Headers('approvalId') approvalId: string ) {
    return this.courseApprovalService.status(instructorId, approvalId);
  }


  @Delete()
  remove(@Headers('approvalId') courseApprovalId: string, @Headers('instructorId') instructorId: string) {
    return this.courseApprovalService.remove(courseApprovalId, instructorId);
  }
}
