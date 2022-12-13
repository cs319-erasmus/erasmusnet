import React from 'react'
import { default as Hero } from './hero'
import { default as Contact } from './contact'
import { default as About } from './about'

function index() {
  return (
    <div className='flex flex-col max-w-screen-2xl gap-6 m-auto mx-auto'>
        <div className='flex items-center justify-center m-auto'>
            <Hero />
        </div>
        <About />
        <Contact />
    </div>
  )
}

export default index

