//To-Do:
//syllabus byte array and clicking syllabus to view it will be added
export const mockDataCourse = [
    {
        id: 1,
        courseName: 'Introduction to Computer Science',
        courseCode: 'CS 101',
        instructorName: 'John Doe',
        department: 'Computer Science',
        university: 'University of Toronto',
        isMustCourse: true,
        credit: 3.3,
        electiveName: 'N/A',
        equivalentCourseName: 'CS 101 Algorithms',
        courseApproval:{
            isInstructorApproved: false,
        },
        syllabus:{
            fileSize: 33,
            fileType: 'pdf',
            fileName: 'CS 101 Syllabus',
            fileDescription: 'Introduction to Computer Science Syllabus',
            // fileContent: 
        },

    },
    {
        id: 2,
        courseName: 'Mathematics for Computer Science',
        courseCode: 'CS 872',
        instructorName: 'Helen Doe',
        department: 'Computer Science',
        university: 'University of Toronto',
        isMustCourse: true,
        credit: 4.3,
        electiveName: 'N/A',
        equivalentCourseName: 'Math 235 Linear Algebra',
        courseApproval:{
            isInstructorApproved: false,
        },
        syllabus:{
            fileSize: 40,
            fileType: 'pdf',
            fileName: 'CS 872 Syllabus',
            fileDescription: 'Mathematics for Computer Science Syllabus',
            // fileContent: 
        },

    }
]