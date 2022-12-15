import React, { useState } from "react";
import { Logo } from "../..";
import { motion } from "framer-motion";
import { useNavigate,Route } from "react-router-dom";
import { auth } from "../../../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  localStorage.setItem("user", null);

  const navigate = useNavigate();
  const signup = () => {
    navigate("/signup", { replace: true });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password
      );
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/dashboard", { replace: true });
    } catch (error) {
      alert(error.message);
      localStorage.setItem("user", null);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-screen-xl m-auto">
      <Logo className="text-3xl" />
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Don't have an account?{" "}
        <a
          onClick={signup}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sign up
        </a>
      </p>
      <div className="grid grid-cols-1 mt-6 border-indigo-900 border-2 gap-18 m-auto justify-center items-center rounded-xl">
        <div className="grid grid-rows-3 pt-6 px-6 items-center m-auto">
          <div id="emailcontainer" className="p-6">
            <div>Email Address</div>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              onChange={(e) => { setEmail(e.target.value); } }
              className="mt-2 p-2 w-full px-4 rounded-xl border-indigo-900 border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div id="passwordContainer" className="px-6 flex flex-col">
            <div>Password</div>
            <input
              type="password"
              id="password"
              placeholder="************"
              onChange={(e) => { setPassword(e.target.value); } }
              className="mt-2 py-2 pr-20 px-4 w-full justify-start m-auto m rounded-xl border-indigo-900 border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <div className="flex items-end pl-36 pt-2 justify-end m-auto">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text indigo-600 justify-end m-auto focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div>
          <div
            id="submit"
            className="p-6 flex w-full h-full justify-center m-auto align-top"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={login}
              className="bg-indigo-700 justify-center flex w-full h-3/5 items-center m-auto hover:bg-indigo-900 duration-100 transition-all ease-in-out text-white rounded-xl"
            >
              Login
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
