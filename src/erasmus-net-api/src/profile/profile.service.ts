import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';
import admin from 'src/main';
import { StudentDto } from './profileDto/student.dto';
import { UserDTO } from './profileDto/user.dto';

@Injectable()
export class ProfileService {
  async create(userProfile: UserDTO, role: string) {
    return await admin
      .firestore()
      .collection(role + 'Profile')
      .doc(userProfile.uid)
      .set(userProfile);
  }
  async findAll(role: string) {
    const collection = await admin
      .firestore()
      .collection(role + 'Profile')
      .get();
      return collection.docs.map((doc) => doc.data());
  }

  async findOne(uid: string, role: string) {
    const doc = await admin
      .firestore()
      .collection(role + 'Profile')
      .doc(uid)
      .get();
    return doc.data();
  }

  async remove(uid: string, role: string) {
    return await admin
      .firestore()
      .collection(role + 'Profile')
      .doc(uid)
      .delete();
  }
}
