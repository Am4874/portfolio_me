import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import skills from "./skills.json";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills & Technologies
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {skills.map((skill) => (
            <div key={skill.id} className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="flex items-center">
                <BadgeCheckIcon className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-black">
                  {skill.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
