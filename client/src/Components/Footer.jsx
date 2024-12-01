import React from "react";
import { motion } from "framer-motion";

function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="bg-[#fcfaf2] font-medium text-lg  shadow dark:bg-[#222831]  text-[#AB4459]  dark:text-[#fcfaf2] "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-screen-xl flex justify-between flex-wrap mx-auto p-6 md:py-8">
        {/* Navigation Links */}
        <motion.ul
          className="flex flex-wrap items-center text-sm font-medium text-[#AB4459] dark:text-[#fcfaf2] "
          variants={containerVariants}
        >
          {["About", "Privacy Policy", "Licensing", "Contact"].map(
            (item, index) => (
              <motion.li
                key={item}
                variants={linkVariants}
                className="me-4 md:me-6 hover:underline"
              >
                <a href="#">{item}</a>
              </motion.li>
            )
          )}
        </motion.ul>

        {/* Copyright Section */}
        <motion.span
          className="text-sm text-[#AB4459] dark:text-[#fcfaf2] sm:text-center"
          variants={linkVariants}
        >
          © 2024
          <a
            href="https://amitdev.com/"
            className="hover:underline mx-2 text-[#AB4459] dark:text-[#fcfaf2] "
          >
            Amit™
          </a>
          . All Rights Reserved.
        </motion.span>
      </div>
    </motion.footer>
  );
}

export default Footer;
