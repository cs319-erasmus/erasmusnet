import { CourseProvider } from "../../contexts/CourseProvider";
import React from 'react'
import { Outlet } from "react-router-dom";

function CourseRoute() {
  return (
    <CourseProvider>
        <Outlet />
    </CourseProvider>
  )
}

export default CourseRoute