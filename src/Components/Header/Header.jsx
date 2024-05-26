import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import DarkLightButton from "../DarkLightButton";

export default function Header() {
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Skills",
      slug: "/skills",
      active: true,
    },
    {
      name: "Project",
      slug: "/project",
      active: true,
    },
    {
      name: "Blogs",
      slug: "/blogs",
      active: true,
    },
    // {
    //   name: "About",
    //   slug: "/about",
    //   active: true,
    // },
    // {
    //   name: "Contact",
    //   slug: "/contact",
    //   active: true,
    // },
  ];

  return (
    <>
      <header className="mt-12  m-5 shadow dark:bg-slate-700 rounded-lg">
        <nav className="p-4 flex justify-around items-center">
          {/* <div className="my-3 text-xl font-medium">
          
            <Link to="./">
              <Logo />
            </Link>
          </div> */}
          <div>
            <ul className="flex justify-center items-center flex-wrap my-3">
              {navItems.map((item) => {
                return (
                  item.active && (
                    <li className=" font-medium text-xl mx-2" key={item.name}>
                      <button onClick={() => navigate(item.slug)} className="">
                        {item.name}
                      </button>
                    </li>
                  )
                );
                // todo: auth
              })}
            </ul>
          </div>

          <DarkLightButton />
        </nav>
      </header>
    </>
  );
}
