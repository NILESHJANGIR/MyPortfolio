import React from "react";
import { motion } from "framer-motion";
// import Footer from "./Footer";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase,FaBootstrap,FaGithub } from "react-icons/fa";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "80%" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, level: "75%" },
    { name: "Bootstarp", icon: <FaBootstrap className="text-blue-600" />, level: "75%" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: "80%" },
  { name: "React JS", icon: <FaReact className="text-blue-500" />, level: "55%" },
  { name: "Java", icon: <FaJava className="text-red-600" />, level: "70%" },,
  { name: "Oracle / MYSQL", icon: <FaDatabase className="text-blue-700" />, level: "80%" },
  { name: "Github", icon: <FaGithub className="text-White-700" />, level: "60%" },

];

const Skills = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-lg bg-gray-900 flex flex-col items-center shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: skill.level }}
                transition={{ duration: 1.5 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
{/* <Footer/> */}
    </div>
    
  );
};

export default Skills;
