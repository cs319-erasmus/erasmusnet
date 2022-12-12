import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header, Footer,  Landing, SignUp, Login } from './components'

const App = () => {
  return (
    <AnimatePresence>
      <div className='w-screen min-h-screen m-auto flex flex-col'>
        <Header />

        <main className='p-8 max-w-screen-2xl mx-auto flex'>
          <Routes>
            <Route path='/*' element={<Landing />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </AnimatePresence>
  )
}

export default App