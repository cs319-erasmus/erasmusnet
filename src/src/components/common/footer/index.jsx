import React from "react";
import { Logo } from "../..";
import { useNavigate } from "react-router-dom";

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function Footer() {
  const navigate = useNavigate();
    const about = () => {
        navigate("/", { replace: true });
        document.getElementById("about").scrollIntoView();
    };
    const contact = () => {
        navigate("/", { replace: true });
        document.getElementById("contact").scrollIntoView();
    };
  return (
    <footer aria-label="Site Footer" class="bg-gray-100 w-full">
      <div class="relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
          <div
            class="inline-block rounded-full cursor-pointer bg-indigo-900 p-2 text-white shadow transition hover:bg-pink-500 sm:p-3 lg:p-4"
            onClick={backToTop}
          >
            <span class="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div class="lg:flex lg:items-end lg:justify-between">
          <div>
            <div class="flex justify-center text-indigo-900 lg:justify-start">
              <Logo />
            </div>

            <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Apply to Erasmus <br />
              Quickly, Efficiently
            </p>
          </div>

          <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
            <ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              <li>
                <a
                  class="text-gray-700 transition hover:text-gray-700/75"
                  href="#" onClick={about}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  class="text-gray-700 transition hover:text-gray-700/75"
                  href="#" onClick={contact}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
