import React from "react";
import { Link } from "react-router-dom"; // For navigation links
import { classNames } from "classnames"; // For applying Tailwind CSS classes conditionally

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          Your App Name
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className={classNames("text-gray-300 hover:text-white", {
                active: true,
              })}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>

          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
