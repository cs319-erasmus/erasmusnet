import React from 'react';
//import { Dropdown } from "@nextui-org/react";
import { motion } from "framer-motion";


const curUser = {
    firstName: "John",
    middleName: "",
    lastName: "Doe",
    dateOfBirth: "01/01/2000",
    nationalID: "10000000000",
    gender: "Male",
    phoneNo: "5XXXXXXXXX",
    email: "johndoe@123.com",
    university: "Bilkent University"
}

export default function profile()
{
    return (
    <div>
        <div className='text-2xl m-12 font-bold text-indigo-900'>
            <h1>Profile</h1>
        </div>
        <div className='m-12'>
            <div class="grid gap-12 mb-6 md:grid-cols-3">
                <div>
                    <label for="firstName" class="block mb-2 text-sm font-medium text-indigo-900">First Name</label>
                    <input type="text" id="firstName" 
                        class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        defaultValue={curUser.firstName} /*onChange={this.handleChange} */required />
                </div>
                <div>
                    <label for="middleName" class="block mb-2 text-sm font-medium text-gray-700">Middle Name</label>
                    <input type="text" id="middleName" 
                    class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    defaultValue={curUser.middleName} />
                </div>
                <div>
                    <label for="lastName" class="block mb-2 text-sm font-medium text-gray-700">Last name</label>
                    <input type="text" id="lastName" 
                    class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    defaultValue={curUser.lastName} required />
                </div>
            </div>

            <div class="grid gap-12 mb-6 md:grid-cols-3">
                <div>
                    <label for="dateOfBirth" class="block mb-2 text-sm font-medium text-gray-700">Date of Birth</label>
                    <input type="date" id="dateOfBirth" 
                        class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        defaultValue={curUser.dateOfBirth} required />
                </div>
                <div>
                    <label for="nationalID" class="block mb-2 text-sm font-medium text-gray-700">National ID Number</label>
                    <input type="text" id="nationalID" maxLength={11} 
                    class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    defaultValue={curUser.nationalID} required />
                </div>
                <div>
                    <label for="gender" class="block mb-2 text-sm font-medium text-gray-700">Gender</label>
                    <input type="text" id="gender" 
                    class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    defaultValue={curUser.gender} required />
                </div>
            </div>

            <div class="grid gap-12 mb-6 md:grid-cols-3">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-700">E-mail Address</label>
                    <input type="text" id="email" 
                        class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        defaultValue={curUser.email} required />
                </div>
                <div>
                    <label for="phoneNo" class="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="text" id="phoneNo" maxLength={10}
                    class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    defaultValue={curUser.phoneNo} required />
                </div>
                <div>
                    <label for="university" class="block mb-2 text-sm font-medium text-gray-700">University</label>
                    <input type="text" id="university" 
                    class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    defaultValue={curUser.university} required />
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white"
                >
                  Save
                </motion.button>
            </div>
        </div>
    </div>
    );
}