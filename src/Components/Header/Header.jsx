import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Logo";

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
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: true,
    },
  ];

  return (
    <>
      <header className="">
        <nav className="flex justify-evenly flex-wrap">
          <div className="my-3">
            {/* logo */}
            <Link to="./">
              <Logo />
            </Link>
          </div>
          <div className="m-1">
            <ul className="flex justify-center items-center gap-2 flex-wrap my-3">
              {navItems.map((item) => {
                return (
                  item.active && (
                    <li key={item.name}>
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
        </nav>
      </header>
    </>
  );
}
