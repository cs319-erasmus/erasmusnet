import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthProvider"
import { NavigationMenu } from "../../components";

function UserRoutes() {
  const { getUser } = useAuth();
  const user = getUser();

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