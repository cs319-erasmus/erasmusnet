import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useStudent } from "../../../contexts/StudentProvider";

function StudentCreateRequest() {
  const [bilkentCourses, setBilkentCourses] = useState([]);
  const [erasmusCourses, setErasmusCourses] = useState([]);
  const bilkentCode = useRef();
  const bilkentName = useRef();
  const bilkentCoordinator = useRef();
  const bilkentType = useRef();
  const bilkentCredits = useRef();
  const erasmusCode = useRef();
  const erasmusName = useRef();
  const erasmusSyllabus = useRef();
  const erasmusCredits = useRef();
  const erasmusSchool = useRef();
  const { sendStudentCourses } = useStudent();

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
              >{course.code}</label>
            <label
              type="text"
              id="courseName"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >{course.name}</label>
            <label
              type="text"
              id="courseCoordinator"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >{course.coordinator}</label>
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
              >{course.type}</label>
            <label
              type="text"
              id="courseCredits"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >{course.credits}</label>
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
            >{course.code}</label>
            <label
              type="text"
              id="courseName"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >{course.name}</label>
            <label
              type="text"
              id="courseSchool"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >{course.school}</label>
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
              >{course.syllabus}</label>
            <label
              type="text"
              id="courseCredits"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >{course.credits}</label>
          </div>
        </div>
      );
    });
    setErasmusTable(erasmusItems);
  }, [erasmusCourses]);

  const addBilkentCourse = (e) => {
    e.preventDefault();
    if (bilkentCode.current.value === "" || bilkentName.current.value === "" || bilkentCoordinator.current.value === "" || bilkentType.current.value === "" || bilkentCredits.current.value === "") {
      alert("Please fill in all the fields");
      return;
    }
    setBilkentCourses(() => [
      ...bilkentCourses,
      {
        courseCode: bilkentCode.current.value,
        courseName: bilkentName.current.value,
        instructorName: bilkentCoordinator.current.value,
        electiveName: bilkentType.current.value,
        credit: bilkentCredits.current.value,
        department: "Computer Engineering",
        university: "Bilkent University",
        isMustCourse: bilkentType.current.value === "Must",
        courseApprovalRef: "",
        syllabusRef: "",
      },
    ]);
  };

  const addErasmusCourse = (e) => {
    e.preventDefault();
    if (erasmusCode.current.value === "" || erasmusName.current.value === "" || erasmusSyllabus.current.value === "" || erasmusCredits.current.value === "" || erasmusSchool.current.value === "") {
        alert("Please fill in all the fields");
        return;
    }
    setErasmusCourses(() => [
      ...erasmusCourses,
      {
        courseCode: erasmusCode.current.value,
        courseName: erasmusName.current.value,
        syllabusRef: erasmusSyllabus.current.value,
        credit: erasmusCredits.current.value,
        university: erasmusSchool.current.value,
        isMustCourse: false,
        courseApprovalRef: "",
        syllabusRef: "",
        electiveName: "",
        instructorName: "",
        department: "Computer Science",
      },
    ]);
  };

  const submit = (e) => {
    e.preventDefault();
    if (bilkentCourses.length === 0 && erasmusCourses.length === 0) {
      alert("Please add courses to your request");
      return;
    }
    
    sendStudentCourses(bilkentCourses, erasmusCourses);
  };

  return (
    <div id="StudentCourseApproval" class="ml-12 mr-12 mt-20 mb-32 flex flex-col">
      <div className="text-2xl mb-7 font-bold text-indigo-900">
        <h1>Create Request</h1>
        <hr class="my-4 h-0.5 bg-indigo-900 border-0"></hr>
      </div>
      <div className="m-12">
        <h1 className="text-xl mb-4 font-bold text-indigo-900">Bilkent</h1>
        <div className="flex-col    ">
            {bilkentTable}
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
            <input
              type="text"
              id="courseCode"
              ref={bilkentCode}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={"Course Code"}
            />
            <input
              type="text"
              id="courseName"
              ref={bilkentName}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={"Course Name"}
            />
            <input
              type="text"
              id="courseCoordinator"
              ref={bilkentCoordinator}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={"School"}
              required
            />
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
              Bilkent Credits
            </label>
          </div>
          <div class="grid gap-12 mb-6 grid-cols-3">
            <input
              type="text"
              id="courseType"
              ref={bilkentType}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={"Course Type"}
              required
            />
            <input
              type="text"
              id="courseCredits"
              ref={bilkentCredits}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={"Bilkent Credits"}
              required
            />
          </div>
        </div>
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={(e) => addBilkentCourse(e)}
                class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white"
                >
                Add a New Course
                </motion.button>

        </div>
      </div>
      <div className="m-12">
        <h1 className="text-xl mb-4 font-bold text-indigo-900">Erasmus</h1>
        <div className="flex-col    ">
            {erasmusTable}
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
            <input
              type="text"
              id="courseName"
              ref={erasmusCode}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={"Course Code"}
              required
            />
            <input
              type="text"
              id="courseName"
              ref={erasmusName}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={"Course Name"}
              required
            />
            <input
              type="text"
              id="courseName"
              ref={erasmusSchool}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={"School"}
              required
            />
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
            <input
              type="file"
              id="file_input"
              ref={erasmusSyllabus}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={"Course Syllabus"}
              required
            />
            <input
              type="text"
              id="courseName"
              ref={erasmusCredits}
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={"ECTS Credits"}
              required
            />
          </div>
        </div>
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={(e) => addErasmusCourse(e)}
                class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white"
                >
                Add a New Course
                </motion.button>

        </div>
      </div>
    
      <div className="">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={(e) => submit(e)}
          class="bg-indigo-900 border-2 font-semibold border-indigo-900 p-2 px-12 ml-12 rounded-lg hover:bg-transparent hover:text-indigo-900 text-white"
        >
          Submit
        </motion.button>
      </div>
    </div>
  );
}

export default StudentCreateRequest;
