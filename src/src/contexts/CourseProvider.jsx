import React, { createContext, useContext, useState } from 'react'
import { useAuth } from "./AuthProvider"

export const CourseContext = createContext()

const useCourse = () => {
    return useContext(CourseContext);
}

function CourseProvider({children}) {
  const [courses, setCourses] = useState(null);
  const { getToken } = useAuth();
  const { getUser } = useAuth();
  const API = process.env.REACT_APP_API_URL;
    
  sendCourses = async (uid, studentId) => {
  }

  const fetchCourses = async () => {
    const token = await getToken();
    const uid = await getUser().uid;

    const res = await fetch(API + "/api/course", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        "uid": uid,
      },
    }).then(res => res.json());
    
    return res["linkObjects"];
  }

  // status boolean
  const sendCourseApprovalStatus = async (uid, approvalId, status) => {
  }

  // const sendStudentCourses = async (bilkent, erasmus) => {
  //   const token = await getToken();

  //   const res = await fetch(API + "/api/course", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": "Bearer " + token,
  //     },
  //     body: JSON.stringify(
  //       {
  //         "uid": "12345",
  //         "bilkentCourses": bilkent,
  //         "erasmusCourses": erasmus,
  //         "approvalId": Math.floor(Math.random() * 100000),
  //       }
  //     )
  //   });
  //   return res;
  // }


  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

export default CourseProvider