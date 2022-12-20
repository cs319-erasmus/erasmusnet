import React from 'react'

function AppointmentsProvider() {
    const [appointments, setAppointments] = useState(null);

    const fetchAppointments = async () => {
        const token = await getToken();
    }
    
  return (
    <div>AppointmentsProvider</div>
  )
}

export default AppointmentsProvider