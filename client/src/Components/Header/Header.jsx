import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DarkLightButton from "../DarkLightButton";
import { Logo } from "../Logo";

export default function Header() {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Skills", slug: "/skills", active: true },
    { name: "Projects", slug: "/projects", active: true },
    { name: "Blogs", slug: "/blogs", active: true },
    { name: "About Me", slug: "/about-me", active: true },
    { name: "Contact Me", slug: "/contact", active: true },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#7EACB5] text-[#a53f2b] dark:bg-slate-800 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 sm:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-36" />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.slug)}
              className={`hover:text-blue-500 font-bold text-lg ${
                item.slug === "/" ? "text-[#243642]" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">

          {/* Theme Toggle */}
          <DarkLightButton />

          {/* Mobile Menu Toggle */}
          <button
            id="toggleOpen"
            className="block lg:hidden p-2 rounded-full bg-gray-200 dark:bg-slate-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-black dark:fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="collapseMenu"
        className="fixed top-0 left-0 w-2/3 min-w-[300px] h-full bg-white dark:bg-slate-800 shadow-lg transform -translate-x-full transition-transform lg:hidden"
      >
        <button
          id="toggleClose"
          className="absolute top-3 right-3 p-2 bg-gray-200 dark:bg-slate-700 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-black dark:fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        <ul className="p-6 space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                className="block w-full text-left text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
