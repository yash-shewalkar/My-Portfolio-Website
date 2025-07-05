"use client";
import Image from "next/image";
import Link from "next/link";
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { CustomHoverCardContent } from "@/components/CustomHoverCardContent"
import { FaLinkedin } from "react-icons/fa"
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
    <div className="sm:w-full h-full sm:p-6 p-5 flex flex-wrap justify-between items-start mx-auto bg-slate-950 rounded-lg max-w-screen-lg shadow-md">

      {/* Left Section */}
      <div className="sm:w-5/12 w-full mb-5 sm:mb-0 flex flex-col justify-between">
        {/* Profile Section */}
        <div className="flex sm:flex-col flex-row items-center sm:items-start gap-4 mb-5 justify-center">
          <Image
            src="/mypic2.png"
            alt={`Profile of ${personalInfo.name}`}
            className="rounded-lg w-32 h-32 sm:w-80 sm:h-80 object-cover mb-4 sm:mb-0 mx-auto"
            width={320}
            height={320}
            loading="lazy"
          />
          <div className="text-left sm:text-left">
            <p className="mb-3 text-sm sm:text-lg">
              <span className="font-semibold">Name:</span>{" "}
              <span className="text-neutral-400">{personalInfo.name}</span>
            </p>
            <p className="mb-3 text-sm sm:text-lg">
              <span className="font-semibold">Email:</span>{" "}
              <Link href={`mailto:${personalInfo.email}`} className="text-neutral-400">
                {personalInfo.email}
              </Link>
            </p>
            <p className="mb-3 text-sm sm:text-lg">
              <span className="font-semibold">Education:</span>{" "}
              <span className="text-neutral-400">{personalInfo.education}</span>
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-5 w-full">
          <p className="font-semibold bg-gradient-to-r from-blue-600 to-teal-500 text-center rounded-lg px-5 py-1 w-full text-base mb-5">
            Skills and Tools:
          </p>
          <div className="text-neutral-400 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2 mt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border-2 border-transparent bg-slate-900 rounded-2xl px-3 py-1 text-sm text-center
          hover:border-gradient-to-r  hover:bg-blue-700 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>


        {/* Interests Section */}
        <div>
          <p className="font-semibold bg-gradient-to-r from-blue-600 to-teal-500 text-center rounded-lg px-5 py-1 mb-5 w-full text-base">
            Interests:
          </p>
          <div className="text-neutral-400 grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2 mt-2 ">
            {interests.map((interest) => (
              <span
                key={interest}
                className="border-2 border-transparent bg-slate-900 rounded-2xl px-2 py-1 text-sm text-center 
        whitespace-nowrap hover:border-gradient-to-r hover:bg-blue-700 transition-all duration-300 cursor-pointer"
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
            {/* <p className="mt-3">{aboutMe}</p> */}
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Passionate about scalable backend systems, AI-driven solutions, and data engineering, with 18 months of hands-on experience delivering real-world projects. Key work includes JustQL, an AI-powered SQL query assistant improving query accuracy by 60%, and a Smart Number Plate Detection System using Firebase for real-time validation. Skilled in backend development (Next.js, FastAPI, Flask, Express.js), databases (MongoDB, SQL, Prisma ORM), and tools like Docker, Git, and TypeScript, with full-stack experience using React and Next.js. Recognized as a runner-up at{' '}

              <HoverCard>
                <HoverCardTrigger
                  className="relative inline-block text-primary font-medium transition-all duration-200 cursor-pointer hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  UBS India Hackathon
                </HoverCardTrigger>

                <CustomHoverCardContent
                  logo={<FaLinkedin className="w-6 h-6 text-blue-500" />}
                  title="@UBSIndiaHackathon"
                  description="Runner-up among 50+ teams for building an AI based learning platform for rural students with real-time AI based voice interview system during UBS India Hackathon 2025."
                  linkUrl="https://www.linkedin.com/posts/yash-shewalkar_hackathon-ubs-mitwpu-activity-7314294463051259904-MLPQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3-y5wBaQAcbwa0j6_GTBqQeuy5bobfNzk"
                  date="Posted April 2025"
                />
              </HoverCard>
              {' '}and top 8 finalist among 230+ teams at a{' '}
              <HoverCard>
                <HoverCardTrigger
                  className="relative inline-block text-primary font-medium transition-all duration-200 cursor-pointer hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  INSPIRON 4.0
                </HoverCardTrigger>

                <CustomHoverCardContent
                  logo={<FaLinkedin className="w-6 h-6 text-blue-500" />}
                  title="@INSPIRON4.0"
                  description="Secured a place in the top 8 finalists out of 230+ teams at a national-level hackathon for an end-to-end Natural Language to SQL generation AI project."
                  linkUrl="https://www.linkedin.com/in/yash-shewalkar/overlay/1751741482774/single-media-viewer/?profileId=ACoAAD3-y5wBaQAcbwa0j6_GTBqQeuy5bobfNzk"
                  date="Posted MAY 2025"
                />
              </HoverCard>

              , with a strong drive to contribute to innovative AI, backend, full-stack, or data engineering roles.
            </p>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-around items-center mt-5">
          {socialLinks.map(({ href, icon, label }) => (
            <div key={label} className="flex items-center justify-center">
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="shadow-2xl shadow-neutral-600 p-2 rounded-full bg-slate-800 hover:bg-blue-700 transition-all duration-300"
              >
                {renderIcon(icon)}
              </Link>
              <span className="text-neutral-400 text-sm ml-2 hidden md:block">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
