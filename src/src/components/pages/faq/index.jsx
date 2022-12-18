import React from "react";
import { motion } from "framer-motion";
import { faqItems } from "../../../mockData/faq";

function index() {
  const items = faqItems;

  const generateFaq = () => faqItems.map((item, index) => {
      return (
      <details class="group [&_summary::-webkit-details-marker]:hidden mt-8 bg-gray-200 rounded-lg">
        <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer">
          <h2 class="font-medium select-none w-screen mx-auto text-gray-900">
            {item["question"]}
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
            {item["answer"]}
          </p>
          <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => window.location.href = "mailto:calkan@cs.bilkent.edu.tr"}
              className="bg-indigo-700 select-none hover:bg-indigo-900 flex duration-100 mr-12 transition-all ease-in-out text-white px-12 py-2 rounded-xl"
              >Contact Us</motion.button>
        </div>
      </details>
      )
  })

  console.log(generateFaq());

  return (
    <div class="flex flex-col px-4 sm:px-6 lg:px-8  mx-auto max-w-screen-2xl">
      <label className="text-4xl font-bold tracking-wider text-gray-500 border-b-4 pb-4 mt-8 w-full">
        Knowledge Library
      </label>
      {generateFaq()}
    </div>
  );
}

export default index;
