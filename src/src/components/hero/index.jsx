import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    const heroImg = require('../../assets/hero.png');
    return (
        <div className='grid grid-cols-2 gap-2 h-full justify-center py-40'>
            <div className='px-2 py-1 flex-1 flex flex-col items-start justify-center gap-6'>
                <p className='font-extrabold text-6xl tracking-wide text-indigo-1400 leading-relaxed'>
                    Apply to Erasmus
                    <br />
                    Quickly, Efficiently
                </p>

                <div>
                    <p className='text-indigo-1000 tracking-wide text-xl leading-loose'>
                        Forget endless hours of writing e-mails to coordinators and instructors. <br />
                        Forget the stress of trying to gather every single document. <br />
                        See everything about your application in one place. <br />
                        Only worry about how good your time will be abroad. <br />
                    </p>
                    <div className='grid grid-cols-2 w-full gap-8 py-12'>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                         className='font-bold bg-indigo-900 text-white p-2 rounded-lg hover:bg-transparent hover:border-2 hover:border-indigo-900 hover:text-indigo-900'>Get Started</motion.button>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                        className='font-bold bg-transparent border-2 border-indigo-900 text-indigo-900 p-2 rounded-lg hover:bg-indigo-900 hover:text-white'>Learn More</motion.button>
                    </div>

                </div>
            </div>
            <img
                src={heroImg}
                alt='Students'
                className='flex flex-1 my-auto'/>
        </div>
    )
}

export default Hero