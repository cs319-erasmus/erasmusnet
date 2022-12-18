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
StudentViewRequest, StudentCourseApproval,
  StudentCourseRequest,
  CoordinatorApproval,
  StudentPlacement,
  Debug,
} from "./components";
import { AuthProvider } from "./contexts/AuthProvider";
import { UserRoutes } from "./utils/UserRoutes";

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
                  <Route path="/placement" element={<Placement />} />
                  <Route path='/student-view-request' element={<StudentViewRequest />} />
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
                </Route>
              </Routes>
            </main>
            <Footer />
          </AuthProvider>
        </div>
      </AnimatePresence>
  );
};

export default App;
