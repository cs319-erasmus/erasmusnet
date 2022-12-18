import { Injectable } from '@nestjs/common';
import { CourseApprovalDTO } from './courseApprovalDto/courseApproval.dto';

@Injectable()
export class CourseApprovalService {
  create(courseApprovalDto: CourseApprovalDTO) {
    return 'This action adds a new courseApproval';
  }

  findAll(instructorId: string) {
    return `This action returns all courseApproval`;
  }

  remove(id: string) {
    return `This action removes a #${id} courseApproval`;
  }
}
