import { Outlet, Navigate } from "react-router-dom";
import { NavigationMenu } from "../../components";
import { useAuth } from "../../contexts/AuthProvider";
import { useEffect, useState } from "react";
import { Error } from "../../components";

function UserRoutes() {
  const { getUser } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = getUser();
    setUser(user);
  }, [getUser]);

  return (
    user === null ? (
      <Error />
    ) :
    user &&
    <>
      <NavigationMenu />
      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
}

export { UserRoutes };
