import { Outlet, Navigate } from "react-router-dom";
import { NavigationMenu } from "../../components";
import { useStudent } from "../../contexts/StudentProvider";
import { useEffect, useState } from "react";
import { Error } from "../../components";

function StudentRoutes() {
  const { student } = useStudent();

  return (
    student &&
    <>
      <NavigationMenu />
      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
}

export { StudentRoutes };
