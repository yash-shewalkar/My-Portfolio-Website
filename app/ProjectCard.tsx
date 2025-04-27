"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
const ProjectCard = ({
  title = "My Project",
  url = "#",
  image_scr = "/CREDIT.png",
  description = "Customizable Tailwind CSS and Framer Motion Components.",
  techStack = ["React", "Tailwind CSS", "Framer Motion"],
}) => {
  return (
    <div className="flex justify-center items-center w-full mx-auto my-8">
      <PinContainer title={title} href={url} className="min-[320px]:w-80">
        <div className="flex flex-col p-3 tracking-tight text-slate-100/50 bg-black rounded-lg shadow-input 
                      backdrop-blur-3xl dark:bg-slate-950 dark:text-slate-50">
          
          {/* Title */}
          <h3 className="font-bold text-sm sm:text-base lg:text-lg text-slate-100">
            {title}
          </h3>
    
          {/* Description */}
          <div className="text-xs sm:text-sm font-normal text-slate-400 mt-2">
            {description}
          </div>
    
          {/* Gradient Visual */}
          <div className="flex flex-1 justify-center items-center rounded-lg mt-4 p-1 overflow-hidden w-full h-56">
            <Image
              src={image_scr}
              alt="Project Image"
              className="object-contain w-56 h-full rounded-2xl"
              width={224}
              height={224}
              loading="lazy"
            />
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default ProjectCard;
