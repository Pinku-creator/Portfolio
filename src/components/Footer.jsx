import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
return ( <footer className="relative py-8 bg-gradient-to-r from-[#070F2B] via-[#1B1A55] to-[#070F2B] text-center border-t border-[#535C91]/40">
{/* Glow Line on Top */} <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#535C91] via-[#9290C3] to-[#535C91]"></div>

  {/* Social Icons */}
  <div className="flex justify-center gap-6 mb-3">
    <a
      href="https://github.com/Pinku-creator"
      target="_blank"
      rel="noreferrer"
      className="text-[#9290C3] hover:text-[#8b89ec] transition-colors duration-300 hover:scale-110"
    >
      <FaGithub size={22} />
    </a>
    <a
      href="https://www.linkedin.com/in/pinky-sahu-511a58220"
      target="_blank"
      rel="noreferrer"
      className="text-[#9290C3] hover:text-[#8b89ec] transition-colors duration-300 hover:scale-110"
    >
      <FaLinkedin size={22} />
    </a>
    <a
      href="https://x.com/sahu66057"
      target="_blank"
      rel="noreferrer"
      className="text-[#9290C3] hover:text-[#8b89ec] transition-colors duration-300 hover:scale-110"
    >
      <FaTwitter size={22} />
    </a>
  </div>

  {/* Text */}
  <p className="text-gray-400 text-sm">
    © 2025 <span className="text-[#9290C3] font-semibold">Pinky</span> | Designed & Built with 💙
  </p>
</footer>

);
}

export default Footer;
