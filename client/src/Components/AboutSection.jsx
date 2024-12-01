import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

const AboutSection = () => {
  const personalInfo = {
    name: "Amit ",
    title: "Full Stack Developer",
    description: ` Passionate software engineer with a strong background in web development, specializing in creating robust and scalable web applications. I transform complex problems into elegant and efficient solutions.I thrive on building dynamic and responsive web
          applications that provide seamless user experiences. With a keen eye
          for detail and a commitment to writing clean, efficient code, I enjoy
          tackling complex problems and bringing innovative solutions to life.
          My journey in software development is driven by a love for continuous
          learning and a dedication to staying at the forefront of industry
          advancements. Let's create something amazing together!`,
    skills: [
      "Full Stack Development",
      "Responsive Web Design",
      "Performance Optimization",
      "Cloud Deployment",
    ],
  };

  const experiences = [
    // {
    //   icon: <FaLaptopCode />,
    //   title: "Senior Web Developer",
    //   company: "Tech Innovations Inc.",
    //   duration: "2021 - Present",
    //   description:
    //     "Lead development of enterprise-level web applications, implementing modern tech stacks and best practices.",
    // },
    {
      icon: <FaUniversity />,
      title: "Full Stack Developer Intern",
      company: "Ollato  Ltd.",
      duration: "2019 - present",
      description:
        "Developed multiple full-stack projects and contributed to core product development.",
    },
  ];

  const education = [
    {
      icon: <FaGraduationCap />,
      degree: "B.S. in Computer Science",
      institution: "University of Mumbai",
      year: "2022",
      description: "Specialized in Web Technologies and Software Engineering",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#fcfaf2] to-[#dbd8f0]  dark:from-[#222831] dark:to-[#393e46] py-16"
    >
      <div className="container mx-auto px-4">
        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#AB4459] dark:text-[#fcfaf2] mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-[#fcfaf2] max-w-2xl mx-auto">
            {personalInfo.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Personal Details & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true }}
            className="bg-[#fcfaf2] dark:bg-[#222831] rounded-md  p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#AB4459] dark:text-[#fcfaf2]">
              Personal Details
            </h3>

            <div className="space-y-4">
              <div>
                <span className="font-medium text-[#222831] dark:text-[#fcfaf2]">
                  Name:
                </span>
                <p className="text-[#222831] dark:text-[#fcfaf2]">
                  {personalInfo.name}
                </p>
              </div>

              <div>
                <span className="font-medium text-[#222831] dark:text-[#fcfaf2]">
                  Professional Title:
                </span>
                <p className="text-[#222831] dark:text-[#fcfaf2]">
                  {personalInfo.title}
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-[#222831] dark:text-[#fcfaf2]">
                  Key Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 dark:bg-[#fcfaf2] text-[#AB4459] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Professional Experience */}
            <div className="bg-[#fcfaf2] dark:bg-[#222831] rounded p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#AB4459] dark:text-[#fcfaf2]">
                Professional Experience
              </h3>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="mb-6 pb-6 border-b border-[#AB4459] dark:border-[#fcfaf2] last:border-b-0"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-[#AB4459] mr-4 text-3xl">
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#222831] dark:text-[#fcfaf2]">
                        {exp.title}
                      </h4>
                      <p className="text-[#222831] dark:text-[#fcfaf2]">
                        {exp.company} | {exp.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#222831] dark:text-[#fcfaf2]">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="bg-[#fcfaf2] dark:bg-[#222831] rounded p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#AB4459] dark:text-[#fcfaf2]">
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-blue-600 mr-4 text-3xl">{edu.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#222831] dark:text-[#fcfaf2]">
                      {edu.degree}
                    </h4>
                    <p className="text-[#222831] dark:text-[#fcfaf2]">
                      {edu.institution} | {edu.year}
                    </p>
                    <p className="text-[#222831] dark:text-[#fcfaf2] mt-2">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
