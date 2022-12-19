import { ProfileService } from './profile.service';
import { StudentDto } from './profileDto/student.dto';
import { CoordinatorDTO } from './profileDto/coordinator.dto';
import { AdminDTO } from './profileDto/admin.dto';
import { InstructorDto } from './profileDto/instructor.dto';
import { InStudentDto } from './profileDto/inStudent.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class ProfileController {
    private readonly profileService;
    private readonly authService;
    constructor(profileService: ProfileService, authService: AuthService);
    createStudent(studentDto: StudentDto): Promise<FirebaseFirestore.WriteResult>;
    createCoordinator(coordinatorDTO: CoordinatorDTO): Promise<FirebaseFirestore.WriteResult>;
    createAdmin(adminDTO: AdminDTO): Promise<FirebaseFirestore.WriteResult>;
    createInstructor(instructorDto: InstructorDto): Promise<FirebaseFirestore.WriteResult>;
    createInStudent(inStudentDto: InStudentDto): Promise<FirebaseFirestore.WriteResult>;
    findOwnProfile(uidObj: {
        uid: string;
        role: string;
    }): Promise<FirebaseFirestore.DocumentData>;
    findAll(roleObj: {
        role: string;
    }): Promise<FirebaseFirestore.DocumentData[]>;
    findOne(uidObj: {
        uid: string;
        role: string;
    }): Promise<FirebaseFirestore.DocumentData>;
    removeOwn(uidObj: {
        uid: string;
        role: string;
    }): Promise<FirebaseFirestore.WriteResult>;
}
