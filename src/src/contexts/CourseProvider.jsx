import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react';
import { useAuth } from "./AuthProvider"

export const CourseContext = createContext()

export const useCourse = () => {
    return useContext(CourseContext);
}

function CourseProvider({children}) {
  const [courses, setCourses] = useState(null);
  const { getToken } = useAuth();
  const { getUser } = useAuth();
  const { user } = useAuth();
  const API = process.env.REACT_APP_API_URL;
    
  const sendCourses = async (uid, studentId) => {
  }

  const fetchCourses = async () => {
    const token = await getToken();
    const uid = await getUser().uid;
    return await fetch(API + "/api/course", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
    }).then(res => res.json());
  }

  // status boolean
  const sendCourseApprovalStatus = async (uid, approvalId, status) => {
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
          "uid": user.uid,
          "bilkentCourses": bilkent,
          "erasmusCourses": erasmus,
          "approvalId": Math.floor(Math.random() * 100000),
        }
      )
    });
    return res;
  }

  // useEffect(() => {
  //   fetchCourses();
  // }, [user])

  const getCourses = () => {
    if (courses) {
      return courses;
    }

    fetchCourses().then(
      (res) => {
        setCourses(res["linkObjects"]);
        return res["linkObjects"];
      }
    );
  }

  const value = {
    courses,
    getCourses,
    sendStudentCourses,
  }


  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

export {CourseProvider}