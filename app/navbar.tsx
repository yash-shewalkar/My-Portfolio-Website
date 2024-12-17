// components/Navbar.tsx
"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ease-in-out z-50 ${
        isScrolled ? 'bg-black opacity-90' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
         Y.S
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="#contact">Contact</Link>
          
        </div>

        {/* Deploy Button */}
        <button className="bg-white text-black py-2 px-4 rounded hidden md:block">Sign in</button>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
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
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40">
          <div className="bg-black text-white w-3/4 h-full p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl mb-4"
            >
              &times;
            </button>
            <div className="space-y-6">
              <Link href="#home" className="block">Home</Link>
              <Link href="#about" className="block">About</Link>
              <Link href="#blog" className="block">Blog</Link>
              <Link href="#contact" className="block">Contact</Link>
            
              <button className="bg-white text-black py-2 px-4 rounded mt-6 w-full">
                Sign in
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
