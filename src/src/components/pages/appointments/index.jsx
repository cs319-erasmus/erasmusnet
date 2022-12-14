import React from "react";

function index() {
  const coordinators = ["Can Alkan", "Aysegul Dundar"];
  const coordinatorOptions = coordinators.map((coordinator) => {
    return <option>{coordinator}</option>;
  });

  return (
    <div id="Appointments" className="flex flex-col h-screen max-w-screen-xl mx-auto">
      <div id="Pick-Contact">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Coordinator</span>
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
        <label className="label">Message</label>
        <textarea
    id="Appointment-Text"
    placeholder="Your message with your availability."
    class="mt-1 p-4 sm:w-[50%] rounded-xl h-full align-top border-gray-200 border-2 shadow-sm sm:text-sm"
  />
        <div className="">

        <button className="btn btn-primary mt-6">Submit Request</button>
        </div>

      </div>
      
    </div>
  );
}

export default index;
