"use client";
import React from "react";
import Navbar from "../navbar";

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-[20%] py-[10%]">
      <Navbar />
      {/* Background Effect */}
      <div className="absolute inset-0 w-full h-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-blue-200/[0.05]">
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Informative Heading */}
      <div className="text-center mb-10 z-10">
        <h1 className="text-4xl font-bold text-white">Ask Me Anything (AMA)</h1>
        <p className="text-gray-400 mt-2 text-lg">
          This feature is coming soon! Stay tuned for exciting updates.
        </p>
      </div>

      {/* Coming Soon Message */}
      <div className="text-center z-10">
        <p className="text-lg text-gray-300 mb-4">
          Have questions? Get ready to ask me anything! This feature is in the works and will be available soon. 
        </p>
        
        {/* Notify Me Button */}
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
