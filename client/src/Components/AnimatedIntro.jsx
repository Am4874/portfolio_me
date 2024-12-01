// import React from "react";
// import { motion } from "framer-motion";
// import homeImage from "../assets/homeImage.png";

// function AnimatedIntro() {
//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//         when: "beforeChildren",
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <motion.div
//       className="intro-container flex flex-col-reverse lg:flex-row items-center justify-center h-screen bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark transition-colors"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {/* Text Content */}
//       <motion.div
//         className="text-content flex flex-col items-center lg:items-start gap-4 px-6 lg:px-0"
//         variants={childVariants}
//       >
//         <motion.h1
//           variants={childVariants}
//           className="text-4xl lg:text-6xl font-bold"
//         >
//           Hello, I'm Amit
//         </motion.h1>
//         <motion.p
//           variants={childVariants}
//           className="text-2xl lg:text-3xl font-medium"
//         >
//           A passionate software developer !!!
//         </motion.p>
//       </motion.div>

//       {/* Image Content */}
//       <motion.div
//         className="image-content max-w-xs lg:max-w-md"
//         variants={childVariants}
//       >
//         <motion.img
//           src={homeImage}
//           alt="Home"
//           className="w-full rounded-lg shadow-lg"
//         />
//       </motion.div>
//     </motion.div>
//   );
// }

// export default AnimatedIntro;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const AnimatedIntro = () => {
  const [currentText, setCurrentText] = useState("");
  const introTexts = [
    "Amit",
    "A Passionate Software Developer",
    // "Crafting Digital Experiences",
    "Hello, I'm Amit",
  ];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textIndex < introTexts.length - 1) {
        setTextIndex((prev) => prev + 1);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [textIndex]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fcfaf2] to-[#dbd8f0] dark:from-[#222831] dark:to-[#393e46] p-4"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center space-x-4 mb-6"
        >
          <FaCode className="text-4xl text-[#AB4459]" />
          <FaLaptopCode className="text-4xl text-[#AB4459]" />
        </motion.div>

        <motion.h1
          key={textIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
        >
          {introTexts[textIndex]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-[#292f36] dark:text-[#fcfaf2] max-w-2xl mx-auto mb-8"
        >
          Transforming ideas into elegant digital solutions through code and
          creativity.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          onClick={() => scrollToSection("connect")}
          className="px-6 py-3 bg-[#AB4459] text-[#fcfaf2] rounded-full hover:bg-[#fcfaf2] hover:text-[#AB4459] transition-colors inline-flex items-center space-x-2"
        >
          <span>Get In Touch</span>
        </motion.button>
      </div>
    </section>
  );
};

export default AnimatedIntro;
