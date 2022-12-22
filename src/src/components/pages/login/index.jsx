import React, { useState, useRef } from "react";
import { Logo } from "../..";
import { motion } from "framer-motion";
import { useNavigate, Route } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";
import { useEffect } from "react";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();

  const navigate = useNavigate();

  const signup = () => {
    navigate("/signup", { replace: true });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      if (user === null || user === undefined) {
        await login(emailRef.current.value, passwordRef.current.value);
      }
        
    } catch (err) {
      console.log(err);
      setError("Failed to log in");
    }
    
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center mt-8 max-w-screen-xl m-auto">
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
              ref={emailRef}
              placeholder="johndoe@example.com"
              className="mt-2 p-2 w-full px-4 rounded-xl border-indigo-900 border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div id="passwordContainer" className="px-6 flex flex-col">
            <div>Password</div>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              placeholder="************"
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
              onClick={(e) => submit(e)}
              disabled={loading}
              type="submit"
              className="bg-indigo-700 justify-center flex w-full h-3/5 items-center m-auto hover:bg-indigo-900 duration-100 transition-all ease-in-out text-white rounded-xl"
            >
              {loading && (
                <svg
                  role="status"
                  class="inline mr-3 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              )}
              {!loading && "Login"}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
