import React from 'react'
import { createContext } from 'react';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from './AuthProvider';

export const StageContext = createContext()

export const useStage = () => {
    return useContext(StageContext);
}

function StageProvider({children}) {
  const [stage, setStage] = useState(-1);
  const { getUser } = useAuth();
  const { user } = useAuth();
  const API = process.env.REACT_APP_API_URL;


  const fetchStage = async () => {
    console.log("API: " + API)
    const res = await fetch(API + "/api/stage", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => res.json());
    const user = getUser();
    if (user === null) {
        setStage(-1);
    } else {
      if (user.role === "student") {
        setStage(parseInt(res.studentStage));
      } else {
        setStage(parseInt(res.coordinatorStage));
      }
    }
  }

  useEffect(() => {
    fetchStage();
  }, [user]);

  const value = { stage };

  return <StageContext.Provider value={value}>{children}</StageContext.Provider>;
}

export {StageProvider}