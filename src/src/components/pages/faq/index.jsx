import React from "react";
import { motion } from "framer-motion";

function index() {
  return (
    <div class="space-y-4 max-w-screen-xl">
      <details class="group [&_summary::-webkit-details-marker]:hidden bg-gray-50 rounded-lg" open>
        <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer">
          <h2 class="font-medium select-none w-screen mx-auto text-gray-900">
            How to apply?
          </h2>

          <svg
            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <div className="flex flex-1 justify-between items-center">
          <p class="p-6 mt-4 flex items-center gap-6 leading-relaxed text-gray-700">
          Please visit https://app.erasmus.bilkent.edu.tr/ to create your initial application.
          </p>
          <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => window.location.href = "mailto:calkan@cs.bilkent.edu.tr"}
              className="bg-indigo-700 select-none hover:bg-indigo-900 flex ml-auto duration-100 m-4 transition-all ease-in-out text-white px-4 py-2 rounded-xl"
            >Contact Us</motion.button>
        </div>
      </details>
    </div>
  );
}

export default index;
