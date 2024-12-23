"use client";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconHome,
    IconMail,
    IconBrandInstagram,
    IconBrandLeetcode

  } from "@tabler/icons-react";

import React from "react";

const AboutCard: React.FC = () => {
    return (
        <div className=" sm:w-5/6 w-full h-5/6 sm:p-10 p-7 sm:flex justify-between items-center mx-auto bg-slate-950 rounded-xl  ">
            
            {/* Left Section */}
            <div className="sm:w-5/12 h-full">
            
                {/* Profile Section */}
                <div className="sm:h-1/2 w-full sm:flex justify-between items-start ">
                    <img
                        src="/yash.png"
                        alt="Profile"
                        className="sm:h-full rounded-lg w-48 mx-2"
                        />
                    
                    <div className="sm:my-0 my-3">
                        <div className="mb-3">
                            <span className="text-lg">Name:</span>
                            <span className="text-neutral-400"> Yash Shewalkar</span>
                        </div>
                        <div className="mb-3">
                            <span className="text-lg">Email:</span>
                            <span className="text-neutral-400"> iamyashshewalkar@gmail.com</span>
                        </div>
                        <div className="mb-3">
                            <span className="text-lg">Education:</span>
                            <span className="text-neutral-400"> Btech-AIDS</span>
                        </div>
                        <div className="mb-3">
                            <span className="text-lg">Contact:</span>
                            <span className="text-neutral-400"> (+91) 6378560286</span>
                        </div>
                    </div>
                        
                   
                </div>

                {/* Skills Section */}
                <div className="mt-5">
                    <p className="font-semibold text-lg mb-2 bg-gradient-to-r from-blue-600 to-teal-500 text-center rounded-lg px-5 py-1 w-full">
                        Skills:
                    </p>
                    <div className="text-neutral-400 sm:text-center w-full flex flex-wrap gap-x-2">
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">HTML</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">CSS</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">JavaScript</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">TypeScript</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">C++</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">Git</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">GitHub</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">React.js</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">Node.js</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">Express</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">MongoDB</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">Python</span>
                    </div>
                </div>

                {/* Interests Section */}
                <div className="mt-5">
                    <p className="font-semibold text-lg mb-2 bg-gradient-to-r from-blue-600 to-teal-500 text-center rounded-lg px-5 py-1 w-full">
                        Interests:
                    </p>
                    <div className="text-neutral-400 sm:text-center flex flex-wrap gap-x-2">
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">IoT</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">Web3,</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">Natural Language Processing,</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">Computer Vision,</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">AI,</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">Machine Learning,</span>
                        <span className="border-2 border-white rounded-2xl px-2 bg-slate-900 my-2">Blockchain</span>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="sm:w-6/12 sm:h-fit h-full sm:my-0 relative">
                {/* About Me Section */}
                <div className="group w-fit">
                    <p className="font-semibold text-3xl">About Me</p>
                    <div className="bg-blue-600 h-1 mt-2 w-2/3"></div>
                </div>
                <div className="text-neutral-400 sm:mt-4 mt-8 sm:text-base sm:font-normal text-[1.25rem] font-light">
                    <p>
                        Hello, I'm Yash Shewalkar, currently a third-year BTECH student at VIT PUNE. My journey
                        into the world of coding began with a fervent passion for technology
                        and a constant curiosity to explore new things. As a dedicated coder,
                        I find joy in unraveling the intricacies of programming and
                        experimenting with the latest in the tech realm.
                    </p>
                    <p>
                        Recently, I took a leap into web development, culminating in the
                        creation of my first website. This project serves as a testing
                        ground for my burgeoning skills, a testament to my commitment to
                        continuous growth in the ever-evolving world of technology.
                    </p>
                    <p>
                        In essence, I am Yash Shewalkar—an aspiring coder, avid learner, and
                        technology enthusiast on a journey to turn passion into proficiency,
                        one line of code at a time.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex sm:justify-around justify-between items-center w-full sm:mt-5 mt-10">
                    <a
                        href="https://github.com/yash-shewalkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shadow-2xl shadow-neutral-600"
                    >
                        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                    </a>
                  
                    <a
                        href="https://leetcode.com/u/yash_shewalkar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shadow-2xl shadow-neutral-600"
                    >
                        <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                    </a>
                    <a
                        href="https://in.linkedin.com/in/yash-shewalkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shadow-2xl shadow-neutral-600"
                    >
                        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                    </a>
                    <a
                        href="https://www.instagram.com/yash_shewalkar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shadow-2xl shadow-neutral-600"
                    >
                        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;
