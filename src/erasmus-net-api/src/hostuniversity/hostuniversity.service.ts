import { Injectable } from '@nestjs/common';
import admin from 'src/main';
import {  HostUniversityDTO } from './hostUniversityDto/hostUniversity.dto';

@Injectable()
export class HostUniversityService {
  create(hostUniversityDTO: HostUniversityDTO) {
    admin
    .firestore()
    .collection('courses')
    .doc(hostUniversityDTO.hostUniversityId)
    .set(hostUniversityDTO);
    return true;
  }

  async findOne(uid: string) {
    const doc = await admin.firestore().collection('hostuniversity').doc(uid).get();
    return doc.data();
  }

  remove(uid: string) {
    return admin.firestore().collection('hostuniversity').doc(uid).delete();
  }
}
