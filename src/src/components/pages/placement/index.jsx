import React from "react";
import { usePlacementList } from "../../../contexts/PlacementListProvider";

const students = [ 
    { name: "John M. Doe",
    studentID: "22220000",
    email: "johndoe@123.com",
    department: "CS",
    placement: "Bilkent University"} ,
    { name: "Jane Doe",
    studentID: "22220001",
    email: "janedoe@123.com",
    department: "CS",
    placement: "Bilkent University"}, 
    { name: "Jane Doe",
    studentID: "22220001",
    email: "janedoe@123.com",
    department: "CS",
    placement: "Bilkent University" } ]

function Placement() 
{
    const { placementList } = usePlacementList();

    
    const placementItems = students.map((student) => {
        return (
        <select id="placements" class="bg-gray-50 border border-indigo-900 text-gray-900 text-base rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5">
            <option selected>{ student.name }</option>
            <option disabled value="email">Email: { student.email }</option>
            <option disabled value="idNo">Student ID: { student.studentID }</option>
            <option disabled value="department">Department: { student.department }</option>
            <option disabled value="placement">Placement: { student.placement }</option>
        </select>
        );
      });

    return(
        <div id = "Placements" class= "ml-12 mr-12 mt-20 mb-32">
            <div className='text-2xl mb-7 font-bold text-indigo-900'>
                <h1>Placement List</h1>
            </div>
            
            <div class="flex flex-col space-y-4">
                { placementItems }
            </div>
        </div>
    );
}

export default Placement;