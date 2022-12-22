import React from 'react'

function InstructorProvider() {
  const [instructor, setInstructor] = useState(null);
  const [courses, setCourses] = useState(null);

  const fetchInstructor = async () => {
    const token = await getToken();
  }

  return (
    <div>InstructorProvider</div>
  )
}

export default InstructorProvider