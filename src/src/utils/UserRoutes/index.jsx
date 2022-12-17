import { Outlet, Navigate } from "react-router-dom"
import { NavigationMenu } from "../../components";
import { useAuth } from "../../contexts/AuthProvider";

function UserRoutes() {
  const { user } = useAuth();

  return (
    user === null ? ( <Navigate to="/login" /> ) : (
      <>
        <NavigationMenu />
        <div className="mt-4">
          <Outlet  />
        </div>
      </>
    )
  );
}

export { UserRoutes };