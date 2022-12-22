import { CourseDTO } from "src/course/courseDto/course.dto";


export class HostUniversityDTO { 
    hostUniversityId: string;
    hostUniversityName: string;
    courses: CourseDTO[];
}