import { CourseDTO } from "./course.dto";

export class CourseLinkDTO{ 
    uid: string;
    bilkentCourses: CourseDTO[];
    erasmusCourses: CourseDTO[];
    approvalId: string;
}