import React from "react";

import {
  react,
  nodeJs,
  expressjs,
  javascript,
  tailwindcss,
  bootstrap,
  sql,
  html,
  css3,
  python,
} from "../../assets/index";

const skills = [
  {
    id: 1,
    title: "ReactJs",
    skill: "React Js",
    Level: "Intermediate",
    img: react,
  },
  {
    id: 2,
    title: "NodeJs",
    skill: "Node Js",
    Level: "Intermediate",
    img: nodeJs,
  },
  {
    id: 3,
    title: "ExpressJs",
    skill: "Express Js",
    Level: "Intermediate",
    img: expressjs,
  },
  {
    id: 4,
    title: "Javascript",
    skill: "JavaScript",
    Level: "Intermediate",
    img: javascript,
  },
  {
    id: 5,
    title: "Tailwind",
    skill: "Tail Wind Css",
    Level: "Intermediate",
    img: tailwindcss,
  },
  {
    id: 6,
    title: "Bootstrap",
    skill: "Bootstrap",
    Level: "Intermediate",
    img: bootstrap,
  },
  {
    id: 7,
    title: "SQL",
    skill: "SQL",
    Level: "Intermediate",
    img: sql,
  },
  {
    id: 8,
    title: "HTML",
    skill: "HTML",
    Level: "Intermediate",
    img: html,
  },
  {
    id: 9,
    title: "CSS",
    skill: "CSS",
    Level: "Intermediate",
    img: css3,
  },
  {
    id: 10,
    title: "Python",
    skill: "Python",
    Level: "Intermediate",
    img: python,
  },
];
export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap m-4 dark:bg-slate-500 rounded-lg">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-4 text-2xl font-bold w-full sm:w-1/2  lg:w-1/3"
            >
              <div className="flex items-center justify-center shadow hover:translate-y-1 hover:bg-slate-100">
                <img
                  className="w-7 h-6 flex-shrink-0 mr-4"
                  src={skill.img}
                  alt={skill.title}
                />
                <span className="title-font font-medium ">{skill.skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
