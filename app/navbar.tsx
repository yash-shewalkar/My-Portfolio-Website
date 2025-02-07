"use client";

import SignIn from "@/components/sign-in";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Handle window resize and detect mobile view
  useEffect(() => {
    const handleResize = () => {
      // Set isMobileView to true if screen width is smaller than a threshold (e.g., 768px)
      setIsMobileView(window.innerWidth < 768);
    };

    // Add event listener to detect window resize
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      // Clean up event listener on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the mobile menu if switching from mobile to desktop view
  useEffect(() => {
    if (!isMobileView) {
      setIsMenuOpen(false); // Close the menu when switching to desktop view
    }
  }, [isMobileView]);

  // Handle menu open/close on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ease-in-out z-50
       backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-slate-400`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Y.S
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white mx-auto">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/#about" className="hover:underline">
            About
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/ama" className="hover:underline">
            AMA
          </Link>
          <Link href="/#contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Sign-in Button or Profile Icon for Desktop */}
        <SignIn id="desktop" className="hidden md:flex" />

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Menu for Mobile */}
      {isMenuOpen && isMobileView && (
        <div className="h-screen">
          <div className="flex flex-col justify-center items-center space-y-8 flex-grow pt-11">
            <Link
              href="/#home"
              className="text-lg hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-lg hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-lg hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/ama"
              className="text-lg hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              AMA
            </Link>
            <Link
              href="/#contact"
              className="text-lg hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
