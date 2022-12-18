import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationMenu() {
    const studentItems = {"Dashboard": "/dashboard", "Appointments": "/appointments", "Student Stories": "/stories", "Knowledge Library": "/faq", "Document Templates": "/docs", "Placement Quiz": "/quiz", "Past Applications": "/past"};
    const coordinatorItems = {"Dashboard": "/dashboard", "Student List": "/studentlist", "Placement List": "/placementlist", "Appointment Requests": "/appointmentrequests", "Course Approvals": "/curseapprovals"};
    const navigate = useNavigate();
    const [active, setActive] = React.useState(window.location.pathname);
    const [visible, setVisible] = React.useState(true);
    const [buttons, setButtons] = React.useState();
    const userType = 0;

    useEffect(() => {
        setActive(window.location.pathname);
        if (Object.values(studentItems).includes(window.location.pathname) || Object.values(coordinatorItems).includes(window.location.pathname)) {
            setVisible(true);
        } else {
            setVisible(false);
        }

    }, [window.location.pathname]);

    
    const generateButtons = (items) => Object.entries(items).map((entry, idx) => {
        const [name, val] = entry;
        return <button 
            onClick={() => navigate(val, { replace: true })}
            onMouseEnter={() => setActive(val)}
            onMouseLeave={() => setActive(window.location.pathname)}
            key={idx}
            className={
                "justify-center md:px-6 px-2 md:py-3 2xl:text-base text-xs transition-all ease-in-out delay-50 hover:text-white hover:bg-indigo-700 hover:rounded-full"
                + (active === val ? " bg-indigo-700 rounded-full text-white" : " text-indigo-700")
            }>{name}</button>
    });

    useEffect(() => {
        if (userType === 0) {
            setButtons(generateButtons(studentItems));
        } else {
            setButtons(generateButtons(coordinatorItems));
        }
    }, [active, userType]);

  return (
    visible &&
    <div className='w-screen py-3 justify-center mx-auto border-t-2 border-b-2'>
        <div className='max-w-screen-xl flex justify-center mx-auto'>
            {buttons}
        </div>
    </div>
  )
}

export default NavigationMenu