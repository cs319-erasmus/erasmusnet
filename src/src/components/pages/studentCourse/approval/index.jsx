import React from "react";
import { motion } from "framer-motion";

const courses = [
    { bilkent: "CS465",
    erasmus: "1TD388",
    status: "Approved" },
    { bilkent: "CS476",
    erasmus: "1DL311",
    status: "Rejected" }
]

function studentCourseApproval()
{
    const courseItems = courses.map((course) => {
        return(
            <div>
                <div class="grid gap-12 mb-6 md:grid-cols-4">
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.bilkent }
                    </button>
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.erasmus }
                    </button>
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.status }
                    </button>    
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                    View Request
                    </motion.button>                  
                </div>
            </div>
        );
    });
    return(
        <div id = "StudentCourseApproval" class= "ml-12 mr-12 mt-20 mb-32">
            <div className='text-2xl mb-7 font-bold text-indigo-900'>
                <h1>Course Approval</h1>
                <hr class="my-4 h-0.5 bg-indigo-900 border-0"></hr>
            </div>
            <div>
            <div class="grid gap-12 ml-3 md:grid-cols-4">
                    <label for="bilkentCourse" class="block mb-2 text-ml font-bold text-indigo-900">Bilkent Course</label>
                    <label for="erasmusCourse" class="block mb-2 text-ml font-bold text-indigo-900">Erasmus Course</label>
                    <label for="status" class="block mb-2 text-ml font-bold text-indigo-900">Status</label>
                    <label for="empty"></label>
                </div>
            </div>
            <div className='m-3'>
                { courseItems }

                <div className='flex items-center justify-center'>
                    <motion.button
                    whileTap={{ scale: 0.9 }}
                    class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white"
                    >
                    Create Request
                    </motion.button>   
                </div> 
            </div>

            <div className="absolute bottom-8 left-12">
                <motion.button whileTap={{ scale: 0.9 }}
                    class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                    Back
                </motion.button> 
            </div>
            <div className="absolute bottom-8 right-12">
                <motion.button whileTap={{ scale: 0.9 }}
                    class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                    Next
                </motion.button> 
            </div>
        </div>
    );
}

export default studentCourseApproval;