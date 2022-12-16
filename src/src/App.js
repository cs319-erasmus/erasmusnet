import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header, Footer,  Landing, SignUp, Login, FAQ, Appointments, Dashboard, Profile, Placement, Error, StudentCourseRequest } from './components'
import { AuthProvider } from './contexts/AuthProvider'


const App = () => {
  return (
    <AnimatePresence>
      <div className='w-screen m-auto flex flex-col'>
        <AuthProvider>
        <Header />

        <main className='py-8 px-1 lg:p-8 lg:px-0'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/appointments' element={<Appointments />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/placement' element={<Placement />} />
            <Route path="/request" element={<StudentCourseRequest />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
        </AuthProvider>
      </div>
    </AnimatePresence>
  )
}

export default App