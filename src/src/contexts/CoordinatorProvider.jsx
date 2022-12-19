import React, { createContext, useContext, useState } from 'react'

export const CoordinatorContext = createContext()

const useCoordinator = () => {
    return useContext(CoordinatorContext);
}

function CoordinatorProvider({children}) {
  const [coordinator, setCoordinator] = useState(null);
    

  return <CoordinatorContext.Provider value={value}>{children}</CoordinatorContext.Provider>;
}

export default CoordinatorProvider