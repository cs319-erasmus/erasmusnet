import React from "react";

const student1 = {
    name: "John M. Doe",
    studentID: "22220000",
    email: "johndoe@123.com",
    department: "CS",
    placement: "Bilkent University"
}
const student2 = {
    name: "Jane Doe",
    studentID: "22220001",
    email: "janedoe@123.com",
    department: "CS",
    placement: "Bilkent University"
}
const student3 = {
    name: "Jack Doe",
    studentID: "22220002",
    email: "jackdoe@123.com",
    department: "CS",
    placement: "Bilkent University"
}

function placement() 
{
    return(
        <div class= "ml-12 mr-12 mt-20 mb-32">
            <div className='text-2xl mb-7 font-bold text-indigo-900'>
                <h1>Placement List</h1>
            </div>
            
            <div class="flex flex-col space-y-4">
                <select id="countries" class="bg-gray-50 border border-indigo-900 text-gray-900 text-base rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5">
                    <option selected>{ student1.name }</option>
                    <option disabled value="email">Email: { student1.email }</option>
                    <option disabled value="idNo">Student ID: { student1.studentID }</option>
                    <option disabled value="department">Department: { student1.department }</option>
                    <option disabled value="placement">Placement: { student1.placement }</option>
                </select>
                <select id="countries" class="bg-gray-50 border border-indigo-900 text-gray-900 text-base rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5">
                    <option selected>{ student2.name }</option>
                    <option disabled value="email">Email: { student2.email }</option>
                    <option disabled value="idNo">Student ID: { student2.studentID }</option>
                    <option disabled value="department">Department: { student2.department }</option>
                    <option disabled value="placement">Placement: { student2.placement }</option>
                </select>
                <select id="countries" class="bg-gray-50 border border-indigo-900 text-gray-900 text-base rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5">
                    <option selected>{ student3.name }</option>
                    <option disabled value="email">Email: { student3.email }</option>
                    <option disabled value="idNo">Student ID: { student3.studentID }</option>
                    <option disabled value="department">Department: { student3.department }</option>
                    <option disabled value="placement">Placement: { student3.placement }</option>
                </select>
            </div>
        </div>
    );
}

export default placement;