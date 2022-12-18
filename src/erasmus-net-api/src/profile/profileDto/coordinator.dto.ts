import { UserDTO } from './user.dto';

export class CoordinatorDTO extends UserDTO {
  waitingListRef: string;
  taskListRef: string;
  placedStudentsList: string;
  preApprovalList: string;
}
