// src/components/AnimatedSidebar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Sidebar animation variants
  const sidebarVariants = {
    open: {
      width: "250px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      width: "60px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const listVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      x: -20,
    },
  };

  const listItemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };

  return (
    <motion.div
      className="sidebar"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      style={{
        background: "#fcfaf2",
        color: "#222831",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
        padding: "10px",
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "#61dafb",
          border: "none",
          color: "#000",
          padding: "10px 20px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {isOpen ? "Close" : "Open"}
      </button>

      {/* Sidebar Menu */}
      <motion.ul
        variants={listVariants}
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <motion.li
            key={index}
            variants={listItemVariants}
            style={{
              margin: "10px 0",
              padding: "10px",
              cursor: "pointer",
              background: "#444",
              borderRadius: "5px",
              textAlign: "center",
            }}
            whileHover={{ scale: 1.1, backgroundColor: "#61dafb", color: "#000" }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default AnimatedSidebar;
