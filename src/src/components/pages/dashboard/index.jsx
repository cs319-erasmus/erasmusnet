import React, {useEffect, useState} from "react";
import { useAuth } from "../../../contexts/AuthProvider";

function Dashboard() {
  const { getToken, getUser } = useAuth();
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

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
  const userType = 0;
  const coordinatorInfo = {
    name: "Can Alkan",
    email: "calkan@cs.bilkent.edu.tr",
  };
  const calendarInfo = [
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
    { Task: "New Appointment Request", Date: "2021-05-01" },
  ];
  const stage = 3;

  const studentSteps = [
    "Application",
    "Placement",
    "Apply to Placed University",
    "Further Documents",
    "Pre-Approval Form",
    "Complete",
  ];
  const coordinatorSteps = [
    "Student Applications",
    "Placement",
    "Student Applications to Placed Universities",
    "Further Documents",
    "Pre-Approval Forms",
    "Complete",
  ];
  
  let stepItems;
  if (userType === 0) {
    stepItems = studentSteps.map((step, idx) => {
      let css = "step" + (idx < stage ? " step-primary" : " ");
      return <li className={css}>{step}</li>;
    });
  } else {
    stepItems = coordinatorSteps.map((step, idx) => {
      let css = "step" + (idx < stage ? " step-primary" : " ");
      return <li className={css}>{step}</li>;
    });
  }

  const calendarItems = calendarInfo.map((item, idx) => {
    return (
      <tr>
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
      <text className="text-4xl font-bold tracking-wider text-gray-500 border-b-4 pb-4 mt-8 w-full">
        Welcome, {user.displayName}
      </text>
      <text className="text-2xl font-bold tracking-wider text-gray-500 mt-4">
        token: {token}
      </text>
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
              Contact Your Coordinator
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
