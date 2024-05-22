import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center m-8">
      <h1 className="text-4xl font-bold">Hii 👋, I Am Amit</h1>
      <p className=" text-center font-medium">
        A passionate software developer with a robust background in web
        technologies such as ReactJs, JavaScript, NodeJs, ExpressJs, MongoDB,
        SQL, HTML, and CSS. I thrive on building dynamic and responsive web
        applications that provide seamless user experiences. With a keen eye for
        detail and a commitment to writing clean, efficient code, I enjoy
        tackling complex problems and bringing innovative solutions to life. My
        journey in software development is driven by a love for continuous
        learning and a dedication to staying at the forefront of industry
        advancements. Let's create something amazing together!
      </p>
      <div className="text-center font-bold text-3xl my-5 cursor-pointer bg-sky-400 ">
        <Link
          to={`https://drive.google.com/file/d/1l_iRgafSw5ydNrSR4zworxBYOBXZa39Z/view`}
        >
          View Resume
        </Link>
      </div>
    </div>
  );
}

export default Home;
