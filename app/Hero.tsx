"use client";

import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'
import { TextGenerateEffect } from '@/components/ui/Text-generate-effect';
import CrazyButton from '@/components/ui/CrazyButton';
import { FaLocationArrow } from 'react-icons/fa';




const Hero = () => {
  return (
    <div id='home' className='pd-20 pt-36 '>

      {/* <Spotlight className="absolute lg:inset-5 lg:top-30 lg:left-80 h-auto md:inset-5 md:-top-40 md:left-20 sm:-top-20 sm:left-0 " fill='white' />
      <Spotlight className="absolute h-auto inset-5 top-10 -left-10
    md:inset-5 md:-top-30 md:left-20
    sm:top-20 sm:left-0"  fill='purple' /> */}

      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-blue-200/[0.05]  flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      </div>

      <div className="flex justify-center relative my-20 z-10 w-full ">
        <div className="w-full md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center  ">
          <TextGenerateEffect
            words="Hey,  I&apos;m Yash Shewalkar"
            className="text-center w-full"
          />
          <div id="content" className="flex flex-col md:flex-row justify-between items-center md:items-center w-full p-4 md:p-8">
            {/* Left Container */}
            <div id="left" className="w-full p-4 text-center">
              <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
                A Tech Enthusiast and a Developer based in Pune, pursuing BTECH at VIT PUNE
              </p>
            </div>

          </div>

          <div className='flex flex-col md:flex-row justify-center items-center md:items-center w-full '>

            <a href="#projects" className='mx-6 my-4 w-56'>
              <CrazyButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                  buttonClasses="h-20"
               
              />
            </a>
            <a href="\latest_resume.pdf"  target="_blank" className='mx-6 my-4 w-56'  rel="noopener noreferrer">
              <CrazyButton
                title="Resume"
                icon={<FaLocationArrow />}
                position="right"
                buttonClasses="h-20"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero