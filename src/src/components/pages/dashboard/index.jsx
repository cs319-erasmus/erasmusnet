import React, {useEffect, useState} from "react";
import { useAuth } from "../../../contexts/AuthProvider";
import { calendarInfo } from "./Calendar.js";
import { studentSteps } from "./Student.js";
import { coordinatorSteps } from "./Coordinator.js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Dashboard() {
  const [step, setStep] = useState(3);
  const { getToken, getUser } = useAuth();
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [stepItems, setStepItems] = useState(null);
  const [userType, setUserType] = useState(1);
  const [nextSteps, setNextSteps] = useState(null);
  const navigate = useNavigate();

  //set token using getToken function in useAuth
  useEffect(() => {
    async function fetchToken() {
      const token = await getToken();
      setToken(token);
    }
    fetchToken();
  }, [getToken]);

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser();
      setUser(user);
    }
    fetchUser();
  }, [getUser]);

  const indicatorTextCss = "text-2xl tracking-wider text-gray-500";
  const coordinatorInfo = {
    name: "Can Alkan",
    email: "calkan@cs.bilkent.edu.tr",
  };

  useEffect(() => {
    const stepList = userType === 0 ? studentSteps : coordinatorSteps;
      setStepItems(() => stepList.map((item, idx) => {
        let css = "step" + (idx <= step ? " step-primary" : " ");
        return <li key={idx} className={css}>{item}</li>;
      }));
  }, [userType, step]);

  useEffect(() => {

  }, [stepItems]);

  useEffect(() => {
    if (userType === 0) {
      const nextStepList = () => {
        if (step === 0) {
          return <label>Complete Application Using Regular Website</label>
        } else if (step === 1) {
          return (
          <motion.button
          className="bg-indigo-700 hover:bg-indigo-900 rounded-2xl p-4 text-white"
          onClick={() => navigate("/studentPlacement")}
          >View Your Placement</motion.button>)
        } else if (step === 2) {
          return <label>Apply to Host University</label>
        } else if (step === 3) {
          return (
            <motion.button
            className="bg-indigo-700 hover:bg-indigo-900 rounded-2xl p-4 text-white"
            onClick={() => navigate("/studentCourseApproval")}
            >Course Approvals</motion.button>)
        } else if (step === 4) {
          return (
            <motion.button
            className="bg-indigo-700 hover:bg-indigo-900 rounded-2xl p-4 text-white"
            onClick={() => navigate("/uploadPreApproval")}
            >Upload Pre-Approval</motion.button>)
        } else if (step === 5) {
          return <label>No Further Action Necessary</label>
        }
      }
      setNextSteps(nextStepList())
    } else {
      const nextStepList = () => {
        if (step === 0) {
          return <label>View For Student Applications</label>
        } else if (step === 1) {
          return (
            <motion.button
            className="bg-indigo-700 hover:bg-indigo-900 rounded-2xl p-4 text-white"
            onClick={() => navigate("/placement")}
            >Start Placement Process</motion.button>)
        } else if (step === 2) {
          return <label>Send Application Links</label>
        } else if (step === 3) {
          return (
            <label>Wait for instructors to approve courses</label>
          )
        } else if (step === 4) {
          return (
            <motion.button
            className="bg-indigo-700 hover:bg-indigo-900 rounded-2xl p-4 text-white"
            onClick={() => navigate("/studentPlacement")}
            >Approve Pre-Approvals</motion.button>)
        } else if (step === 5) {
          return <label>No Further Action Necessary</label>
        }
      }
      setNextSteps(nextStepList())
    }
  }, [userType, step]);



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

  return ( user &&
    <div
      id="Dashboard"
      className="flex flex-col px-4 sm:px-6 lg:px-8  mx-auto max-w-screen-2xl"
    >
      <label className="text-4xl font-bold tracking-wider text-gray-500 border-b-4 pb-4 mt-8 w-full">
        Welcome, {user.displayName}
      </label>
      <div id="Status" className="mt-6 md:mt-12">
        <div id="Status-Text" className={indicatorTextCss}>
          Status
        </div>
        <ul className="steps steps-vertical sm:steps-horizontal w-full grow p-6 mt-1 sm:mt-2 lg:mt-4 border-2 rounded-2xl">
          {stepItems}
        </ul>
      </div>
      <div id="Info" className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-0 grid-cols-0 my-4 sm:my-6 lg:my-8">
        <div id="Info-Left" className="grid grid-rows-2 justify-start">
          <div id="Next-Step" className="flex-col">
            <div id="Next-Step-Text" className={indicatorTextCss}>
              Next Steps
            </div>
            <div
              id="Next-Step-Info"
              className="border-2 lg:text-xl text-sm mt-1 sm:mt-2 lg:mt-4 rounded-2xl p-6"
            >
              {nextSteps}
            </div>
          </div>
          <div id="Coordinator-Info" className="flex-col">
            <div id="Coordinator-Info-Text" className={indicatorTextCss}>
              Your Coordinator
            </div>
            <div
              id="Coordinator-Info-Info"
              className="border-2 p-4 rounded-2xl mt-1 sm:mt-2 lg:mt-4"
            >
              <div
                id="Coordinator-Name"
                className="justify-center lg:text-xl text-sm items-center mx-auto"
              >
                {coordinatorInfo.name}
              </div>
              <div id="Coordinator-Email" className="py-4">
                <a className="lg:text-xl text-sm" href={"mailto:" + coordinatorInfo.email}>
                  {coordinatorInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="Info-Calendar" className="mt-8 lg:mt-0">
          <div id="Calendar-Text" className={indicatorTextCss}>
            Calendar
          </div>

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

export default Dashboard;
