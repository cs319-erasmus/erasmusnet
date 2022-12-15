import React from "react";
import { motion } from "framer-motion";

const bilkentCourses = [
    { code: "CS461",
    name: "Computer Graphics",
    coordinator: "Ugur Gudukbay",
    type: "Technical Elective",
    credits: "6.5"
    }
]

const erasmusCourses = [
    { code: "1TD388",
    name: "Computer Graphics",
    syllabus: "1TD388_Syllabus.pdf",
    credits: "6.5",
    school: "Uppsala University"
    }
]

function studentCreateRequest()
{
    const bilkentItems = bilkentCourses.map(( course ) => {
        return(
            <div>
                <div className='text-xl mb-4 font-bold text-indigo-900'>
                    <h1>Bilkent</h1>
                </div>
                <div class="grid gap-12 md:grid-cols-3">
                    <label for="code" class="block mb-2 text-ml font-bold text-indigo-900">Course Code</label>
                    <label for="name" class="block mb-2 text-ml font-bold text-indigo-900">Course Name</label>
                    <label for="coordinator" class="block mb-2 text-ml font-bold text-indigo-900">Course Coordinator</label>                    
                </div>
                <div class="grid gap-12 mb-6 grid-cols-3">
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.code }
                    </button>
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.name }
                    </button>
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.coordinator }
                    </button>
                </div>

                <div class="grid gap-12 md:grid-cols-3">
                    <label for="type" class="block mb-2 text-ml font-bold text-indigo-900">Syllabus</label>
                    <label for="ects" class="block mb-2 text-ml font-bold text-indigo-900">ECTS Credits</label>                                     
                </div>
                <div class="grid gap-12 mb-6 grid-cols-3">
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.syllabus }
                    </button>
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.credits }
                    </button>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                        Add a New Course
                    </motion.button>                  
                </div>
            </div>
        );
    });
    const erasmusItems = erasmusCourses.map(( course ) => {
        return(
            <div>
                <div className='text-xl mb-4 font-bold text-indigo-900'>
                    <h1>Erasmus</h1>
                </div>
                <div class="grid gap-12 md:grid-cols-3">
                    <label for="code" class="block mb-2 text-ml font-bold text-indigo-900">Course Code</label>
                    <label for="name" class="block mb-2 text-ml font-bold text-indigo-900">Course Name</label>
                    <label for="coordinator" class="block mb-2 text-ml font-bold text-indigo-900">School</label>                    
                </div>
                <div class="grid gap-12 mb-6 grid-cols-3">
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.code }
                    </button>
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.name }
                    </button>
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.school }
                    </button>
                </div>

                <div class="grid gap-12 md:grid-cols-3">
                    <label for="type" class="block mb-2 text-ml font-bold text-indigo-900">Course Type</label>
                    <label for="ects" class="block mb-2 text-ml font-bold text-indigo-900">ECTS Credits</label>                                     
                </div>
                <div class="grid gap-12 mb-6 grid-cols-3">
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.syllabus }
                    </button>
                    <button type="button" class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        { course.credits }
                    </button>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                        Add a New Course
                    </motion.button>                  
                </div>
            </div>
        );
    });

    return(
        <div id = "StudentCourseApproval" class= "ml-12 mr-12 mt-20 mb-32">
            <div className='text-2xl mb-7 font-bold text-indigo-900'>
                <h1>Create Request</h1>
                <hr class="my-4 h-0.5 bg-indigo-900 border-0"></hr>
            </div>
            <div className='m-12'>
                { bilkentItems }
                { erasmusItems }
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

export default studentCreateRequest;