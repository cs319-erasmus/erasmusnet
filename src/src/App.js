import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header, Hero, CreateItem, SignUp, Login } from './components'

const App = () => {
  return (
    <AnimatePresence>
      <div className='w-screen h-auto flex flex-col'>
        <Header />

        <main className='p-8 w-full flex'>
          <Routes>
            <Route path='/*' element={<Hero />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App