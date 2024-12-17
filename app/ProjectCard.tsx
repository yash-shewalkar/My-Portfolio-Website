"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

const ProjectCard = () => {
  return (
    <div className=" relative flex items-center justify-center z-0 my-24 min-[320px]:-mb-14">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
        className="min-[320px]:w-72 ">
        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 bg-black rounded-lg shadow-input 
                        w-[90%] sm:w-[14rem] md:w-[16rem] lg:w-[18rem] h-[14rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem]">
          {/* Title */}
          <h3 className="font-bold text-base sm:text-lg lg:text-xl text-slate-100">
            Aceternity UI
          </h3>

          {/* Description */}
          <div className="text-sm sm:text-base font-normal text-slate-400 mt-2">
            Customizable Tailwind CSS and Framer Motion Components.
          </div>

          {/* Gradient Visual */}
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900" />
        </div>
      </PinContainer>
    </div>
  );
};

export default ProjectCard;
