import React from "react";
import { motion } from "framer-motion";

export default function admin()
{
    const studentSteps = [
        "Application",
        "Placement",
        "Apply to Placed University",
        "Further Documents",
        "Pre-Approval Form",
        "Complete"
    ]
    
    const coordinatorSteps = [
        "Student Applications",
        "Placements",
        "Student Applications to Placed Universities",
        "Request Documents",
        "Approve Courses",
        "Complete"
    ]

    const calendarInfo = [
        { Task: "New Appointment Request", Date: "2021-05-01" },
        { Task: "New Appointment Request", Date: "2021-05-01" },
        { Task: "New Appointment Request", Date: "2021-05-01" },
        { Task: "New Appointment Request", Date: "2021-05-01" },
        { Task: "New Appointment Request", Date: "2021-05-01" },
    ];

    const calendarItems = calendarInfo.map((item, idx) => {
        return (
          <tr key={idx}>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {item.Task}
            </td>
            <td class="whitespace-nowrap justify-end mx-auto px-4 py-2 text-gray-700">
              {item.Date}
            </td>
          </tr>
        );
    });

    return(
        <div id = "Admin" class= "ml-12 mr-12 mt-20 mb-32">
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <div className="mb-8">
                        <label className='text-2xl mb-7 font-bold text-indigo-900'>Student Status</label>
                        <select id="studentOptions" class="mt-4 bg-gray-50 border border-indigo-900 text-gray-900 text-lg rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5">
                            <option selected>{ studentSteps[0] }</option>
                            <option>{studentSteps[1] }</option>
                            <option>{studentSteps[2] }</option>
                            <option>{studentSteps[3] }</option>
                            <option>{studentSteps[4] }</option>
                            <option>{studentSteps[5] }</option>
                        </select>
                    </div>

                    <div className="mb-8">
                        <label className='text-2xl mb-7 font-bold text-indigo-900'>Coordinator Status</label>
                        <select id="coordinatorOptions" class="mt-4 bg-gray-50 border border-indigo-900 text-gray-900 text-lg rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5">
                            <option selected>{ coordinatorSteps[0] }</option>
                            <option>{coordinatorSteps[1] }</option>
                            <option>{coordinatorSteps[2] }</option>
                            <option>{coordinatorSteps[3] }</option>
                            <option>{coordinatorSteps[4] }</option>
                            <option>{coordinatorSteps[5] }</option>
                        </select>
                    </div>

                    <div>
                        <label className='text-2xl mb-7 font-bold text-indigo-900'>Excel File</label>
                        <div className="mt-4">
                        <input type="file" id="file_input"/>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                            Save
                        </motion.button> 
                        </div>
                    </div>
                </div>

                <div>
                    <label className='text-2xl mb-7 font-bold text-indigo-900'>Calendar</label>
                    <div id="Calender-Items" class=" p-4 my-auto overflow-auto mt-1 sm:mt-2 lg:mt-4 max-h-[80%] border-2 rounded-2xl">
                        <table class="min-w-full divide-y-2 max-h-full text-sm">
                            <tbody class="divide-y divide-gray-200">{calendarItems}</tbody>
                        </table>
                    </div>
                </div>   

            </div>
        </div>
    );
}