import React, { createContext, useContext, useState } from 'react'

export const CoordinatorContext = createContext()

const useCoordinator = () => {
    return useContext(CoordinatorContext);
}

function CoordinatorProvider() {
  const [coordinator, setCoordinator] = useState(null);
    
}

export default CoordinatorProvider