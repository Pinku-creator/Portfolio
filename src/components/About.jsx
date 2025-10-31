import { motion } from "framer-motion";

export default function About() {
  return (
    
    <section
      id="about"
      className="bg-[#1B1A55] text-white pt-10 py-20 px-6 md:px-20 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text 
        bg-gradient-to-r from-[#A5B3FF] to-[#9290C3]"
      >
        <span className="text-[#ffffff] ">About</span> Me
      </motion.h2>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="shadow-[0_0_25px_rgba(254, 254, 254, 0.848)] p-4 rounded-lg bg-[#070F2B]/50 max-w-3xl text-center md:text-left leading-relaxed text-gray-300 space-y-5"
      >
        <p className="text-lg">
          Hi, I’m{" "}
          <span className="text-[#A5B3FF] font-semibold">Pinky Sahu</span> — a
          passionate and creative{" "}
          <span className="text-[#A5B3FF] font-semibold">
            Frontend Developer
          </span>{" "}
          who loves crafting clean, user-focused, and visually appealing web
          experiences. I believe great design is all about balance —
          performance, usability, and aesthetics working together.
        </p>

        <p>
          My journey started with curiosity about how designs come alive on the
          web, and it has grown into a deep passion for developing responsive,
          modern interfaces using technologies like{" "}
          <span className="text-[#A5B3FF] font-medium">React, JavaScript,</span>{" "}
          and <span className="text-[#A5B3FF] font-medium">Tailwind CSS</span>.
        </p>

        <p>
          I’m always learning, exploring new frameworks, and improving my craft
          to build projects that blend creativity with function. My goal is to
          contribute to building seamless digital products that make an impact.
        </p>

        <motion.a
          href="#skills"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="inline-block mt-6 px-8 py-3
           bg-gradient-to-r from-[#535C91] to-[#9290C3] rounded-lg text-[#070F2B]
            font-semibold hover:from-[#6266a3] hover:to-[#a3a2c8] transition-all duration-300"
        >
          Explore My Skills
        </motion.a>
      </motion.div>
    </section>
  );
}
