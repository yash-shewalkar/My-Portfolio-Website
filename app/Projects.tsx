"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="px-6 pt-36 pb-12 relative">
      {/* Background Grid Layout */}
      <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.05] flex items-center justify-center absolute top-0 left-0 z-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content above the grid */}
      <div className="relative z-10">
        {/* Header */}
        <h1 className="text-3xl text-center pb-6">Projects Section</h1>
        <p className="text-xl text-center pb-8 text-purple-400">
          This will contain -projects- image, title, GitHub link.
        </p>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
