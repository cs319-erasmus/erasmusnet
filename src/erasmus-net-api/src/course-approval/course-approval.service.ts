import { Injectable } from '@nestjs/common';
import admin from 'src/main';
import { CourseApprovalDTO } from './courseApprovalDto/courseApproval.dto';

@Injectable()
export class CourseApprovalService {
  create(courseApprovalDto: CourseApprovalDTO) {

    const approvalId = courseApprovalDto.approvalId;
    const obj = {};
    obj[approvalId] = courseApprovalDto;
    console.log(obj);
    admin.firestore().collection('courseapproval')
    .doc(courseApprovalDto.instructorId).update(obj);
  }
  //gets a single document, with all the approvals as fields
  async findAll(instructorId: string) {
    const doc = await admin.firestore().collection('courseapproval').doc(instructorId).get();
    return doc.data();

  }

  remove(approvalId: string, instructorId: string) {
    admin.firestore().collection('courseapproval').doc(instructorId).update({
      [approvalId]: admin.firestore.FieldValue.delete()
    });
  }
    
}
