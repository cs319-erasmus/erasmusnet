import { Injectable } from '@nestjs/common';
import admin from 'src/main';
import { AppointmentDTO } from './appointmentDto/appointment.dto';


@Injectable()
export class AppointmentService {
  async create(appointmentDto:AppointmentDTO) {
    return await admin.firestore().collection('appointment').doc(appointmentDto.appointmentId).set(appointmentDto);
  }

  async findAll(uid: string, role: string) {
    if(role == 'student'){
      const collection = await admin.firestore().collection('appointment').where('studentUid', '==', uid).get();
      return collection.docs.map((doc) => doc.data());
    }
    else if(role == 'coordinator'){
      const collection = await admin.firestore().collection('appointment').where('hostId', '==', uid).get();
      return collection.docs.map((doc) => doc.data());
    }

  }

  async remove(appointmentId: string) {
    return await admin.firestore().collection('appointment').doc(appointmentId).delete();
  }
}
