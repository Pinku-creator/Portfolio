import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "HTML", level: "95%", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", level: "90%", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", level: "85%", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", level: "90%", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", level: "80%", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Database", level: "75%", icon: <FaDatabase className="text-purple-500" /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-8 bg-[#070F2B] text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#A5B3FF] mb-8"
      >
        My <span className="text-[#f1f1f1]">Skills</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#070F2B] p-6 rounded-xl shadow-lg hover:shadow-[#535C91]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl transition-transform duration-300 hover:scale-110">
                {skill.icon}
              </span>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
            <div className="w-full bg-[#1B1A55] rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="h-3 rounded-full bg-gradient-to-r from-[#535C91] via-[#9290C3] to-[#00FFFF]"
              ></motion.div>
            </div>
            <p className="text-right text-sm mt-2 text-[#9290C3]">
              {skill.level}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
