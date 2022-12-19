import { Injectable } from '@nestjs/common';
import admin from 'src/main';
import { PlacementDTO } from './placementDto/placement.dto';

@Injectable()
export class PlacementService {
  async create(placementDTO: PlacementDTO) {
      return await admin.firestore().collection('preapproval').doc(placementDTO.uid).set(placementDTO);
  }

  async findAll() {
    const collection = await admin.firestore().collection('preapproval').get();
    return collection.docs.map((doc) => doc.data());
  }

  async findOne(uid: string) {
    const doc = await admin.firestore().collection('preapproval').doc(uid).get();
    return doc.data();
  }

  remove(uid: string) {
    return admin.firestore().collection('preapproval').doc(uid).delete();
  }
}
