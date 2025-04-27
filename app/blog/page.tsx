"use client";
import React from "react";
import { blogs } from "@/data";
import Navbar from "../navbar";
import Image from "next/image";
import Link from "next/link";
const Blogs = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-[10%] lg:px-[20%] py-[25%] lg:py-[10%]">


      <Navbar />
      {/* Background Effect */}
      <div className="absolute inset-0 w-full h-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-blue-200/[0.05]">
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Informative Heading */}
      <div className="text-center mb-10 z-10">
        <h1 className="text-4xl font-bold text-white">My Blogs</h1>
        <p className="text-gray-400 mt-2 text-lg">
          Explore my thoughts and insights on development, and tech trends.
        </p>
      </div>

      {/* Blogs Grid with Max Width Lock */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1000px] mx-auto">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gray-950 border border-gray-700 rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:border-blue-500"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover group-hover:opacity-90"
              width={400}
              height={200}
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white group-hover:text-blue-400">
                {blog.title}
              </h2>
              <p className="text-gray-400 mt-2 text-sm">{blog.read}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* Footer */}
      <footer className="text-white pb-6 mt-16 sm:mt-24 z-10 w-full mx-auto absolute bottom-0">
        <div className="flex justify-center">
          <p className="text-xs sm:text-sm">&copy; 2024 Yash Shewalkar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;
