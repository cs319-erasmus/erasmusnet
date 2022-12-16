import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const heroImg = require("../../../../assets/hero.png");
  return (
    <div id="hero" className="grid select-none md:grid-cols-2 md:grid-rows-1 grid-rows-1 gap-2 py-18 m-auto">
      <div className=" py-1 my-auto mx-auto flex-1 flex flex-col items-start gap-6">
        <p className="font-extrabold text-2xl leading-loose  xl:text-4xl tracking-wide text-indigo-1400 w-5/6">
          Apply to Erasmus
          <br />
          Quickly, Efficiently
        </p>

        <div>
          <p className="text-indigo-1000 tracking-wide text-md md:text-lg lg:text-xl leading-loose">
            Forget endless hours of writing e-mails to coordinators and
            instructors. <br />
            Forget the stress of trying to gather every single document. <br />
            See everything about your application in one place. <br />
            Only worry about how good your time will be abroad. <br />
          </p>
          <div className="grid grid-cols-2 w-full gap-8 py-12">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="font-bold bg-indigo-900 text-white p-2 rounded-lg hover:bg-transparent hover:border-2 hover:border-indigo-900 hover:text-indigo-900"
            >
              Get Started
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => document.getElementById("about").scrollIntoView()}
              className="font-bold bg-transparent border-2 border-indigo-900 text-indigo-900 p-2 rounded-lg hover:bg-indigo-900 hover:text-white"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
      <div className="flex-1 items-center justify-center hidden md:block m-auto">
        <img src={heroImg} alt="Students" />
      </div>
    </div>
  );
};

export default Hero;
