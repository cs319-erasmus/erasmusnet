import { CourseDTO } from "./course.dto";

export class CourseLinkDTO{ 
    bilkentCourses: CourseDTO[];
    erasmusCourses: CourseDTO[];
    approvalId: string;
}