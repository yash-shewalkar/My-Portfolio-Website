"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

const ProjectCard = ({title = "my project", url = "#", image_scr = "/CREDIT.png"}) => {
  return (
    <div className="relative flex items-center justify-center z-0 my-36 min-[320px]:-mb-14">
    <PinContainer title={title} href={url} className="min-[320px]:w-72">
      <div className="flex flex-col p-4 tracking-tight text-slate-100/50 bg-black rounded-lg shadow-input 
                      w-[90%] sm:w-[14rem] md:w-[16rem] lg:w-[18rem] min-h-[16rem] lg:min-h-[22rem] ">
        
        {/* Title */}
        <h3 className="font-bold text-base sm:text-lg lg:text-xl text-slate-100">
          {title}
        </h3>
  
        {/* Description */}
        <div className="text-sm sm:text-base font-normal text-slate-400 mt-2">
          Customizable Tailwind CSS and Framer Motion Components.
        </div>
  
        {/* Gradient Visual */}
        <div className="flex flex-1 w-full rounded-lg mt-4 p-1 overflow-hidden">
          <img
            src={image_scr}
            alt=""
            className="object-contain w-full h-full rounded-2xl "
          />
        </div>
      </div>
    </PinContainer>
  </div>
  
  );
};

export default ProjectCard;
