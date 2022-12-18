import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const bilkentList = [
  {
    code: "CS 465",
    name: "Computer Graphics",
    coordinator: "Uğur Güdükbay",
    deparment: "CS",
    type: "Technical Elective",
    credits: "6.5",
  },
];

const erasmusList = [
  {
    code: "1TD388",
    name: "Computer Graphics",
    syllabus: "1TD388_Syllabus.pdf",
    credits: "6.5",
    school: "Uppsala University",
  },
];

function InstructorViewCourse() {
  const [bilkentCourses, setBilkentCourses] = useState(bilkentList);
  const [erasmusCourses, setErasmusCourses] = useState(erasmusList);

  const [bilkentTable, setBilkentTable] = useState(null);
  const [erasmusTable, setErasmusTable] = useState(null);

  useEffect(() => {
    const bilkentItems = bilkentCourses.map((course) => {
      return (
        <div>
          <div class="grid gap-12 md:grid-cols-3">
            <label
              for="code"
              class="block mb-2 text-ml font-bold text-indigo-900"
            >
              Course Code
            </label>
            <label
              for="name"
              class="block mb-2 text-ml font-bold text-indigo-900"
            >
              Course Name
            </label>
            <label
              for="coordinator"
              class="block mb-2 text-ml font-bold text-indigo-900"
            >
              Course Coordinator
            </label>
          </div>
          <div class="grid gap-12 mb-6 grid-cols-3">
            <label
              type="text"
              id="courseCode"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.code}
            </label>
            <label
              type="text"
              id="courseName"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.name}
            </label>
            <label
              type="text"
              id="courseCoordinator"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.coordinator}
            </label>
          </div>

          <div class="grid gap-12 md:grid-cols-3">
            <label
              for="type"
              class="block mb-2 text-ml font-bold text-indigo-900"
            >
              Course Type
            </label>
            <label
              for="ects"
              class="block mb-2 text-ml font-bold text-indigo-900"
            >
              ECTS Credits
            </label>
          </div>
          <div class="grid gap-12 mb-6 grid-cols-3">
            <label
              type="text"
              id="courseType"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.type}
            </label>
            <label
              type="text"
              id="courseCredits"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.credits}
            </label>
          </div>
        </div>
      );
    });

    setBilkentTable(bilkentItems);
  }, [bilkentCourses]);

  useEffect(() => {
    const erasmusItems = erasmusCourses.map((course) => {
      return (
        <div>
          <div class="grid gap-12 md:grid-cols-3">
            <label
              for="code"
              class="block mb-2 text-ml font-bold text-indigo-900"
            >
              Course Code
            </label>
            <label
              for="name"
              class="block mb-2 text-ml font-bold text-indigo-900"
            >
              Course Name
            </label>
            <label
              for="coordinator"
              class="block mb-2 text-ml font-bold text-indigo-900"
            >
              School
            </label>
          </div>
          <div class="grid gap-12 mb-6 grid-cols-3">
            <label
              type="text"
              id="courseName"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.code}
            </label>
            <label
              type="text"
              id="courseName"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.name}
            </label>
            <label
              type="text"
              id="courseSchool"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.school}
            </label>
          </div>

          <div class="grid gap-12 md:grid-cols-3">
            <label
              for="type"
              class="block mb-2 text-ml font-bold text-indigo-900"
            >
              Course Syllabus
            </label>
            <label
              for="ects"
              class="block mb-2 text-ml font-bold text-indigo-900"
            >
              ECTS Credits
            </label>
          </div>
          <div class="grid gap-12 mb-6 grid-cols-3">
            <label
              type="file"
              id="file_input"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.syllabus}
            </label>
            <label
              type="text"
              id="courseCredits"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.credits}
            </label>
          </div>
        </div>
      );
    });
    setErasmusTable(erasmusItems);
  }, [erasmusCourses]);

  return (
    <div className="max-w-screen-2xl mx-auto justify-center">
      <div
        id="StudentCourseApproval"
        class="ml-12 mr-12 mt-8 mb-32 flex flex-col"
      >
        <div className="text-2xl mb-7 font-bold text-indigo-900">
          <h1>Course Approval Request</h1>
          <hr class="my-4 h-0.5 bg-indigo-900 border-0"></hr>
        </div>
        <div className="mx-12">
          <h1 className="text-xl mb-4 font-bold text-indigo-900">Bilkent</h1>
          {bilkentTable}
        </div>
        <div className="m-12">
          <h1 className="text-xl mb-4 font-bold text-indigo-900">Erasmus</h1>
          {erasmusTable}
        </div>

        <div className="">
          <motion.button
            whileTap={{ scale: 0.9 }}
            class="bg-indigo-900 border-2 font-semibold border-indigo-900 p-2 px-12 ml-12 rounded-lg hover:bg-transparent hover:text-indigo-900 text-white"
          >
            Approve
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            class="bg-indigo-900 border-2 font-semibold border-indigo-900 p-2 px-12 ml-12 rounded-lg hover:bg-transparent hover:text-indigo-900 text-white"
          >
            Reject
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default InstructorViewCourse;
