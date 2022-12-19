import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  findAll(@Body('instructorId') instructorId: string ) {
    return this.courseApprovalService.findAll(instructorId);
  }


  @Delete()
  remove(@Body('approvalId') courseApprovalId: string, @Body('instructorId') instructorId: string) {
    return this.courseApprovalService.remove(courseApprovalId, instructorId);
  }
}
