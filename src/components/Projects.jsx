import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

function Projects() {
  const projects = [
    {
      title: "Rock Paper Scissor Game",
      desc: "HTML, CSS, JS project",
      github: "https://github.com/Pinku-creator/RPS-Game/",
      live: "https://pinku-creator.github.io/RPS-Game/",
      img: project1,
    },
    {
      title: "My Moment App",
      desc: "Node.js & Express App with EJS and Tailwind CSS",
      github: "https://github.com/Pinku-creator/my-moment-app",
      live: "https://my-moment-app.onrender.com",
      img: project2,
    },
    {
      title: "Trackly Application",
      desc: "React and Tailwind CSS",
      github: "https://github.com/Pinku-creator/trackly",
      live: "https://trackly-wheat.vercel.app/",
      img: project3,
    },
    {
      title: "glowQZ Site",
      desc: "JavaScript and jsPDF",
      github: "https://github.com/Pinku-creator/GlowQZ",
      live: "https://glowqz.vercel.app/",
      img: project4,
    },
    {
      title: "Portfolio Website",
      desc: "React and Tailwind CSS",
      github: "https://github.com/Pinku-creator/Portfolio",
      live: "https://portfolio-frontend-c1we.onrender.com",
      img: project5,
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section id="projects" className="py-20 px-6 bg-[#1B1A55] text-center">
      <h2 className="text-4xl font-bold text-[#A5B3FF] mb-10">
        My <span className="text-white">Projects</span>
      </h2>
      <div className="hover:scale-110 transition-transform duration-300 relative max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[current].title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-[#070F2B] rounded-xl shadow-lg flex flex-col items-center"
          >
            <img
              src={projects[current].img}
              alt={projects[current].title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-white">
              {projects[current].title}
            </h3>
            <p className="mt-2 text-gray-300">{projects[current].desc}</p>

            <div className="flex gap-4 mt-4">
              <a
                href={projects[current].github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9290C3] transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={projects[current].live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9290C3] transition"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots below */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-125" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <a
        href="https://github.com/Pinku-creator"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-14 bg-[#535C91] 
      text-[#070F2B] text-lg px-8 py-3 rounded-lg hover:bg-[#a3a2c8] transition font-semibold"
      >
        See More
      </a>
    </section>
  );
}

export default Projects;
