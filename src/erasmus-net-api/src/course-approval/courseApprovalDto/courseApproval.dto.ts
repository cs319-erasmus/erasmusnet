import { CourseLinkDTO } from "src/course/courseDto/courseLink.dto";
export class CourseApprovalDTO{
    studentUid: string;
    approvalId: string;
    studentName: string;
    isApproved: boolean;
    instructorId: string;
}