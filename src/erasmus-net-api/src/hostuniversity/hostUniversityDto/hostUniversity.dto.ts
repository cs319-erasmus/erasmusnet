import { CourseDTO } from "./course.dto";

export class HostUniversityDTO { 
    hostUniversityId: string;
    hostUniversityName: string;
    courses: CourseDTO[];
}