import React, {useContext, createContext, useState} from 'react'
import {useAuth} from './AuthProvider';

export const PlacementContext = createContext()

export const usePlacement = () => {
    return useContext(PlacementContext);
}

function PlacementProvider({children}) {
  const [placement, setPlacement] = useState(null);
  const { getToken } = useAuth();
  const API = process.env.REACT_APP_API_URL;

  const fetchPlacement = async () => {
    const token = await getToken();
    const res = await fetch(API + "/api/placement", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json());
    console.log("Placement" + JSON.stringify(res));
    setPlacement(res);
  }

  const sendPlacement = async (choice) => {
    const token = await getToken();
    setPlacement(placement => {placement.studentApproved = choice; return placement});
    const res = await fetch(API + "/api/placement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        placementDTO: placement,
      }),
    }).then(res => res.json());
  }
  
  const value = { placement, sendPlacement };
  return <PlacementContext.Provider value={{placement}}>{children}</PlacementContext.Provider>;
}

export { PlacementProvider }