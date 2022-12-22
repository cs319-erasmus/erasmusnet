import React, {useContext, createContext, useState} from 'react'
import {useAuth} from './AuthProvider';

export const PlacementContext = createContext()

export const usePlacement = () => {
    return useContext(PlacementContext);
}

function PlacementProvider({children}) {
  const [placement, setPlacement] = useState(null);
  const { getToken } = useAuth();

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

  const sendPlacement = async (uid, studentId) => {
  }
  
  const value = { placement };
  return <PlacementContext.Provider value={{placement}}>{children}</PlacementContext.Provider>;
}

export { PlacementProvider }