import React from "react";
import { motion } from "framer-motion";
import { useAdmin } from "../../../contexts/AdminProvider";
import { useEffect } from "react";

const studentSteps = {
    0: "Application",
    1: "Placement",
    2: "Apply to Placed University",
    3: "Further Documents",
    4: "Pre-Approval Form",
    5: "Complete"
}

const coordinatorSteps = {
    0: "Application",
    1: "Placement",
    2: "Apply to Placed University",
    3: "Further Documents",
    4: "Pre-Approval Form",
    5: "Complete"
}

export default function Admin()
{
    const { admin, updateStage, sendExcel } = useAdmin();
    const [excel, setExcel] = React.useState(null);

    const calendarInfo = [
        { Task: "Application", Date: "2022-10-01" },
        { Task: "Placement", Date: "2022-11-01" },
        { Task: "Apply to Placed University", Date: "2022-12-01" },
        { Task: "Further Documents", Date: "2023-01-01" },
        { Task: "Pre-Approval Form", Date: "2023-02-01" },
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

    const handleStudentStep = (e) => {
        e.preventDefault();
        updateStage("student", e.target.value);
    }

    const handleCoordinatorStep = (e) => {
        e.preventDefault();
        updateStage("coordinator", e.target.value);
    }

    const generateOptions = (steps) => {
        let options = [];
        for (let i = 0; i < Object.keys(steps).length; i++) {
            options.push(<option value={i}>{steps[i]}</option>);
        }
        return options;
    }

    const handleExcel = (e) => {
        e.preventDefault();
        if (excel === null)
            alert("Please upload an excel file");
        else
        sendExcel(excel);
    }

    const handleExcelChange = (e) => {
        e.preventDefault();
        console.log("File: " + e.target.files[0] + " " + e.target.files[0].name)
        console.log(JSON.stringify(e.target.files[0]))
        if (e.target.files[0].type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
            setExcel(e.target.files[0]);

        }
        else {
            alert("Please upload an excel file");
        }
    }

    return(
        admin &&
        <div id = "Admin" class= "ml-12 mr-12 mt-20 mb-32 xl:mx-auto max-w-screen-xl justify-center items-center">
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <div className="mb-8">
                        <label className='text-2xl mb-7 font-bold text-indigo-900'>Student Status</label>
                        <select id="studentOptions"
                            onChange={handleStudentStep}
                            defaultValue={admin.studentStage}
                        className="mt-4 bg-gray-50 border border-indigo-900 text-gray-900 text-lg rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5">
                            {generateOptions(studentSteps)}
                        </select>
                    </div>

                    <div className="mb-8">
                        <label className='text-2xl mb-7 font-bold text-indigo-900'>Coordinator Status</label>
                        <select id="coordinatorOptions"
                        defaultValue={admin.coordinatorStage}
                        onChange={handleCoordinatorStep}
                        class="mt-4 bg-gray-50 border border-indigo-900 text-gray-900 text-lg rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5">
                            {generateOptions(coordinatorSteps)}
                        </select>
                    </div>

                    <div>
                        <label className='text-2xl mb-7 font-bold text-indigo-900'>Excel File</label>
                        <div className="mt-4">
                        <input type="file" id="file_input" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={e => handleExcelChange(e)}/>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={handleExcel}
                            class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white">
                            Submit
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