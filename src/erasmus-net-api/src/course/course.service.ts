import { Injectable } from '@nestjs/common';
import admin from 'src/main';
import { CourseDTO } from './courseDto/course.dto';
import { CourseLinkDTO } from './courseDto/courseLink.dto';

@Injectable()
export class CourseService {
  createLink(courseLinkDTO:CourseLinkDTO, uid: string, approvalId: string) {
    admin
    .firestore()
    .collection('courses')
    .doc(uid)
    .set({
      [approvalId]: courseLinkDTO
    }, {merge: true});
    return true;
  }

  create(courseDTO:CourseDTO, uid: string) {
    admin
    .firestore()
    .collection('courses')
    .doc(uid)
    .update({
      Objects: admin.firestore.FieldValue.arrayUnion(courseDTO)
    });
    return true;
  }

  async findOne(uid: string) {
    const doc = await admin.firestore().collection('courses').doc(uid).get();
    return JSON.stringify(doc.data());
  }

  remove(uid: string) {
    return admin.firestore().collection('courses').doc(uid).delete();
  }
}
