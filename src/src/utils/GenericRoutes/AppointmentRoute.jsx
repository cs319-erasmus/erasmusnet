import { AppointmentProvider } from "../../contexts/AppointmentProvider";
import React from 'react'
import { Outlet } from "react-router-dom";

function AppointmentRoute() {
  return (
    <AppointmentProvider>
        <Outlet />
    </AppointmentProvider>
  )
}

export default AppointmentRoute