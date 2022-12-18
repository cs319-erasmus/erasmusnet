import { CourseLinkDTO } from "src/course/courseDto/courseLink.dto";

export class CourseApprovalDTO extends CourseLinkDTO{
    approvalId: string;
    courseId: string;
    isApproved: boolean;
 
}