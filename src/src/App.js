import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Header,
  Footer,
  Landing,
  SignUp,
  Login,
  FAQ,
  Appointments,
  Dashboard,
  Profile,
  Placement,
  Error,
  StudentCourseApproval,
  StudentCourseRequest,
  CoordinatorApproval,
  StudentPlacement,
  StudentViewRequest,
  InstructorView,
  InstructorApprove,
  PastApplications,
  CoordinatorAppointment,
  UploadPreapproval,
  Debug,
  DocumentTemplates,
} from "./components";
import { AuthProvider } from "./contexts/AuthProvider";
import { StudentProvider } from "./contexts/StudentProvider";
import { StageProvider } from "./contexts/StageProvider";
import { UserRoutes } from "./utils/UserRoutes";
import { StudentRoutes } from "./utils/StudentRoutes";

const App = () => {
  const [debug, setDebug] = React.useState(false);

  React.useEffect(() => {
    if (process.env.REACT_APP_DEBUG === "true") {
      setDebug(true);
    }
  }, []);
  
  return (
      <AnimatePresence>
        <div className="w-screen m-auto flex flex-col">
          <AuthProvider>

          <StageProvider>
              <StudentProvider>
          {debug && <Debug />}
            <Header />
            <main className="px-1 lg:px-0">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error />} />
                <Route element={<UserRoutes />}>
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/appointments" element={<Appointments />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />


                  
                  <Route
                    path="/studentCourseApproval"
                    element={<StudentCourseApproval />}
                  />
                  <Route path="/request" element={<StudentCourseRequest />} />
                  <Route
                    path="/coordinatorAppointmentApproval"
                    element={<CoordinatorApproval />}
                  />
                  <Route
                    path="/studentPlacement"
                    element={<StudentPlacement />}
                  />
                  <Route
                    path="/student-view-request"
                    element={<StudentViewRequest />}
                  />
                  <Route
                    path="/instructor-view-course"
                    element={<InstructorView />}
                  />
                  <Route
                    path="/instructor-approve"
                    element={<InstructorApprove />}
                  />
                  <Route
                    path="/coordinator-appointment"
                    element={<CoordinatorAppointment />}
                  />
                <Route
                      path="/past"
                      element={<PastApplications />}
                    />
                  <Route 
                    path='/uploadpreapproval'
                    element={<UploadPreapproval />}
                    />
                  <Route
                    path="/docs"
                    element={<DocumentTemplates />}
                    />
                </Route>

                <Route element={<StudentRoutes />}>
                    <Route path="/placement" element={<Placement />} />
                  </Route>

              </Routes>
            </main>
            <Footer />
              </StudentProvider>
              </StageProvider>
          </AuthProvider>
        </div>
      </AnimatePresence>
  );
};

export default App;
