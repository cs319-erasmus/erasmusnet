import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const curUser = {
  firstName: "John",
  middleName: "",
  lastName: "Doe",
  dateOfBirth: "01/01/2000",
  nationalID: "10000000000",
  gender: "Male",
  phoneNo: "5XXXXXXXXX",
  email: "johndoe@123.com",
  university: "Bilkent University",
};

export default function Profile() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            setError("");
            setLoading(true);
            await logout();
            navigate("/login", { replace: true });
        } catch (err) {
            console.log(err);
            setError("Failed to log out");
        }

        setLoading(false);
    };

    const handleEdit = async () => {
    };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="text-2xl m-12 font-bold text-indigo-900">
        <h1>Profile</h1>
      </div>
      <div className="m-12">
        <div class="grid gap-12 mb-6 md:grid-cols-3">
          <div>
            <label
              for="firstName"
              class="block mb-2 text-sm font-medium text-indigo-900"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={curUser.firstName}
              /*onChange={this.handleChange} */ required
            />
          </div>
          <div>
            <label
              for="middleName"
              class="block mb-2 text-sm font-medium text-gray-700"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={curUser.middleName}
            />
          </div>
          <div>
            <label
              for="lastName"
              class="block mb-2 text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={curUser.lastName}
              required
            />
          </div>
        </div>

        <div class="grid gap-12 mb-6 md:grid-cols-3">
          <div>
            <label
              for="dateOfBirth"
              class="block mb-2 text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={curUser.dateOfBirth}
              required
            />
          </div>
          <div>
            <label
              for="nationalID"
              class="block mb-2 text-sm font-medium text-gray-700"
            >
              National ID Number
            </label>
            <input
              type="integer"
              id="nationalID"
              maxLength={11}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={curUser.nationalID}
              required
            />
          </div>
          <div>
            <label
              for="gender"
              class="block mb-2 text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <input
              type="text"
              id="gender"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={curUser.gender}
              required
            />
          </div>
        </div>

        <div class="grid gap-12 mb-6 md:grid-cols-3">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-700"
            >
              E-mail Address
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={curUser.email}
              required
            />
          </div>
          <div>
            <label
              for="phoneNo"
              class="block mb-2 text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNo"
              maxLength={10}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={curUser.phoneNo}
              required
            />
          </div>
          <div>
            <label
              for="university"
              class="block mb-2 text-sm font-medium text-gray-700"
            >
              University
            </label>
            <input
              type="text"
              id="university"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={curUser.university}
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div id="buttonGroup" className="flex flex-col space-y-24">
            <motion.button
              whileTap={{ scale: 0.9 }}
              class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white"
            >
              Save
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
                disabled={loading}
                onClick={() => handleLogOut()}
              class="bg-transparent border-2 font-semibold border-red-600 text-red-600 p-2 px-12 rounded-lg hover:bg-red-600 hover:text-white"
            >
              {loading && (
                <svg
                  role="status"
                  class="inline mr-3 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              )}
              {!loading && "Log Out"}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
