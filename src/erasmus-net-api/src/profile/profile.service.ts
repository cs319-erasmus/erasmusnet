import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';
import admin from 'src/main';
import { StudentDto } from './profileDto/student.dto';
import { UserDTO } from './profileDto/user.dto';

@Injectable()
export class ProfileService {
  async create(userProfile: UserDTO, role: string) {
    const res = await admin
      .firestore()
      .collection(role + 'Profile')
      .doc(userProfile.uid)
      .set(userProfile);
    return res;
  }
  findAll(role: string) {
    return admin
      .firestore()
      .collection(role + 'Profile')
      .get();
  }

  findOne(uid: string, role: string) {
    return admin
      .firestore()
      .collection(role + 'Profile')
      .doc(uid)
      .get();
  }

  remove(uid: string, role: string) {
    return admin
      .firestore()
      .collection(role + 'Profile')
      .doc(uid)
      .delete();
  }
}
