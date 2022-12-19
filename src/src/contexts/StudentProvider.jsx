import React, { createContext, useContext, useState, useEffect } from 'react'
import { studentProfileMock } from "./MockData/StudentProfile"
import { studentCoursesMock } from "./MockData/StudentCourses"
import { useStage } from "./StageProvider"
import { useAuth } from "./AuthProvider"

export const StudentContext = createContext()

export const useStudent = () => {
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

function StudentProvider({children}) {
  const [student, setStudent] = useState(null);
  const { stage } = useStage();

  const fetchStudentProfile = () => {
    return studentProfileMock; // TODO: fetch from backend
  }

  const getCourseApprovalStatus = (approvalId) => {
    return true; // TODO: fetch from backend
  }

  const fetchStudentCourses = () => {
    return studentCoursesMock; // TODO: fetch from backend
  }

  const getStudentCourses = () => {
    const courses = fetchStudentCourses();
    const studentCourses = [];
    
    courses.forEach(course => {
      const isApproved = getCourseApprovalStatus(course.approvalId);
      studentCourses.push({isApproved: isApproved, bilkentCourses: course.bilkentCourses, erasmusCourses: course.erasmusCourses});
    });

    return studentCourses;
  }

  const getStudentStage = () => {
      return stage;
  }

  const getStudentAppointments = () => {
  }
  const flag = 1;
  useEffect(() => {
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
    if (flag === 0)
    setStudent(student);
    else
    setStudent(null);
  }, [flag]);
  
  const getStudent = () => {
    try {
      return student;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const value = { student, getStudent };

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
}

export { StudentProvider }