import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthProvider';

export const AppointmentContext = createContext();

export const useAppointment = () => {
    return useContext(AppointmentContext);
}

function AppointmentProvider({children}) {
    const [appointments, setAppointments] = useState(null);
    const API = process.env.REACT_APP_API_URL;
    const { getToken } = useAuth();
    const { user } = useAuth();

    const fetchAppointments = async () => {
        const token = await getToken();

        if (!token || !user || !user.role) {
            return;
        }

        console.log("Token: " + token + " Role: " + user.role);

        const res = await fetch(`${API}/api/appointment/${user?.role}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
                "uid": user?.uid,
            },
        }).then(res => res.json());

        console.log("Appointments: " + JSON.stringify(res));
        setAppointments(() => res);
    }

    const sendAppointment = async (appointment) => {
        const token = await getToken();
        const res = await fetch(`${API}/api/appointment/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify({
                appointmentDTO: appointment,
            }),
        }).then(res => res.json());
    }

    useEffect(() => {
        fetchAppointments();
    }, [user]);

    const value = {
        appointments,
        sendAppointment,
    }
    
    return <AppointmentContext.Provider value={value}>{children}</AppointmentContext.Provider>
}

export {AppointmentProvider}