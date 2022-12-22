import React from 'react'
import { createContext } from 'react';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from './AuthProvider';

export const AdminContext = createContext()

export const useAdmin = () => {
    return useContext(AdminContext);
}

function AdminProvider({children}) {
  const [admin, setAdmin] = useState(null);
  const { getUser } = useAuth();
  const { user } = useAuth();
  const API = process.env.REACT_APP_API_URL;


  const fetchStage = async () => {
    const res = await fetch(API + "/api/stage", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => res.json());
    const user = getUser();
    if (user) {
        setAdmin({studentStage: res.studentStage, coordinatorStage: res.coordinatorStage, excel: null});
    }
    }

    const updateStage = async (role, val) => {
        if (role === "student") {
            setAdmin(admin => {admin.studentStage = val; return admin});
        } else {
            setAdmin(admin => {admin.coordinatorStage = val; return admin});
        }
    const res = await fetch(API + "/api/stage", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + user?.token,
        },
        body: JSON.stringify({
            studentStage: admin.studentStage,
            coordinatorStage: admin.coordinatorStage,
        }),
    });
}

  const sendExcel = async (file) => {
    let formData = new FormData();
    formData.append("file", file);
    const res = await fetch(API + "/api/foo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: formData,
    });
    console.log(res);
    return res;
    }

  useEffect(() => {
    if (user?.role && user?.role !== "admin") {
        return;
    }
    
    fetchStage();
  }, [user]);

  const value = { admin, updateStage, sendExcel };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export {AdminProvider}