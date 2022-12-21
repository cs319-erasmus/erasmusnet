import React, {useContext, createContext, useState} from 'react'

export const PlacementContext = createContext()

export const usePlacement = () => {
    return useContext(PlacementContext);
}

function PlacementProvider({children}) {
  const [placement, setPlacement] = useState(null);

  const fetchPlacement = async () => {
    const token = await getToken();
  }

  const sendPlacement = async (uid, studentId) => {
  }
  
  const value = { placement };
  return <PlacementContext.Provider value={{placement}}>{children}</PlacementContext.Provider>;
}

export { PlacementProvider }