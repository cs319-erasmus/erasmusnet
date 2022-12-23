import { Injectable } from '@nestjs/common';
import admin from 'src/main';
import { CourseApprovalDTO } from './courseApprovalDto/courseApproval.dto';

@Injectable()
export class CourseApprovalService {
  create(courseApprovalDto: CourseApprovalDTO) {
    if (admin.firestore().collection('courseapproval').doc(courseApprovalDto.instructorId).get().then(doc => doc.exists)) {
      admin.firestore().collection('courseapproval').doc(courseApprovalDto.instructorId).set({
        [courseApprovalDto.approvalId]: courseApprovalDto
      }, {merge: true});
    }
    else {
      admin.firestore().collection('courseapproval').doc(courseApprovalDto.instructorId).set({
        [courseApprovalDto.approvalId]: courseApprovalDto
      });
    }
  }
  //gets a single document, with all the approvals as fields
  async findAll(instructorId: string) {
    const doc = await admin.firestore().collection('courseapproval').doc(instructorId).get();
    return doc.data();

  }

  async status(instructorId: string, approvalId: string) {
    const doc = await admin.firestore().collection('courseapproval').doc(instructorId).get();
    return JSON.stringify(doc.data()[approvalId].isApproved);

  }

  remove(approvalId: string, instructorId: string) {
    admin.firestore().collection('courseapproval').doc(instructorId).update({
      [approvalId]: admin.firestore.FieldValue.delete()
    });
  }
    
}
