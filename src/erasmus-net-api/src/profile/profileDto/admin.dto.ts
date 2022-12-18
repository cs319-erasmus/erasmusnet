import { UserDTO } from "./user.dto";

export class AdminDTO extends UserDTO {
    waitingListRef: string;
    taskListRef: string;
    placedStudentsList: string;
//     TODO: add file
}