import React from 'react'
import { useNavigate } from 'react-router-dom';

function NavigationMenu() {
    const studentItems = [["Dashboard", "/dashboard"], ["Student Stories", "/stories"], ["Knowledge Library", "/faq"], ["Document Templates", "/docs"], ["Placement Quiz", "/quiz"], ["Past Applications", "/past"]];
    const coordinatorItems = [["Dashboard", "/dashboard"], ["Student List", "/studentlist"], ["Placement List", "/placementlist"], ["Appointment Requests", "/appointmentrequests"], ["Course Approvals", "/curseapprovals"]];
    const navigate = useNavigate();
    const [active, setActive] = React.useState(window.location.pathname);
    const userType = 0;

    const generateButtons = (list) => list.map((item, idx) => {
        return <button 
            onClick={() => navigate(item[1], { replace: true })}
            onMouseEnter={() => setActive(item[1])}
            onMouseLeave={() => setActive(window.location.pathname)}
            className={
                "justify-center md:px-6 px-2 py-3 lg:text-base text-xs transition-all ease-in-out delay-50 hover:text-white hover:bg-indigo-700 hover:rounded-full"
                + (active === item[1] ? " bg-indigo-700 rounded-full text-white" : " text-indigo-700")
            }>{item[0]}</button>
    });
  return (
    <div className='w-screen py-3 justify-center mx-auto border-t-2 border-b-2'>
        <div className='max-w-screen-xl flex justify-center mx-auto'>
            {userType === 0 ? generateButtons(studentItems) : generateButtons(coordinatorItems)}
        </div>
    </div>
  )
}

export default NavigationMenu