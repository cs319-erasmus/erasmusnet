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
      linkObjects: admin.firestore.FieldValue.arrayUnion([courseLinkDTO])
    });
    return true;
  }

  findOne(uid: string) {
    return admin.firestore().collection('courses').doc(uid).get();
  }

  remove(uid: string) {
    return admin.firestore().collection('courses').doc(uid).delete();
  }
}
