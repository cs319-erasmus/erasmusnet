import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function StudentViewRequest() {
  const location = useLocation();
  const [bilkentCourses, setBilkentCourses] = useState(location.state.course.bilkentCourses);
  const [erasmusCourses, setErasmusCourses] = useState(location.state.course.erasmusCourses);

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
              {course.courseCode}
            </label>
            <label
              type="text"
              id="courseName"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.courseName}
            </label>
            <label
              type="text"
              id="courseCoordinator"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.instructorName}
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
              {course.electiveName}
            </label>
            <label
              type="text"
              id="courseCredits"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.credit}
            </label>
          </div>
        </div>
      );
    });

    setBilkentTable(bilkentItems);
  }, [bilkentCourses]);

  useEffect(() => {
    if (!erasmusCourses) {
      return;
    }
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
              {course.courseCode}
            </label>
            <label
              type="text"
              id="courseName"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.courseName}
            </label>
            <label
              type="text"
              id="courseSchool"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.university}
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
              {course.syllabusRef}
            </label>
            <label
              type="text"
              id="courseCredits"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {course.credit}
            </label>
          </div>
        </div>
      );
    });
    setErasmusTable(erasmusItems);
  }, [erasmusCourses]);

  return (
    <div
      id="StudentCourseApproval"
      class="ml-12 mr-12 mt-20 mb-32 flex flex-col"
    >
      <div className="text-2xl mb-7 font-bold text-indigo-900">
        <h1>Course Approval Request</h1>
        <hr class="my-4 h-0.5 bg-indigo-900 border-0"></hr>
      </div>
      <div className="m-12">
        <h1 className="text-xl mb-4 font-bold text-indigo-900">Bilkent</h1>
          {bilkentTable}
      </div>
      <div className="m-12">
        <h1 className="text-xl mb-4 font-bold text-indigo-900">Erasmus</h1>
          {erasmusTable}
      </div>
    </div>
  );
}

export default StudentViewRequest;
