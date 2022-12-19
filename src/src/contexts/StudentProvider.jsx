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
  const { user } = useAuth();

  const fetchStudentProfile = async () => {
    const token = await getToken();
    const res = await fetch(API + "/api/student", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "role": "student",
        "uid": user.uid,
      },
    }).then(res => res.json());
    return res; // TODO: fetch from backend
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
        "uid": "12345",
      },
    }).then(res => res.json());
    
    return res["linkObjects"];
  }

  const sendStudentCourses = async (bilkent, erasmus) => {
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
          "bilkentCourses": bilkent,
          "erasmusCourses": erasmus,
          "approvalId": Math.floor(Math.random() * 100000),
        }
      )
    });
    return res;
  }

  const getStudentCourses = async () => {
    const courses = await fetchStudentCourses();
    return courses;
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

  useEffect(() => {
    let studentProfile;
    let studentCourses;
    let studentStage;
    let studentAppointments;

    async function fetchData() {
      studentProfile = await fetchStudentProfile();
      console.log("Here")
      console.log("Student Profile" + studentProfile)
      studentCourses = await getStudentCourses();
      studentStage = await getStudentStage();
      studentAppointments = await getStudentAppointments();
      const student = {
        uid: studentProfile.uid,
        name: studentProfile.name,
        email: studentProfile.email,
        password: studentProfile.password,
        role: "student",
        stage: studentStage,
        courses: studentCourses,
      };
      console.log(student)
      setStudent(student);
    }

    fetchData();
  }, [user]);
  
  const getStudent = () => {
    try {
      return student;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const value = { student, getStudent, sendStudentCourses };

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
}

export { StudentProvider }