import React from 'react'

function InstructorProvider() {
  const [instructor, setInstructor] = useState(null);
  const [courses, setCourses] = useState(null);

  return (
    <div>InstructorProvider</div>
  )
}

export default InstructorProvider