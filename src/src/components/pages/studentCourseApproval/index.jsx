import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCourse } from "../../../contexts/CourseProvider";

export default function StudentCourseApproval() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const { getCourses } = useCourse();
  const [courseItems, setCourseItems] = useState(null);

  useEffect(() => {
    const res = getCourses();
    setCourses(() => res);
  }, [getCourses]);

  useEffect(() => {
    if (courses == null) {
      return;
    }

    const items = courses.map((curCourse, idx) => {
      return (
        <div key={idx}>
          <div class="grid gap-12 mb-6 md:grid-cols-4">
            <button
              type="button"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              disabled
            >
              {curCourse.bilkentCourses[0].courseCode}
            </button>
            <button
              type="button"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              disabled
            >
              {curCourse.erasmusCourses[0].courseCode}
            </button>
            <button
              type="button"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-ml rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              disabled
            >
              {"Approved"}
            </button>
            <motion.button
              whileTap={{ scale: 0.9 }}
                onClick={() => navigate("/student-view-request", { state: { course: curCourse } })}
              class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white"
            >
              View Request
            </motion.button>
          </div>
        </div>
      );
    });
    setCourseItems(items);
  }, [courses]);

  return (
    <div id="StudentCourseApproval" class="max-w-screen-2xl">
      <div className="text-2xl mb-7 font-bold text-indigo-900">
        <h1>Course Approval</h1>
        <hr class="my-4 h-0.5 bg-indigo-900 border-0"></hr>
      </div>
      <div>
        <div class="grid gap-12 ml-3 md:grid-cols-4">
          <label
            for="bilkentCourse"
            class="block mb-2 text-ml font-bold text-indigo-900"
          >
            Bilkent Course
          </label>
          <label
            for="erasmusCourse"
            class="block mb-2 text-ml font-bold text-indigo-900"
          >
            Erasmus Course
          </label>
          <label
            for="status"
            class="block mb-2 text-ml font-bold text-indigo-900"
          >
            Status
          </label>
          <label for="empty"></label>
        </div>
      </div>
      <div className="m-3">
        {courseItems && courseItems}

        <div className="flex items-center justify-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/studentCreateRequest")}
            class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white"
          >
            Create Request
          </motion.button>
        </div>
      </div>
    </div>
  );
}
