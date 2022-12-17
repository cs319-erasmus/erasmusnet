import React from 'react';
import { motion } from "framer-motion";

const university = "Uppsala University";

export default function studentPlacement()
{
    return(
        <div id="StudentPlacement" class= "ml-12 mr-12 mt-20 mb-32 max-w-screen-2xl">
            <div className='text-2xl mb-7 font-bold text-indigo-900 '>
                <h1>Your Placement</h1>
                <hr class="my-4 h-0.5 bg-indigo-900 border-0"></hr>
            </div>
            <div className='space-y-12'>
                <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-lg font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                    { university }
                </button>
                <div className='grid place-items-center space-y-8'>
                    <motion.button
                            whileTap={{ scale: 0.9 }}
                            class="bg-transparent border-2 font-semibold border-green-600 text-green-600 p-2 px-20 rounded-lg hover:bg-green-600 hover:text-white">
                        Accept
                    </motion.button>
                    <motion.button
                            whileTap={{ scale: 0.9 }}
                            class="bg-transparent border-2 font-semibold border-red-600 text-red-600 p-2 px-20 rounded-lg hover:bg-red-600 hover:text-white">
                    Decline
                    </motion.button>
                </div>
                <div className="absolute bottom-8 left-12">
                    <motion.button whileTap={{ scale: 0.9 }}
                        class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                        Back
                    </motion.button> 
                </div>
            </div>
        </div>
    );
}