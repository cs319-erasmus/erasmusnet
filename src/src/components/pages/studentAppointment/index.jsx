import React from "react";
import { useAppointment } from "../../../contexts/AppointmentProvider";
import { useAuth } from "../../../contexts/AuthProvider";

function StudentAppointment() {
  const coordinators = ["Can Alkan", "Aysegul Dundar"];
  const { appointments, sendAppointment } = useAppointment();
  const { user } = useAuth();

  const coordinatorOptions = coordinators.map((coordinator) => {
    return <option>{coordinator}</option>;
  });
  const userAppointments = [{ Task: "Can Alkan", Date: "2021-05-01" }];
  const appointmentItems = userAppointments.map((appointment) => {
    return (
      <tr>
        <td>{appointment.Task}</td>
        <td>{appointment.Date}</td>
      </tr>
    );
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      appointmentId: Math.floor(Math.random() * 100000),
      hostName: "Can Alkan",
      hostId: "123456789",
      studentName: user.name,
      studentUid: user.uid,
      appointmentDescription: document.getElementById("Appointment-Text").value,
      hostApproved: false,
      studentApproved: false,
    }

    sendAppointment(appointment);
  }



  return (
    <div
      id="Appointments"
      className="grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-24 grid-rows-2 grid-cols-1 gap-6 h-screen max-w-screen-xl mx-auto"
    >
      <div id="Appointments-Create">
        <div id="Pick-Contact">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-bold">Coordinator</span>
            </label>
            <select className="select select-bordered mt-2">
              <option disabled selected>
                Coordinator
              </option>
              {coordinatorOptions}
            </select>
          </div>
        </div>
        <div id="Appointment-Message" className="flex-col flex h-[60%] mt-6">
          <label className="label text-xl font-bold">Message</label>
          <textarea
            id="Appointment-Text"
            placeholder="Your message with your availability."
            class="mt-1 p-4 w-full rounded-xl h-full align-top border-gray-200 border-2 shadow-sm sm:text-sm"
          />
          <div className="">
            <button className="btn btn-primary mt-6" onClick={e => handleSubmit(e)}>Submit Request</button>
          </div>
        </div>
      </div>
      <div id="Appointments-List">
        <div id="Appointment-Header-Text" className="text-xl font-bold">
          Appointments
        </div>

        <div
          id="Appointment-Items"
          class=" p-4 my-auto overflow-auto mt-1 sm:mt-2 lg:mt-4 max-h-[80%] border-2 rounded-2xl"
        >
          <table class="min-w-full divide-y-2 max-h-full text-sm">
            <tbody class="divide-y divide-gray-200">{appointmentItems}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentAppointment;
