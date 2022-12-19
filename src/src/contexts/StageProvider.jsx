import React from 'react'
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

export const StageContext = createContext()

export const useStage = () => {
    return useContext(StageContext);
}

function StageProvider({children}) {
  const [stage, setStage] = useState(0);
  const API = process.env.REACT_APP_API;

  const fetchStage = async () => {
    const res = await fetch(API + "/auth/stage", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    setStage(data.stage);
    }

    const value = { stage };

  return <StageContext.Provider value={value}>{children}</StageContext.Provider>;
}

export {StageProvider}