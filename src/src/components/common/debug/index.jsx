import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../contexts/AuthProvider'

function Debug() {
    const { user } = useAuth();
    const [debugInfo, setDebugInfo] = useState(null);
    const {getRole} = useAuth();
    useEffect(() => {
      setDebugInfo(user === null ? <div>User Null</div> :
      <pre className='overflow-auto'>{JSON.stringify(user, null, 4)}</pre>)

      console.log("Getting Role" + getRole())
    }, [user, getRole]);

  return (
    debugInfo
  )
}

export default Debug