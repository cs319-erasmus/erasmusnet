import React, { useState, useRef } from "react";
import { Logo } from "../..";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";

export default function SignUp() {
  const heroImg = require("../../../assets/hero.png");
  const navigate = useNavigate();
  const firstRef = useRef();
  const lastRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();

  if (user !== null) {
    navigate("/dashboard", { replace: true });
  }
  
  const login = () => {
    navigate("/login", { replace: true });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      if (passwordRef.current.value !== passwordConfRef.current.value) {
        return; 
      }
      const res = await signup(firstRef.current.value , lastRef.current.value, emailRef.current.value, passwordRef.current.value);
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err);
      setError("Failed to signup");
    }

    setLoading(false);
  };

  return (
    <section class="bg-white max-w-screen-xl mt-8 mx-auto">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside class="relative block lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Students"
            src={heroImg}
            class="absolute hidden lg:block inset-0 lg:h-full w-full object-cover z-0"
          />
        </aside>

        <main
          aria-label="Main"
          class="flex items-center flex-col justify-center px-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <Logo className="text-3xl pb-4" />
          <div class="max-w-xl lg:max-w-3xl border-2 p-4 rounded-xl">
            <div class="mt-8 grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="FirstName"
                  class="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  ref={firstRef}
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border-2 p-2 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="LastName"
                  class="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  ref={lastRef}
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border-2 p-2 shadow-sm"
                />
              </div>

              <div class="col-span-6">
                <label
                  for="Email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  ref={emailRef}
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border-2 p-2 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  ref={passwordRef}
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border-2 p-2 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="PasswordConfirmation"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  ref={passwordConfRef}
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border-2 p-2 shadow-sm"
                />
              </div>

              <div class="col-span-6">
                <label for="TermsAccept" class="flex gap-4">
                  <input
                    type="checkbox"
                    id="TermsAccept"
                    name="terms_accept"
                    class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />
                  <div class="col-span-6">
                    <p class="text-sm text-gray-500">
                      I agree to the{" "}
                      <a href="#" class="text-gray-700 underline">
                        terms and conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" class="text-gray-700 underline">
                        privacy policy
                      </a>
                      .
                    </p>
                  </div>
                </label>
              </div>

              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  onClick={e => submit(e)}
                  class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white"
                >
                  Submit
                </motion.button>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?{" "}
                  <a onClick={login} class="text-gray-700 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
