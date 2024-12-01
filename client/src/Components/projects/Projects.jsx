import React, { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Am4874/repos"
        );
        const data = await response.json();
        // console.log(response);
        const filterProjects = data
          .filter(
            (project) => project.private === false && project.fork === false
          )
          .slice(0, 6);
        // console.log(filterProjects);
        setProjects(filterProjects);
      } catch (error) {
        console.error("Error Fetching Projects : ", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2 className="m-2 font-medium text-2xl text-center"> projects </h2>
      {projects.map((project) => (
        // console.log(project);
        <div className="m-3 text-center font-normal" key={project.id}>
          <h3 className="text-xl">{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.html_url}></a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
