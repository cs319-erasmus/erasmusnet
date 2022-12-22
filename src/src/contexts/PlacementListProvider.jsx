import React, { useContext, createContext, useState } from 'react'
import { useEffect } from 'react';
import { useAuth } from './AuthProvider';

export const PlacementListContext = createContext();

export const usePlacementList = () => {
    return useContext(PlacementListContext);
}

function PlacementListProvider({children}) {
  const [placementList, setPlacementList] = useState(null);
  const { getToken } = useAuth();
  const { user } = useAuth();
  const API = process.env.REACT_APP_API_URL;

  const fetchPlacementList = async () => {
    const token = await getToken();

    const res = await fetch(API + "/api/placement/all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => res.json());
    console.log("Placement List" + JSON.stringify(res));
    setPlacementList(res);
  }

  useEffect(() => {
    fetchPlacementList();
    }, [user]);

  const value = {placementList};

  return <PlacementListContext.Provider value={value}>{children}</PlacementListContext.Provider>;
}

export {PlacementListProvider}