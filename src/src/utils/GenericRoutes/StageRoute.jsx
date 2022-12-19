import { StageProvider } from "../../contexts/StageProvider";
import React from 'react'
import { Outlet } from "react-router-dom";

function StageRoute() {
  return (
    <StageProvider>
        <Outlet />
    </StageProvider>
  )
}

export default StageRoute