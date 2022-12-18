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
    return await admin
      .firestore()
      .collection(role + 'Profile')
      .get();
  }

  async findOne(uid: string, role: string) {
    return await admin
      .firestore()
      .collection(role + 'Profile')
      .doc(uid)
      .get();
  }

  async remove(uid: string, role: string) {
    return await admin
      .firestore()
      .collection(role + 'Profile')
      .doc(uid)
      .delete();
  }
}
