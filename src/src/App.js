import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header, Footer,  Landing, SignUp, Login, FAQ, Appointments } from './components'

const App = () => {
  return (
    <AnimatePresence>
      <div className='w-screen min-h-screen m-auto flex flex-col'>
        <Header />

        <main className='p-8 flex'>
          <Routes>
            <Route path='/*' element={<Landing />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/appointments' element={<Appointments />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </AnimatePresence>
  )
}

export default App