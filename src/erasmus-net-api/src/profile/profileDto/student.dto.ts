import { UserDTO } from './user.dto';

export class StudentDto extends UserDTO {
  taskListRef: string;
  placementRef: string;
  preApprovalRef: string;
  semester: string;
  studentId: string;
}
