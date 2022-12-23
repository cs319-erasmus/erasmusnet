import { Injectable } from '@nestjs/common';
import admin from 'src/main';
import { CourseDTO } from './courseDto/course.dto';
import { CourseLinkDTO } from './courseDto/courseLink.dto';

@Injectable()
export class CourseService {
  async createLink(courseLinkDTO: CourseLinkDTO, uid: string, approvalId: string) {
    // Validate input arguments
    if (!uid || !approvalId || !courseLinkDTO) {
      throw new Error('Missing required input argument(s)');
    }
    if (typeof uid !== 'string' || typeof approvalId !== 'string') {
      throw new Error('Input argument(s) must be strings');
    }
  
    try {
      // Get a reference to the courses collection and the specific document
      const coursesRef = admin.firestore().collection('courses');
      const docRef = coursesRef.doc(uid);
  
      // Update the document with the new course link
      await docRef.set({
        [approvalId]: courseLinkDTO
      }, { merge: true });
  
      return true;
    } catch (error) {
      console.error(error);
      throw error;
    }
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
