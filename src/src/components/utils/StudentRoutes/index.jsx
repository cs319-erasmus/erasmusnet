import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../../../contexts/AuthContext"

function StudentRoutes() {
  const { user } = useAuth();

  return (
    user === null ? ( <Navigate to="/login" /> ) : ( <Outlet /> )
  );
}

export default StudentRoutes