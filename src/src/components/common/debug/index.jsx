import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../contexts/AuthProvider'

function Debug() {
    const { user } = useAuth();
    console.log(user);

  return (
    user === null ? <div>User Null</div> :
    <pre>{JSON.stringify(user, null, 4)}</pre>
  )
}

export default Debug