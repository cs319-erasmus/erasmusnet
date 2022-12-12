import React from 'react'

function index() {
  return (
    <section
        id="about"
     class="bg-gray-200 rounded-3xl">
  <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-bold sm:text-4xl text-indigo-900">About Us</h2>

      <p class="mt-4 tracking-wide flex leading-loose">
        We know that it is a long and hard process, and we are here to help you. <br />
        Our system is designed to help you with deadlines, and required documents. <br />
        Some of our key features:
      </p>
    </div>

    <div
      class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
    >
      <div class="flex items-start">
        <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold">Structure</h2>

          <p class="mt-1 text-sm">
            We provide a timeline for you to follow, and a checklist of documents so that you don't miss anything
          </p>
        </div>
      </div>

      <div class="flex items-start">
        <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold">Easy to Use</h2>

          <p class="mt-1 text-sm">
            Our UI is intuitive and easy to use, so you can focus on your application.
          </p>
        </div>
      </div>

      <div class="flex items-start">
        <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold">Support</h2>

          <p class="mt-1 text-sm">
            We have excellent resources to help you with your application.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default index