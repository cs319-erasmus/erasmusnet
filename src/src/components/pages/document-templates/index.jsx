import React from 'react';
import { motion } from "framer-motion";

export default function index(){
    return(
        <section class="bg-white max-w-screen-xl mx-auto">
            <div className='text-2xl m-12 font-bold text-indigo-900 place-items-center'>
                <h1>Document Templates</h1>
                <hr class="my-4 h-0.5 bg-indigo-900 border-0"></hr>
            </div>
            <div class = "grid gap-6 mb-6 md:grid-cols-1 place-items-center">
                <div>
                    <div class="grid grid-rows-3  gap-6">
                        <div className='row-span-1 flex items-start justify-center'>
                            <textfield type="text" class="w-full bg-gray-50 border border-gray-300 text-indigo-900 text-xl font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
                                <div class ="grid gap-6 mb-6 md:grid-cols-2 place-items-center">
                                    <h1>Statement of purpose</h1>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white justify-center">
                                        Download
                                    </motion.button>
                                </div>
                            </textfield>
                        </div>
                        <div className='row-span-1 flex items-start justify-center'>
                            <textfield type="text" class="w-full bg-gray-50 border border-gray-300 text-indigo-900 text-xl font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
                                <div class ="grid gap-6 mb-6 md:grid-cols-2 place-items-center">
                                    <h1>CV</h1>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white justify-center">
                                        Download
                                    </motion.button>
                                </div>
                            </textfield>
                        </div>
                        <div className='row-span-1 flex items-start justify-center'>
                            <textfield type="text" class="w-full bg-gray-50 border border-gray-300 text-indigo-900 text-xl font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
                                <div class ="grid gap-6 mb-6 md:grid-cols-2 place-items-center">
                                    <h1>Preapproval form</h1>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white justify-center">
                                        Download
                                    </motion.button>
                                </div>
                            </textfield>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}