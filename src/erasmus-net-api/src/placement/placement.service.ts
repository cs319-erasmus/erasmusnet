import { Injectable } from '@nestjs/common';
import admin from 'src/main';
import { PlacementDTO } from './placementDto/placement.dto';

@Injectable()
export class PlacementService {
  async create(placementDTO: PlacementDTO) {
      if(!placementDTO.studentApproved&&placementDTO.isPlaced){
        //remove from placed students
        admin.firestore().collection('list').doc
        //find the university name
        //check if any in the waiting list wants that university
        //if yes, add to placed students 
      }
      return await admin.firestore().collection('placements').doc(placementDTO.uid).set(placementDTO);
  }

  async findAll() {
    const collection = await admin.firestore().collection('placements').get();
    return collection.docs.map((doc) => doc.data());
  }

  async findOne(uid: string) {
    const doc = await admin.firestore().collection('placements').doc(uid).get();
    return doc.data();
  }

  remove(uid: string) {
    return admin.firestore().collection('placements').doc(uid).delete();
  }
}
