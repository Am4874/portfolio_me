import { useState } from "react";
import DarkLightButton from "./DarkLightButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navItems = [
  //   { name: "Home", slug: "/" },
  //   { name: "Projects", slug: "/projects" },
  //   { name: "About Me", slug: "/about-me" },
  //   { name: "Connect Me", slug: "/contact", special: true },
  // ];
  const navItems = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Skills", sectionId: "skills" },
    { name: "Projects", sectionId: "projects" },
    { name: "Connect", sectionId: "connect", special: true },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu after navigation
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      id="home"
      className="fixed top-0 left-0 w-full z-10 bg-[#fcfaf2] dark:bg-[#222831] shadow-md"
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-10">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          अmit™
        </h1>

        <nav className="hidden lg:flex gap-6">
          {navItems.map(({ name, sectionId, special }) => (
            <button
              key={name}
              onClick={() => scrollToSection(sectionId)}
              className={`font-medium text-lg ${
                special
                  ? "px-4 py-2 text-white bg-[#AB4459] rounded-full hover:bg-[#db3450] dark:bg-[#1A4870] dark:hover:bg-[#ab4459]"
                  : "hover:text-[#AB4459] dark:hover:text-[#4aabe3]"
              }`}
            >
              {name}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <DarkLightButton />
          <button
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            className="block lg:hidden p-2 rounded-full bg-[#fcfaf2] dark:bg-[#222831]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-2/3 min-w-[300px] h-full bg-[#fcfaf2] dark:bg-[#222831] shadow-lg transform transition-transform lg:hidden">
          <button
            aria-label="Close Menu"
            onClick={toggleMenu}
            className="absolute top-3 right-3 p-2 bg-[#fcfaf2] dark:bg-[#222831] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
          <ul className="p-6 space-y-4">
            {navItems.map(({ name, sectionId, special }) => (
              <li key={name}>
                <button
                  onClick={() => scrollToSection(sectionId)}
                  className={`block w-full text-left text-lg ${
                    special
                      ? "px-4 py-2 font-bold text-[#fcfaf2] bg-[#AB4459] rounded-full hover:bg-[#db3450] dark:bg-[#1A4870] dark:hover:bg-[#db3450]"
                      : "font-medium text-[#AB4459] dark:text-gray-300 hover:text-[#db3450]"
                  }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
