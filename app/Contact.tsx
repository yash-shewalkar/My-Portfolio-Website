"use client";

import React from "react";
import FloatingDockDemo from "./ContactDock";
import { FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="p-4 pt-6">
      {/* Responsive flex container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 pb-6 text-center md:text-left">
        {/* Heading */}
        <h1 className="text-4xl sm:text-3xl font-semibold">Like my Work?</h1>

        {/* Contact Button */}
        <a
          href="#about"
          className="group text-xl sm:text-2xl font-semibold relative px-6 py-3 border-2 border-blue-500 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white rounded-lg shadow-md hover:shadow-blue-400 flex items-center gap-2"
        >
          Contact Me!
          <FaLocationArrow className="transition-transform duration-300 group-hover:translate-x-2" />
        </a>
      </div>

      {/* Floating Dock */}
      <FloatingDockDemo />

      {/* Footer */}
      <footer className="text-white pb-6 mt-16 sm:mt-24">
        <div className="flex justify-center">
          <p className="text-xs sm:text-sm">&copy; 2024 Yash Shewalkar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
