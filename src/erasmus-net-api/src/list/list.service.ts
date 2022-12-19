import { Injectable } from '@nestjs/common';
import admin from 'src/main';
import { PlacedStudentsListDTO } from './listDto/placedStudentsList.dto';
import { WaitingListDTO } from './listDto/waitinglist.dto';

@Injectable()
export class ListService {
  create(waitinglist: WaitingListDTO, placedstudentslist: PlacedStudentsListDTO) {
    admin.firestore().collection('lists').doc('lists').set({
      waitinglist: waitinglist,
      placedstudentslist: placedstudentslist
    });
  }

  async findOne() {
    const doc = await admin.firestore().collection('lists').doc('lists').get();
    return doc.data();
  }

  remove() {
    return admin.firestore().collection('lists').doc('lists').delete();
  }
}
