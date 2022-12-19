import { CourseLinkDTO } from "src/course/courseDto/courseLink.dto";
export class CourseApprovalDTO extends CourseLinkDTO{
    isApproved: boolean;
    instructorId: string;
}