<<<<<<< HEAD

import React from 'react';
import styled from 'styled-components';
import Logo from "../../common/logo";

const OutsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: -10rem;
  @media (min-width: 640px) { 
    padding: 6rem;
  }`;
const TextContainer = styled.div`
  padding: 0 4px;
  text-align: center;
  @media (min-width: 640px) { padding: 0; }
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 28rem;
  margin-top: 2rem;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(26, 35, 126, 0.1);
  padding: 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  box-shadow: 0 0 2.5px rgba(26, 35, 126, 0.85);
  border-radius: 0.75rem;
  margin-bottom: 1rem;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(26, 35, 126, 0.1);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(145, 86, 235);
  }
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(66, 55, 193);
  background: linear-gradient(58deg,
  rgba(66, 35, 193, 1) 20%,
  rgba(66, 35, 193, 1) 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;

export default function signUp() {
    return (
            <OutsideContainer>
                <TextContainer>
                    <p className="text-sm font-semibold text-indigo-900 uppercase">
                        Sign up to your account
                    </p>
                  <Logo  className="text-6xl"/>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Already have an account?{' '}
                        <a
                            href="/login"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Sign in
                        </a>
                    </p>
                </TextContainer>
                <FormContainer>
                    <Input type="text" placeholder="Full Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm Password" />
                </FormContainer>
                <SubmitButton type="submit">Sign up</SubmitButton>
            </OutsideContainer>
    )
=======
import React from "react";
import { Logo } from "../..";
import { motion } from "framer-motion";

export default function signUp() {
  const heroImg = require("../../../assets/hero.png");
  return (
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Students"
            src={heroImg}
            class="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          class="flex items-center flex-col justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <Logo className="text-3xl pb-4" />
          <div class="max-w-xl lg:max-w-3xl border-2 p-4 rounded-xl">
            <form action="#" class="mt-8 grid grid-cols-6 gap-6">
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
                  name="first_name"
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
                  name="last_name"
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
                  name="email"
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
                  name="password"
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
                  name="password_confirmation"
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
                  class="bg-transparent border-2 font-semibold border-indigo-900 text-indigo-900 p-2 px-12 rounded-lg hover:bg-indigo-900 hover:text-white"
                >
                  Submit
                </motion.button>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?{" "}
                  <a href="#" class="text-gray-700 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
>>>>>>> main
}
