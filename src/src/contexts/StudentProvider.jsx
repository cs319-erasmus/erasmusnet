import React, { createContext, useContext, useState } from 'react'
import { studentProfileMock } from "./MockData/StudentProfile"
import { studentCoursesMock } from "./MockData/StudentCourses"

export const StudentContext = createContext()

const useStudent = () => {
    return useContext(StudentContext);
}

/*
Student template
{
  "id": 1,
  "name": "John Doe",
  "email":
  "password
  "role": "student",
  "stage": 1,
  "courses": [
    {
      id: 1,
      isApproved: true,
      bilkentCourses: [
        {
          "id": 1,
          "code": "CS101",
          "name": "Introduction to Computer Science",
          "coordinator": "Uğur Güdükbay",
          "department": "CS",
          "type": "Technical Elective",
          "credits": "6.5",
        },
        {
          "id": 2,
          "code": "CS465",
          "name": "Computer Graphics",
          "coordinator": "Uğur Güdükbay",
          "department": "CS",
          "type": "Technical Elective",
          "credits": "6.5",
        },
      ],
      erasmusCourses: [
        {
          "id": 1,
          "code": "1TD388",
          "name": "Computer Graphics",
          "syllabus": "1TD388_Syllabus.pdf",
          "credits": "6.5",
        },
        {
          "id": 2,
          "code": "1TD388",
          "name": "Computer Graphics",
          "syllabus": "1TD388_Syllabus.pdf",
          "credits": "6.5",
        },
      ]
    }
  ],
  appointments: [
    ???
  ]

*/

function StudentProvider() {
  const [student, setStudent] = useState(null);

  const fetchStudentProfile = () => {
    return studentProfileMock; // TODO: fetch from backend
  }

  const getCourseApprovalStatus = () => {
  }

  const fetchStudentCourses = () => {
    return studentCoursesMock; // TODO: fetch from backend
  }

  const getStudentCourses = () => {
    const courses = fetchStudentCourses();
    const studentCourses = [];
    
    courses.forEach(course => {
      const isApproved = getCourseApprovalStatus(course.id);
      studentCourses.push({isApproved: isApproved, bilkentCourses: course.bilkentCourses, erasmusCourses: course.erasmusCourses});
    });

    return studentCourses;
  }

  const getStudentStage = () => {
  }

  const getStudentAppointments = () => {
  }

  const studentBuilder = () => {
    const studentProfile = fetchStudentProfile();
    const studentCourses = getStudentCourses();
    const studentStage = getStudentStage();
    const studentAppointments = getStudentAppointments();
    const student = {
      uid: studentProfile.uid,
      name: studentProfile.name,
      email: studentProfile.email,
      password: studentProfile.password,
      role: "student",
      stage: studentStage,
      courses: studentCourses,
    };

    setStudent(student);
  };

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
}

export default StudentProvider