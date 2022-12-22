import { PlacementProvider } from "../../contexts/PlacementProvider";
import React from 'react'
import { Outlet } from "react-router-dom";

function PlacementRoute() {
  return (
    <PlacementProvider>
        <Outlet />
    </PlacementProvider>
  )
}

export default PlacementRoute