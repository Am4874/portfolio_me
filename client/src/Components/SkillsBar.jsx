import React from "react";
import { motion } from "framer-motion";

import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";

const SkillsBar = () => {
  // Define skills data with icons
  const skills = [
    { name: "HTML", icon: <TiHtml5 className="text-2xl" /> },
    { name: "CSS", icon: <IoLogoCss3 className="text-2xl" /> },
    { name: "React", icon: <FaReact className="text-2xl" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-2xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-2xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-2xl" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="text-2xl" /> },
    { name: "Node.js", icon: <TbBrandNodejs className="text-2xl" /> },
    { name: "Python", icon: <FaPython className="text-2xl" /> },
    { name: "Express", icon: <SiExpress className="text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-2xl" /> },
    { name: "SQL", icon: <DiMysql className="text-2xl" /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-2xl" /> },
  ];

  return (
    <section
      id="skills"
      className="w-full overflow-hidden bg-[#fcfaf2]] dark:bg-[#222831] py-8"
    >
      <div className="relative">
        <motion.div
          className="flex"
          animate={{
            x: [0, -1500], // Moves from right to left
            transition: {
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate skills for seamless looping */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center mr-16 min-w-[250px] hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center space-x-4">
                {/* Skill Icon */}
                <div className="text-[#4d4d4d] dark:text-[#ffffff]">
                  {skill.icon}
                </div>

                {/* Skill Name Container */}
                <div className="w-40 bg-[#fcfaf2] dark:bg-[#222831]   shadow-md rounded-full">
                  <div
                    className={`h-8  rounded-full flex items-center justify-center text-[#222831] dark:text-[#fcfaf2] font-semibold`}
                  >
                    {skill.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsBar;
