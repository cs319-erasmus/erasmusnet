import { Injectable } from '@nestjs/common';
import admin from 'src/main';
import { StageDTO } from './stageDto/stage.dto';

@Injectable()
export class StageService {
  create(stageDto: StageDTO) {
    admin.firestore().collection('stage').doc('stage').set(stageDto);
  }

  async findOne() {
    const doc = await admin.firestore().collection('stage').doc('stage').get();
    return doc.data();
  }

  remove() {
    return admin.firestore().collection('stage').doc('stage').delete();
  }
}
