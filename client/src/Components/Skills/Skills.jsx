// import React from "react";

// import {
//   react,
//   nodeJs,
//   expressjs,
//   javascript,
//   tailwindcss,
//   bootstrap,
//   sql,
//   html,
//   css3,
//   python,
// } from "../../assets/index";

// const skills = [
//   {
//     id: 1,
//     title: "ReactJs",
//     skill: "React Js",
//     Level: "Intermediate",
//     img: react,
//   },
//   {
//     id: 2,
//     title: "NodeJs",
//     skill: "Node Js",
//     Level: "Intermediate",
//     img: nodeJs,
//   },
//   {
//     id: 3,
//     title: "ExpressJs",
//     skill: "Express Js",
//     Level: "Intermediate",
//     img: expressjs,
//   },
//   {
//     id: 4,
//     title: "Javascript",
//     skill: "JavaScript",
//     Level: "Intermediate",
//     img: javascript,
//   },
//   {
//     id: 5,
//     title: "Tailwind",
//     skill: "Tail Wind Css",
//     Level: "Intermediate",
//     img: tailwindcss,
//   },
//   {
//     id: 6,
//     title: "Bootstrap",
//     skill: "Bootstrap",
//     Level: "Intermediate",
//     img: bootstrap,
//   },
//   {
//     id: 7,
//     title: "SQL",
//     skill: "SQL",
//     Level: "Intermediate",
//     img: sql,
//   },
//   {
//     id: 8,
//     title: "HTML",
//     skill: "HTML",
//     Level: "Intermediate",
//     img: html,
//   },
//   {
//     id: 9,
//     title: "CSS",
//     skill: "CSS",
//     Level: "Intermediate",
//     img: css3,
//   },
//   {
//     id: 10,
//     title: "Python",
//     skill: "Python",
//     Level: "Intermediate",
//     img: python,
//   },
// ];
// export default function Skills() {
//   return (
//     <section id="skills">
//       <div className="container px-5 py-10 mx-auto">
//         <div className="flex flex-wrap m-4 dark:bg-slate-700 rounded-lg">
//           {skills.map((skill) => (
//             <div
//               key={skill.id}
//               className="p-4 text-2xl font-bold w-full sm:w-1/2  lg:w-1/3"
//             >
//               <div className="flex items-center justify-center shadow hover:translate-y-1 hover:bg-slate-300 hover:text-black hover:rounded-lg">
//                 <img
//                   className="w-7 h-6 flex-shrink-0 mr-4"
//                   src={skill.img}
//                   alt={skill.title}
//                 />
//                 <span className="title-font font-medium ">{skill.skill}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import "../../styles/Skills.css";

// Assuming skill data is fetched from a backend or hardcoded
const skills = [
  { id: 1, skill: "React", level: "Intermediate" },
  { id: 2, skill: "NodeJs", level: "Advanced" },
  { id: 3, skill: "Express", level: "Intermediate" },
  { id: 4, skill: "Python", level: "Beginner" },
  { id: 5, skill: "JavaScript", level: "Advanced" },
  { id: 6, skill: "SQL", level: "Intermediate" },
  { id: 7, skill: "CSS", level: "Advanced" },
];

export default function Skills() {
  // const [skills, setSkills] = useState([]);
  const [activeSkills, setActiveSkills] = useState(skills);

  // Fetch skills data from the backend
  // useEffect(() => {
  //   async function fetchSkills() {
  //     try {
  //       const response = await axios.get("/api/skills");
  //       setSkills(response.data); // Assuming response data is in the expected format
  //     } catch (error) {
  //       console.error("Error fetching skills data:", error);
  //     }
  //   }

  //   fetchSkills();
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkills((prevSkills) => {
        if (prevSkills.length > 0) {
          const movedSkill = prevSkills.shift();
          return [...prevSkills, movedSkill];
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!Array.isArray(activeSkills) || activeSkills.length === 0) {
    return <div>Loading...</div>; // Optional loading state
  }

  // return (
  //   <section id="skills" className="dark:bg-slate-700">
  //     <div className="container px-5 py-10 mx-auto">
  //       <div className="flex flex-wrap m-4">
  //         {skills.map((skill) => (
  //           <div
  //             key={skill.id}
  //             className="p-4 text-2xl font-bold w-full sm:w-1/2 lg:w-1/3"
  //           >
  //             <div className="flex items-center justify-center shadow-lg hover:translate-y-1 hover:bg-slate-300 hover:text-black hover:rounded-lg">
  //               <img
  //                 className="w-7 h-6 flex-shrink-0 mr-4"
  //                 src={skill.img}
  //                 alt={skill.title}
  //               />
  //               <span className="title-font font-medium">{skill.skill}</span>
  //             </div>

  //             {/* Animated Vertical Progress Bar */}
  //             <div className="relative pt-1 mt-4">
  //               <div className="flex mb-2 justify-between">
  //                 <span className="text-sm font-medium">{skill.skill}</span>
  //                 <span className="text-sm">
  //                   {getLevelPercentage(skill.Level)}%
  //                 </span>
  //               </div>
  //               <div
  //                 className="w-10 bg-gray-200 rounded-full"
  //                 style={{
  //                   height: "200px", // Set fixed height for the skill bar container
  //                 }}
  //               >
  //                 <div
  //                   className="bg-gradient-to-b from-teal-500 to-teal-300 rounded-full animate-grow"
  //                   style={{
  //                     height: `${getLevelPercentage(skill.Level)}%`, // Dynamic height based on skill level
  //                     transition: "height 1s ease-in-out", // Smooth animation of height change
  //                   }}
  //                 ></div>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <div className="skills-container">
      <div className="skills-list">
        {activeSkills.map((skill) => (
          // <motion.div
          //   key={skill.id}
          //   className="skill-item"
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          //   transition={{ duration: 1 }}
          // >
          //   <div className="skill">
          //     <span className="skill-name">{skill.skill}</span>
          //     <span className="skill-level">{skill.level}</span>
          //   </div>
          // </motion.div>
          <div key={skill.id} className="skill-item">
            <div className="skill">
              <span className="skill-name">{skill.skill}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
