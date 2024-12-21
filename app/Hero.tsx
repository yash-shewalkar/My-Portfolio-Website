"use client";

import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'
import { TextGenerateEffect } from '@/components/ui/Text-generate-effect';
import CrazyButton from '@/components/ui/CrazyButton';
import { FaLocationArrow } from 'react-icons/fa';




const Hero = () => {
  return (
    <div id='home' className='pd-20 pt-36'>

      {/* <Spotlight className="absolute lg:inset-5 lg:top-30 lg:left-80 h-auto md:inset-5 md:-top-40 md:left-20 sm:-top-20 sm:left-0 " fill='white' />
      <Spotlight className="absolute h-auto inset-5 top-10 -left-10
    md:inset-5 md:-top-30 md:left-20
    sm:top-20 sm:left-0"  fill='purple' /> */}

      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-blue-200/[0.05]  flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hey,  I&apos;m Yash Shewalkar"
            className="text-center md:text-5xl lg:text-5xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4 r text-blue-200 ">
            A Tech Enthusiast and a Developer based in Pune.
          </p>

          <a href="#about">
            <CrazyButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};


export default Hero