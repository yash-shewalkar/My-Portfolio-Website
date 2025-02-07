"use client";

import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
  IconBrandInstagram,
  IconBrandLeetcode,
} from "@tabler/icons-react";

import React from "react";
import { personalInfo, skills, interests, aboutMe, socialLinks } from "../data";
import ContactForm from "@/components/ui/ContactForm";

const AboutCard: React.FC = () => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <IconBrandGithub />;
      case "leetcode":
        return <IconBrandLeetcode />;
      case "linkedin":
        return <IconBrandLinkedin />;
      case "instagram":
        return <IconBrandInstagram />;
      default:
        return null;
    }
  };

  return (
    <div className="sm:w-full h-full sm:p-10 p-7 flex flex-wrap justify-between items-start mx-auto bg-slate-950 rounded-xl max-w-screen-xl shadow-lg">
      {/* Left Section */}
      <div className="sm:w-5/12 w-full mb-5 sm:mb-0 flex flex-col justify-between">
        {/* Profile Section */}
        <div className="flex sm:flex-col flex-row items-center sm:items-start gap-4 mb-5 justify-center">
          <img
            src="/mypic2.png"
            alt={`Profile of ${personalInfo.name}`}
            className="rounded-lg w-32 h-32 sm:w-80 sm:h-80 object-cover mb-4 sm:mb-0 mx-auto"
          />
          <div className="text-left sm:text-left">
            <p className="mb-3 text-sm sm:text-lg">
              <span className="font-semibold">Name:</span>{" "}
              <span className="text-neutral-400">{personalInfo.name}</span>
            </p>
            <p className="mb-3 text-sm sm:text-lg">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-neutral-400"
              >
                {personalInfo.email}
              </a>
            </p>
            <p className="mb-3 text-sm sm:text-lg">
              <span className="font-semibold">Education:</span>{" "}
              <span className="text-neutral-400">{personalInfo.education}</span>
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-5">
          <p className="font-semibold bg-gradient-to-r from-blue-600 to-teal-500 text-center rounded-lg px-5 py-1 w-full text-base">
            Skills and Tools:
          </p>
          <div className="text-neutral-400 flex flex-wrap gap-2 mt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border-2 border-white rounded-2xl px-3 py-1 bg-slate-900 hover:bg-blue-700 transition-all duration-300 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <p className="font-semibold bg-gradient-to-r from-blue-600 to-teal-500 text-center rounded-lg px-5 py-1 w-full text-base">
            Interests:
          </p>
          <div className="text-neutral-400 flex flex-wrap gap-2 mt-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="border-2 border-white rounded-2xl px-3 py-1 bg-slate-900 hover:bg-blue-700 transition-all duration-300 text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="sm:w-6/12 w-full flex flex-col justify-between">
        {/* About Me Section */}
        <div className="mb-5">
          <div className="group w-fit">
            <p className="font-semibold text-3xl">About Me</p>
            <div className="bg-blue-600 h-1 mt-2 w-2/3"></div>
          </div>
          <div className="text-neutral-400 sm:mt-4 mt-8 sm:text-base text-lg font-light">
            <p className="mt-3">{aboutMe}</p>
            <div>
              <ContactForm  />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-around items-center mt-5">
          {socialLinks.map(({ href, icon, label }) => (
            <div key={label} className="flex items-center justify-center">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="shadow-2xl shadow-neutral-600 p-2 rounded-full bg-slate-800 hover:bg-blue-700 transition-all duration-300"
              >
                {renderIcon(icon)}
              </a>
              <span className="text-neutral-400 text-sm ml-2 hidden md:block">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
