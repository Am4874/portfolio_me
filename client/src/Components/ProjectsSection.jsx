// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

// const ProjectCard = ({ project }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       className="relative w-full max-w-md mx-auto"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         transition: {
//           duration: 0.6,
//           ease: "easeOut",
//         },
//       }}
//       viewport={{ once: true }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       <div className="bg-[#dbd8f0] dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative">
//         {/* Project Image */}
//         <div className="h-24 relative overflow-hidden">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-full object-cover"
//           />

//           {/* Hover Overlay */}
//           <motion.div
//             className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: isHovered ? 1 : 0,
//               transition: { duration: 0.3 },
//             }}
//           >
//             <div className="flex space-x-4">
//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-blue-300 transition-colors"
//               >
//                 <FaGithub size={30} />
//               </a>
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-blue-300 transition-colors"
//               >
//                 <FaExternalLinkAlt size={30} />
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         {/* Project Details */}
//         <div className="p-6">
//           <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
//             {project.title}
//           </h3>
//           <p className="text-gray-600 dark:text-gray-300 mb-4">
//             {project.description}
//           </p>

//           {/* Tech Stack Icons */}
//           <div className="flex items-center space-x-3 mb-4">
//             {project.techStack.map((Tech, index) => (
//               <Tech
//                 key={index}
//                 className="text-gray-700 dark:text-gray-300"
//                 size={24}
//               />
//             ))}
//           </div>

//           {/* Project Type Chip */}
//           <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//             {project.type}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ProjectsSection = () => {
//   const projects = [
//     {
//       title: "Blog Application",
//       description: "A full-stack blog app with authentication and comments.",
//       githubLink: "https://github.com/Am4874/Chat_Application",
//       liveLink: "https://blog-application-mfov.onrender.com/",
//       image: "/placeholder/800/600",
//       type: "Full Stack",
//       techStack: [FaReact, FaNodeJs, SiMongodb, SiExpress, SiTailwindcss],
//     },
//     {
//       title: "Chat Application",
//       description: "Real-time chat app with room-based messaging.",
//       githubLink: "https://github.com/Am4874/Chat_Application",
//       liveLink: "https://github.com/Am4874/Chat_Application",
//       image: "/placeholder/800/600",
//       type: "Full Stack",
//       techStack: [FaReact, SiTailwindcss],
//     },
//     {
//       title: "Portfolio Website",
//       description: "Personal portfolio showcasing skills and contact info.",
//       githubLink: "https://github.com/Am4874/portfolio",
//       liveLink: "https://portfoliio-6m07.onrender.com/",
//       image: "/placeholder/800/600",
//       type: "Front End",
//       techStack: [FaReact, FaNodeJs, SiTailwindcss],
//     },
//     {
//       title: "Blog Website",
//       description: "A personal blog site built with React and CSS.",
//       githubLink: "https://github.com/Am4874/personal_blogs_website",
//       liveLink: "https://am4874.github.io/personal_blogs_website/",
//       image: "/placeholder/800/600",
//       type: "Front End",
//       techStack: [FaReact, FaNodeJs, SiTailwindcss],
//     },
//     {
//       title: "Restaurant Website",
//       description: "An online restaurant app for booking and ordering.",
//       githubLink: "https://github.com/Am4874/personal_blogs_website",
//       liveLink: "https://am4874.github.io/personal_blogs_website/",
//       image: "/placeholder/800/600",
//       type: "Front End",
//       techStack: [FaReact, FaNodeJs, SiTailwindcss],
//     },
//   ];

//   return (
//     <section className="py-16 bg-[#dbd8f0] dark:bg-gray-900 mt-1">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//             transition: {
//               duration: 0.6,
//               ease: "easeOut",
//             },
//           }}
//           viewport={{ once: true }}
//         >
//           My Projects
//         </motion.h2>

//         <motion.div
//           className="grid md:grid-cols-3 gap-8"
//           initial="hidden"
//           whileInView="visible"
//         >
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconStyles = "text-gray-700 dark:text-gray-300";

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-[#fcfaf2] dark:bg-[#222831] rounded-xl shadow-md overflow-hidden relative h-96">
        {/* Project Image */}
        <div className="h-32 relative overflow-hidden">
          {/* <img
            src={project.image || "/placeholder.png"} // Fallback image
            alt={project.title}
            className="w-full h-full object-cover"
          /> */}

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-[#AB4459] bg-opacity-60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex space-x-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fcfaf2] hover:text-[#FFA500] transition-colors"
                >
                  <FaGithub size={30} />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fcfaf2] hover:text-[#FFA500] transition-colors"
                >
                  <FaExternalLinkAlt size={30} />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Project Details */}
        <div className="p-4 flex flex-col justify-between h-[calc(100%-8rem)]">
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#AB4459] dark:text-[#fcfaf2] truncate">
              {project.title}
            </h3>
            <p className="text-[#222831] dark:text-[#fcfaf2] text-sm overflow-hidden text-ellipsis max-h-14">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex items-center space-x-3 my-4">
            {project.techStack.map((Tech, index) => (
              <Tech key={index} className={iconStyles} size={24} />
            ))}
          </div>

          {/* Project Type Chip */}
          <div className="inline-block px-3 py-1 bg-[#AB4459] text-[#fcfaf2] rounded-full text-sm">
            {project.type}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Blog Application",
      description: "A full-stack blog app with authentication and comments.",
      githubLink: "https://github.com/Am4874/Chat_Application",
      liveLink: "https://blog-application-mfov.onrender.com/",
      image: "/placeholder/800/600",
      type: "Full Stack",
      techStack: [FaReact, FaNodeJs, SiMongodb, SiExpress, SiTailwindcss],
    },
    {
      title: "Chat Application",
      description: "Real-time chat app with room-based messaging.",
      githubLink: "https://github.com/Am4874/Chat_Application",
      liveLink: "https://github.com/Am4874/Chat_Application",
      image: "/placeholder/800/600",
      type: "Full Stack",
      techStack: [FaReact, SiTailwindcss],
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing skills and contact info.",
      githubLink: "https://github.com/Am4874/portfolio",
      liveLink: "https://portfoliio-6m07.onrender.com/",
      image: "/placeholder/800/600",
      type: "Front End",
      techStack: [FaReact, FaNodeJs, SiTailwindcss],
    },
    {
      title: "Blog Website",
      description: "A personal blog site built with React and CSS.",
      githubLink: "https://github.com/Am4874/personal_blogs_website",
      liveLink: "https://am4874.github.io/personal_blogs_website/",
      image: "/placeholder/800/600",
      type: "Front End",
      techStack: [FaReact, FaNodeJs, SiTailwindcss],
    },
    {
      title: "Restaurant Website",
      description: "An online restaurant app for booking and ordering.",
      githubLink: "https://github.com/Am4874/personal_blogs_website",
      liveLink: "https://am4874.github.io/personal_blogs_website/",
      image: "/placeholder/800/600",
      type: "Front End",
      techStack: [FaReact, FaNodeJs, SiTailwindcss],
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 dark:from-[#222831] dark:to-[#393e46] bg-gradient-to-br from-[#fcfaf2] to-[#dbd8f0]  mt-1"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
