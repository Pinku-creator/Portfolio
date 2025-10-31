import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
const education = [
{
degree: "Bachelor of Computer Science",
institution: " Rajasthan Technical University,Kota",
year: "2020 - 2024",
percentage: "83.88%",
details:
"Focused on web development, data structures, and design principles.",
},
{
degree: "High School",
institution: " Central Public Senior Secondary School",
year: "2018 - 2020",
percentage: "80%",
details:
"Specialized in science with mathematics, building my foundation in logical problem-solving.",
},
];

return ( <section
   id="education"
   className="bg-[#070F2B] text-white py-20 px-6 md:px-16 flex flex-col items-center"
 >
<motion.h2
initial={{ opacity: 0, y: -30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-4xl font-bold text-transparent bg-clip-text
bg-gradient-to-r from-[#535C91] to-[#9290C3] mb-12"
>
Education
</motion.h2>

  <div className="max-w-5xl w-full flex flex-col gap-8">
    {education.map((edu, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="flex flex-col md:flex-row items-start md:items-center 
        gap-6 bg-[#1B1A55]/40 border border-[#535C91]/30 rounded-xl p-6 
        hover:shadow-[0_0_25px_rgba(146,144,195,0.2)] transition-all duration-500"
      >
        <div className="text-[#A5B3FF] flex items-center justify-center w-14 h-14 rounded-full bg-[#535C91]/30 backdrop-blur-sm">
          <FaGraduationCap size={28} />
        </div>
        <div className="flex flex-col space-y-1">
          <h3 className="text-2xl font-semibold text-[#C7C8FF]">
            {edu.degree}
          </h3>
          <p className="text-[#A5B3FF] font-medium">{edu.institution}</p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
            <span>{edu.year}</span>
            <span className="text-[#C7C8FF] font-semibold">•</span>
            <span className="text-[#A5B3FF] font-medium">
              {edu.percentage}
            </span>
          </div>
          <p className="text-gray-300 mt-2">{edu.details}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

);
}
