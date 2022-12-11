import React from "react";
import { Logo } from "..";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login", { replace: true });
  };
  const signup = () => {
    navigate("/signup", { replace: true });
  };
  const home = () => {
    navigate("/", { replace: true });
  };

  return (
    <header className="static z-50 w-screen border-b-4 border-indigo-700 p-6 px-16">
      <div className="flex items-center">
        <Link to={"/"}>
          <Logo />
        </Link>

        <ul className="flex select-none items-center gap-8 ml-10">
          <li
            onClick={home}
            className="text-base text-pink-500 hover:text-purple-500 duration-100 transition-all ease-in-out cursor-pointer"
          >
            Home
          </li>
          <li className="text-base text-pink-500 hover:text-purple-500 duration-100 transition-all ease-in-out cursor-pointer">
            About
          </li>
          <li className="text-base text-pink-500 hover:text-purple-500 duration-100 transition-all ease-in-out cursor-pointer">
            Contact
          </li>
        </ul>

        <div className="flex select-none items-center space-x-4 ml-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={login}
            className="bg-indigo-700 hover:bg-purple-500 duration-100 transition-all ease-in-out text-white px-4 py-2 rounded-xl"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={signup}
            className="bg-indigo-900 hover:bg-purple-500 duration-100 transition-all ease-in-out text-white px-4 py-2 rounded-xl"
          >
            Sign Up
          </motion.button>
        </div>
      </div>
    </header>
  );
}

export default Header;
