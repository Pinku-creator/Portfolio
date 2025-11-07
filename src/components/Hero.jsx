import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ReactTyped } from "react-typed";
import { FaDownload } from "react-icons/fa";
import animationData from "../assets/avatar - female.json";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center
       justify-center md:justify-around bg-[#070F2B] text-[#C7C8FF] 
       px-8 md:px-20 pb-10 md:pb-12
 overflow-hidden"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xl text-center md:text-left space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug text-white">
          Hello, <span className="wave">👋</span>
          <br />
          I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#535C91] to-[#9290C3]">
            Pinky Sahu
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-[#A5B3FF]"
        >
          <ReactTyped
            strings={[
              "Frontend Developer",
              "Full Stack Developer",
              "Tech Enthusiast",
            ]}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href="/Pinky_Sahu_Resume.pdf"
            download="Pinky_Sahu_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 mt-4 bg-gradient-to-r from-[#535C91] to-[#9290C3] text-white rounded-lg font-semibold hover:scale-105 hover:from-[#6266a3] hover:to-[#a3a2c8] transition-all duration-300"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side - Avatar */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex justify-center items-center mt-10 md:mt-0"
      >
        {/* Subtle Gradient Halo */}
        <div className="absolute w-[22rem] h-[22rem] md:w-[25rem] md:h-[25rem] rounded-full bg-gradient-to-r from-[#535C91] via-[#9290C3] to-[#A5B3FF] opacity-20 blur-3xl animate-pulse"></div>

        {/* Avatar Frame */}
        <div className="relative w-72 h-72 md:w-[25rem] md:h-[25rem] rounded-full overflow-hidden border-[3px] border-[#9290C3]/40 bg-[#070F2B]/70 backdrop-blur-sm flex justify-center items-center">
          <Lottie animationData={animationData} loop={true} className="scale-110" />
        </div>
      </motion.div>
    </section>
  );
}
