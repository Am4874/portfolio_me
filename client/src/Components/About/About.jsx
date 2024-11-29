import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="">
      <div className="text-left mt-8 h-full">
        <h1 className="text-4xl font-bold">Hi,I Am Amit</h1>
        <h2 className="text-3xl font-bold">Software Developer</h2>
        <p className=" text-justify font-medium">
          A passionate software developer with a robust background in web
          technologies such as ReactJs, JavaScript, NodeJs, ExpressJs, MongoDB,
          SQL, HTML, and CSS. I thrive on building dynamic and responsive web
          applications that provide seamless user experiences. With a keen eye
          for detail and a commitment to writing clean, efficient code, I enjoy
          tackling complex problems and bringing innovative solutions to life.
          My journey in software development is driven by a love for continuous
          learning and a dedication to staying at the forefront of industry
          advancements. Let's create something amazing together!
        </p>
        <div className="text-left font-bold text-2xl my-5 cursor-pointer">
          <button className="px-3 rounded-md shadow hover:translate-x-1 ">
            <Link
              to={`https://drive.google.com/file/d/145oGG94wb8YCl77xxO8mF38m4WRMenED/view?usp=sharing`}
              className=" flex items-center gap-2 border-b-2 border-cyan-600"
            >
              Resume
              <span className=" pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
