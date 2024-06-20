import React from "react";
import {
  restaurantsite,
  blogsite,
  portfolio,
  chatapp,
  product_design,
  blog_app,
} from "../../assets";

const Project = ({ title, description, image, url, liveUrl }) => {
  return (
    <div className="project-card bg-white rounded-lg shadow-md overflow-hidden dark:bg-slate-600 dark:text-stone-100 m-8">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700 mb-3 dark:text-stone-100">{description}</p>
        {url && (
          <div className="flex gap-2">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline dark:text-stone-100 dark:hover:text-blue-400"
            >
              Preview
            </a>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline dark:text-stone-100 dark:hover:text-blue-400"
            >
              Github Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Blog Application",
      description: `Developed a blog web application leveraging Node.js and Express.js. The front end was ·	The application features a comprehensive backend that supports reading and writing blog posts. Additionally, it includes a user authentication system that allows signed-in users to comment on blogs`,
      image: blog_app,
      url: "https://github.com/Am4874/Chat_Application",
      liveUrl: "https://blog-application-mfov.onrender.com/",
    },
    {
      title: "Chat Application",
      description: `Developed a straightforward web chat application utilizing React JS for the front end and Node JS, Express JS for the backend. Socket.io was implemented to facilitate real-time chat communication between the client and the server.
      ·	This application has the capability to create a chat room using a room ID, allowing multiple users to engage in simultaneous conversations within the same chat room.`,
      image: chatapp,
      url: "https://github.com/Am4874/Chat_Application",
      liveUrl: "https://github.com/Am4874/Chat_Application",
    },
    {
      title: "Portfolio Website|",
      description: `Developed a portfolio website using React JS as front end and styling using CSS.
      This portfolio website to show an information and skills of user and contact information of user.`,
      image: portfolio,
      url: "https://github.com/Am4874/portfolio",
      liveUrl: "https://portfoliio-6m07.onrender.com/",
    },
    {
      title: "Product Designer Landing Page ",
      description: `Constructed a Product Designer Landing Page using JavaScript,CSS,HTML. Animated design using Locomotive Design.`,
      image: product_design,
      url: "https://github.com/Am4874/Product-Deigner",
      liveUrl: "https://am4874.github.io/Product-Deigner/",
    },
    {
      title: "Personal Blog Website",
      description: `Constructed a portfolio website utilizing React JS for the front end, with styling accomplished through CSS
      This portfolio website serves as a platform to showcase the user’s skills and information, as well as providing a means to contact the user.
`,
      image: blogsite,
      url: "https://github.com/Am4874/personal_blogs_website",
      liveUrl: "https://am4874.github.io/personal_blogs_website/",
    },
    {
      title: "Online Restaurant Site",
      description: `I developed an online restaurant website using JavaScript, CSS, and HTML.
      This front-end website offers features such as table booking, viewing the menu, and ordering food. It also provides the ability to review dishes and see the chefs who prepare the food.
`,
      image: restaurantsite,
      url: "https://github.com/Am4874/Restaurant_website",
      liveUrl: "https://am4874.github.io/Restaurant_website/",
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
