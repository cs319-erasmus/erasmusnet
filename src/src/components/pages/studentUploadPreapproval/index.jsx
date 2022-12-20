import React from 'react';
import { motion } from "framer-motion";

export default function index(){
    return(
        <section class="bg-white max-w-screen-xl mx-auto">
            <div className='text-2xl m-12 font-bold text-indigo-900 place-items-center'>
                <h1>Upload Preapproval Form</h1>
            </div>
            <div class = "grid gap-6 mb-6 md:grid-cols-1 place-items-center">
                <div>
                    <div class="mb-3 w-96">
                        <label for="formFile" class="block mb-2 text-sm font-medium text-indigo-900">Upload preapproval form</label>
                            <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-indigo-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-indigo-900 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
                    </div>
                </div>
                <div>
                    <div class="mb-3 w-96">
                        <label for="formFile" class="block mb-2 text-sm font-medium text-indigo-900">Upload banking details</label>
                            <input type="file" id="formFile"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-indigo-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-indigo-900 focus:bg-white focus:border-blue-600 focus:outline-none">
                            </input>
                    </div>
                </div>
            </div>
            <div class="grid gap-12 mb-6 md:grid-cols-2">
                <div className='flex items-center justify-start'>
                    <motion.button
                    whileTap={{ scale: 0.9 }}
                    class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                    Back
                    </motion.button>
                </div>
                <div class="grid grid-rows-2 grid-flow-col gap-6">
                    <div className='row-span-1 flex items-start justify-end '>
                        <motion.button
                        whileTap={{ scale: 0.9 }}
                        class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                        Save
                        </motion.button>
                    </div>
                    <div className='row-span-1 flex items-center justify-end'>
                        <motion.button
                        whileTap={{ scale: 0.9 }}
                        class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                        Submit
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}