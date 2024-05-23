import React from "react";

function Footer() {
  return (
    <footer className="bg-white font-medium text-2xl rounded-lg shadow dark:bg-gray-700 m-4">
      <div>
        <div className="w-full max-w-screen-xl flex justify-around flex-wrap mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
            © 2024
            <a href="https://amitdev.com/" className="hover:underline mx-2">
              Amit™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
