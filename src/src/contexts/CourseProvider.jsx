import React, { createContext, useContext, useState } from 'react'

export const CourseContext = createContext()

const useCourse = () => {
    return useContext(CourseContext);
}

function CourseProvider({children}) {
  const [course, setCourse] = useState(null);
    

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

export default CourseProvider