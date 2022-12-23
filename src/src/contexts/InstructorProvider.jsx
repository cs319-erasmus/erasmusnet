import React from 'react'
import { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthProvider';

function InstructorProvider() {
    const [courseList, setCourseList] = useState([]);
    const { getToken, user } = useAuth();

    const fetchCourseList = async () => {
        const token = await getToken();
        const res = await fetch(`${API}/api/course-approval`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                instructorId: user?.uid,
            },
        }).then(res => res.json());
        setCourseList(res);
    }

    const sendCourse = async (course) => {
        const token = await getToken();
        const res = await fetch(`${API}/api/course`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                instructorId: user?.uid,
            },
            body: JSON.stringify({
                courseDTO: course,
            }),
        }).then(res => res.json());
    }

    const value = {
        courseList,
        sendCourse,
    }
}

export default InstructorProvider