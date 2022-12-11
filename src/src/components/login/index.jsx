import React from 'react'

export default function login() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 sm:py-6">
        <div className="px-4 text-center sm:px-0">
          <p className="text-sm font-semibold text-indigo-600 uppercase">
            Sign in to your account
          </p>
          <h2 className="mt-1 text-4xl font-extrabold text-gray-900 sm:mt-5 sm:text-6xl sm:tracking-tight lg:text-6xl">
            Welcome back
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Don't have an account?{' '}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </a>
          </p>
        </div>

        <div className="w-full max-w-md mt-8 space-y-8">
          //email address field
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          //password field
          <div className="space-y-1">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
          // remember me checkbox
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
