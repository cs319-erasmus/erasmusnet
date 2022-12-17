import { motion } from "framer-motion";
import React from "react";

const student = { 
    name: "John Doe",
    message: "I'd like to schedule a meeting on 01/01/2023."
}

export default function coordinatorApprove()
{
    return(
        <div id="CoordinatorApprove" class= "ml-12 mr-12 mt-20 mb-32 max-w-screen-2xl">
            <div className='text-2xl mb-7 font-bold text-indigo-900'>
                <h1>Approve Appointment</h1>
                <hr class="my-4 h-0.5 bg-indigo-900 border-0"></hr>
            </div>
            <div className="grid grid-rows-2 grid-cols-1">
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <label for="studentName" class="block mb-2 text-ml font-bold text-indigo-900">Student Name</label>
                        <textfield type="text" class="block w-full bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
                            { student.name }
                        </textfield>
                    </div>
                    <div>
                        <label for="dateOfAppointment" class="block mb-2 text-ml font-bold text-indigo-900">Appointment Date</label>
                        <input type="date" id="appointmentDate" 
                            class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                            required />
                    </div>
                    <div>
                        <label for="studentMessage" class="block mb-2 text-ml font-bold text-indigo-900">Student's Message</label>
                        <textfield type="text" class="block w-full bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
                            { student.message }
                        </textfield>
                    </div>
                    <div>
                        <label for="timeOfAppointment" class="block mb-2 text-ml font-bold text-indigo-900">Appointment Time</label>
                        <input type="time" 
                            class="form-control bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                            required />
                    </div>
                    <div id="empty"></div>
                    <div>
                    <label for="message" class="block mb-2 text-ml font-bold text-indigo-900">Message for the Student</label>
                        <textarea id="Appointment-Text" placeholder="Your message with your availability."
                            class="mt-1 p-4 w-full rounded-xl h-full align-top bg-gray-50 border-gray-300 border-2 shadow-sm sm:text-sm"/>
        
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <motion.button
                    whileTap={{ scale: 0.9 }}
                    class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                    Approve
                    </motion.button>
                </div>
            </div>
        </div>
    );
}