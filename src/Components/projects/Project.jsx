import React from "react";
import { restaurantsite, blogsite, portfolio, chatapp } from "../../assets";

const Project = ({ title, description, image, url }) => {
  return (
    <div className="project-card bg-white rounded-lg shadow-md overflow-hidden dark:bg-slate-600 dark:text-stone-100 m-8">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700 mb-3 dark:text-stone-100">{description}</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline dark:text-stone-100 dark:hover:text-blue-400"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Chat Application",
      description: `Developed a simple web chat application using React JS as a front end and Node JS, Express JS as a back end Socket.io for real
      time chat communication channel between a client and a server.
      In this application we can create a room with room id and chat with multiple users at same time in chat room.`,
      image: chatapp,
      url: "https://github.com/Am4874/Chat_Application",
    },
    {
      title: "Portfolio Website|",
      description: `Developed a portfolio website using React JS as front end and styling using CSS.
      This portfolio website to show an information and skills of user and contact information of user.`,
      image: portfolio,
      url: "https://portfoliio-6m07.onrender.com/",
    },
    {
      title: "Personal Blog Website",
      description: `Developed a Personal Blog Website using JavaScript for behaviors and Styling using CSS and Html for struct of site.
      This frontend website to a post personal blog and interest.`,
      image: blogsite,
      url: "https://am4874.github.io/personal_blogs_website/",
    },
    {
      title: "Online Restaurant Site",
      description: `Developed an Online restaurant site using JavaScript, CSS and HTML.In this frontend website we can Book a table, see a menu and order a food in restaurant and review a food also see a chef
      who preparing a food.`,
      image: restaurantsite,
      url: "https://am4874.github.io/Restaurant_website/",
    },
  ];

  return (
    <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
};

export default Projects;
