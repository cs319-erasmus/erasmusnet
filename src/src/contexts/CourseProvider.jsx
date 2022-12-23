import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react';
import { useAuth } from "./AuthProvider"

export const CourseContext = createContext()

export const useCourse = () => {
    return useContext(CourseContext);
}

function CourseProvider({children}) {
  const [courses, setCourses] = useState(null);
  const [statuses, setStatuses] = useState(null);
  const [instructorCourses, setInstructorCourses] = useState(null);
  const [instructorStatuses, setInstructorStatuses] = useState(null);
  const { getToken } = useAuth();
  const { getUser } = useAuth();
  const { user } = useAuth();
  const API = process.env.REACT_APP_API_URL;

  const fetchCourses = async () => {
    const token = await getToken();
    const res = await fetch(API + "/api/course", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        "uid": user.uid,
      },
    }).then(res => 
      res.json().then(res => Object.values(res))
    );

    
    async function fetchCourseStatus() {
    res.forEach(async (course) => {
      const statusRes = await fetch(API + "/api/course-approval/status", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
          "approvalId": course.approvalId,
          "instructorId": course.instructorId,
        },
      }).then(resp => resp.json());
      setStatuses((statuses) => ({...statuses, [course.approvalId]: statusRes}));
    })};

    await fetchCourseStatus();

    setCourses(() => (res));
  }

  // status boolean
  const sendCourseApprovalStatus = async (uid, approvalId, status) => {
  }

  

  const sendStudentCourses = async (bilkent, erasmus, syllabus) => {
    const syllabusData = new FormData();
    syllabusData.append("file", syllabus);
    const token = await getToken();
    const approvalID = "" + Math.floor(Math.random() * 100000);
    const resCreate = await fetch(API + "/api/course/package", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        "uid": user.uid,
      },
      body: JSON.stringify(
        {
          "bilkentCourses": bilkent,
          "erasmusCourses": erasmus,
          "approvalId": approvalID,
          "instructorId": "123",
        }
      )
    });

    const resSyllabus = await fetch(API + "/api/course/syllabus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        "uid": user.uid,
        "approvalId": approvalID,
      },
      body: syllabusData,
    }).then(resSyllabus => resSyllabus.json());

    const resApproval = await fetch(API + "/api/course-approval", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        "instructorId": "123",
      },
      body: JSON.stringify(
        {
          studentUid: user.uid,
          approvalId: approvalID,
          studentName: user.displayName,
          isApproved: -1,
          instructorId: "123",
        }
      )
    });

    console.log("Syllabus: " + JSON.stringify(resSyllabus));
    
    return resCreate;
  }
  
  const fetchInstructorCourses = async () => {
    const token = await getToken();
    const res = await fetch(API + "/api/course-approval", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        "instructorId": "123",
      },
    }).then(res => res.json());

    setInstructorCourses(() => (Object.values(res)));
  }


  useEffect(() => {
    if (user && user.role === "student")
      fetchCourses();
    else if (user && user.role === "instructor") {
      fetchInstructorCourses();
    }
  }, [user])

  const value = {
    courses,
    sendStudentCourses,
    statuses,
    instructorCourses,
  }


  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

export {CourseProvider}