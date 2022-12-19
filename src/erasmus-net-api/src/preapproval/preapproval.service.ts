import { Injectable } from '@nestjs/common';
import { PreApprovalDTO } from './preapprovalDto/preapproval.dto';
import admin from 'src/main';


@Injectable()
export class PreapprovalService {
  async create(preApprovalDTO: PreApprovalDTO) {
    return await admin.firestore().collection('preapproval').doc(preApprovalDTO.uid).set(preApprovalDTO);
  }

  async findAll() {
    const collection = await admin.firestore().collection('preapproval').get();
    return collection.docs.map((doc) => doc.data());
  }

  async findOne(uid:string) {
    const doc =  await admin.firestore().collection('preapproval').doc(uid).get();
    return doc.data();
  }

  async remove(uid:string) {
    return await admin.firestore().collection('preapproval').doc(uid).delete();
  }
}
