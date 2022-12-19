import { Injectable } from '@nestjs/common';
import admin from 'src/main';
import { CourseLinkDTO } from './courseDto/courseLink.dto';

@Injectable()
export class CourseService {
  create(courseLinkDTO:CourseLinkDTO) {
    admin
    .firestore()
    .collection('courses')
    .doc(courseLinkDTO.uid)
    .update({
      linkObjects: admin.firestore.FieldValue.arrayUnion(courseLinkDTO)
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
