import { Outlet, Navigate } from "react-router-dom";
import { NavigationMenu } from "../../components";
import { useStudent } from "../../contexts/StudentProvider";
import { useEffect, useState } from "react";

function StudentRoutes() {
  return (
    <>
      <NavigationMenu />
      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
}

export { StudentRoutes };
