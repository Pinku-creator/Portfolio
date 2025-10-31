import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "About","Education", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[#070F2B]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          : "bg-[#070F2B]/70 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white tracking-wide">
          <span className="text-[#A5B3FF]">Pinky</span> Sahu
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-[#E5E5E5] text-[1.1rem] font-medium">
          {links.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#A5B3FF] transition-colors duration-300"
              >
                {item}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#535C91] to-[#9290C3] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-5">
          <motion.a
            href="https://github.com/Pinku-creator"
            target="_blank"
            whileHover={{ scale: 1.15 }}
            className="text-[#E5E5E5] hover:text-[#A5B3FF] transition-colors"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/pinky-sahu-511a58220"
            target="_blank"
            whileHover={{ scale: 1.15 }}
            className="text-[#E5E5E5] hover:text-[#A5B3FF] transition-colors"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col gap-4 mt-3 px-6 pb-5 bg-[#1B1A55]/95 rounded-lg shadow-lg"
        >
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-[#535C91]/70 hover:text-[#A5B3FF] transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
