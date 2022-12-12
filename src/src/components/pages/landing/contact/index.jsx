import React from "react";
import { motion } from "framer-motion";

function index() {
  return (
    <section
      id="contact"
    class="bg-gray-200 rounded-3xl">
      <div class="mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <p class="text-lg">
              Contact us about any questions you may have about the process of
              application.
            </p>

            <div class="mt-8">
              <a href="tel:+90 (312) 290 1065" class="text-2xl font-bold text-indigo-900">
                +90 (312) 290 1065
              </a>

              <address class="mt-2 not-italic">
                Bilkent Üniversitesi Öğrenci İşleri Müdürlüğü, Merkez Kampüs
                06800 Bilkent, Ankara TÜRKİYE
              </address>
            </div>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" class="space-y-4">
              <div>
                <label class="sr-only" for="name">
                  Name
                </label>
                <input
                  class="w-full rounded-lg border-gray-200 border-2 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    Email
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 border-2 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 border-2 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">
                  Message
                </label>
                <textarea
                  class="w-full rounded-lg border-gray-200 border-2 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  class="inline-flex w-full items-center justify-center rounded-lg bg-indigo-900 px-5 py-3 text-white sm:w-auto"
                >
                  <span class="font-medium"> Send Enquiry </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
