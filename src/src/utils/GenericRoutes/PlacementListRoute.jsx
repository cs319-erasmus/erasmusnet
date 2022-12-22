import { PlacementListProvider } from "../../contexts/PlacementListProvider";
import React from 'react'
import { Outlet } from "react-router-dom";

function PlacementListRoute() {
  return (
    <PlacementListProvider>
        <Outlet />
    </PlacementListProvider>
  )
}

export default PlacementListRoute