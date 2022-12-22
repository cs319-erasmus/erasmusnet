import React from "react";

const applications = [
    { semester: "Fall Semester 2023",
    success: "Successful" },
    { semester: "Fall Semester 2022",
    success: "Unsuccessful" },
    { semester: "Fall Semester 2021",
    success: "Unsuccessful" }
]

export default function pastApplications()
{
    const applicationItems = applications.map(( application ) => {
        return(
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <textfield type="text" class="w-full bg-gray-50 border border-gray-300 text-indigo-900 text-xl font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
                    { application.semester }
                </textfield>
                <textfield type="text" class="w-full bg-gray-50 border border-gray-300 text-gray-700 text-ml font-bold text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
                    { application.success }
                </textfield>
            </div>
        );
    });

    return(
        <div id="PastApplications" class= "ml-12 mr-12 mt-20 mb-32 max-w-screen-2xl">
            <div className='text-2xl mb-7 font-bold text-indigo-900'>
                <h1>Past Applications</h1>
                <hr class="my-4 h-0.5 bg-indigo-900 border-0"></hr>
            </div>
            <div>
                { applicationItems }
            </div>
        </div>
    );
}