import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaComment,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const ConnectMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your actual form submission logic (e.g., EmailJS, Formspree)
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitted: true, error: false });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({ submitted: false, error: true });
      }
    } catch (error) {
      setFormStatus({ submitted: false, error: true });
    }
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/amit-ambedka",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Am4874",
      color: "text-gray-800 dark:text-white hover:text-gray-600",
    },
    {
      icon: <FaXTwitter />,
      url: "https://x.com/an_amit_0",
      color: "text-[#000000] hover:text-[#000000]",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/amitto_001",
      color: "text-[#000000] hover:text-[#000000]",
    },
  ];

  return (
    <section
      id="connect"
      className="dark:from-[#222831] dark:to-[#393e46] bg-gradient-to-br from-[#fcfaf2] to-[#dbd8f0] py-16"
    >
      <div className="container mx-auto px-4">
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
            Connect With Me
          </h2>
          <p className="text-[#282831] dark:text-[#fcfaf2] max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? I'm always
            open to discussing web development opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
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
            className="bg-[#fcfaf2] dark:bg-[#222831] rounded-xl shadow-md p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block mb-2 text-[#282831] dark:text-[#fcfaf2]"
                >
                  Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#282831] dark:text-[#fcfaf2]" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 bg-[#f2eee0] py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AB4459] dark:bg-[#282831] dark:text-[#fcfaf2]"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block mb-2 text-[#282831] dark:text-[#fcfaf2]"
                >
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#282831] dark:text-[#fcfaf2]" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-[#f2eee0] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AB4459] dark:bg-[#282831] dark:text-[#fcfaf2]"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block mb-2 text-[#282831] dark:text-[#fcfaf2]"
                >
                  Message
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-[#282831] dark:text-[#fcfaf2]" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full pl-10 pr-4 py-2 bg-[#f2eee0] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AB4459] dark:bg-[#282831] dark:text-[#fcfaf2]"
                    placeholder="Your message..."
                  ></textarea>
                </div>
              </div>

              {/* Form Status Messages */}
              {formStatus.submitted && (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              {formStatus.error && (
                <div className="bg-red-100 text-red-800 p-4 rounded-lg">
                  Oops! There was an error sending your message. Please try
                  again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-fit px-2 bg-[#AB4459] text-[#fcfaf2] py-3 rounded-lg hover:bg-[#c94761] transition-colors flex items-center justify-center "
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information & Social Links */}
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
            {/* Contact Details */}
            <div className="bg-[#fcfaf2] dark:bg-[#222831] rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#282831] dark:text-[#fcfaf2]">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-[#282831] dark:text-[#fcfaf2]">
                    Email:
                  </span>
                  <p className="text-[#282831] dark:text-[#fcfaf2]">
                    ambedkaramit176@gmail.com
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    Phone:
                  </span>
                  <p className="text-[#282831] dark:text-[#fcfaf2]">
                    +1 (123) 456-7890
                  </p>
                </div>
                <div>
                  <span className="font-medium text-[#282831] dark:text-[#fcfaf2]">
                    Location:
                  </span>
                  <p className="text-[#282831] dark:text-[#fcfaf2]">
                    Mumbai, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-[#fcfaf2] dark:bg-[#222831] rounded-xl shadowmd p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#282831] dark:text-[#fcfaf2]">
                Find Me Online
              </h3>
              <div className="flex space-x-6 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-3xl ${social.color} transition-colors duration-300 hover:scale-110 dark:text-[#fcfaf2]`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConnectMe;
