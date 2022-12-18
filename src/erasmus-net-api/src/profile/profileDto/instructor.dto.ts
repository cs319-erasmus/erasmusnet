import { UserDTO } from './user.dto';

export class InstructorDto extends UserDTO {
  taskListRef: string;
  coursesGiven: string[];
}
