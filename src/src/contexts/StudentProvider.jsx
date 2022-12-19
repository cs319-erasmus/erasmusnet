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
  const API = "http://localhost:3333";
  const { getToken } = useAuth();

  const fetchStudentProfile = () => {
    return studentProfileMock; // TODO: fetch from backend
  }

  const getCourseApprovalStatus = (approvalId) => {
    return true; // TODO: fetch from backend
  }

  const fetchStudentCourses = async () => {
    const token = await getToken();

    const res = await fetch(API + "/api/course", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        "uid": "12345"
      },
    });
    console.log(res);
    return res; // TODO: fetch from backend
  }

  const sendStudentCourses = async () => {
    const token = await getToken();

    const res = await fetch(API + "/api/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify(
        {
          "uid": "12345",
          "bilkentCourses": [
            {
              "courseName": "Introduction to Computer Science",
              "courseCode": "CS 101",
              "instructorName": "John Doe",
              "department": "Computer Science",
              "university": "Bilkent University",
              "isMustCourse": true,
              "credit": "3",
              "electiveName": "",
              "courseApprovalRef": "123456",
              "syllabusRef": "654321"
            },
            {
              "courseName": "Data Structures and Algorithms",
              "courseCode": "CS 102",
              "instructorName": "Jane Doe",
              "department": "Computer Science",
              "university": "Bilkent University",
              "isMustCourse": true,
              "credit": "3",
              "electiveName": "",
              "courseApprovalRef": "789123",
              "syllabusRef": "321987"
            }
          ],
          "erasmusCourses": [
            {
              "courseName": "Software Engineering",
              "courseCode": "SE 201",
              "instructorName": "John Smith",
              "department": "Computer Science",
              "university": "Erasmus University",
              "isMustCourse": false,
              "credit": "3",
              "electiveName": "Software Engineering Elective",
              "courseApprovalRef": "456789",
              "syllabusRef": "987654"
            }
          ],
          "approvalId": "9876543210"
        }
      )
    });
    console.log(res);
    return res; // TODO: fetch from backend
  }

  sendStudentCourses();
  const getStudentCourses = () => {
    const courses = fetchStudentCourses();
    const studentCourses = [];
    return;
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