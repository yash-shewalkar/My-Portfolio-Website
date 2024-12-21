import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento-grid";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";
import Aboutcard from "./AboutCard";

export function Grid() {
  return (
    <div className="pb-32 pt-36" id="about">
      <h1 className="relative text-3xl flex justify-center pb-6">About Me</h1>
      <p className="relative text-xl flex justify-center pb-4 text-purple-400">
        This will contain -tech-stack, my hobbies, my college, my intro, my email contact, my resume download, my publications
      </p>

      <Aboutcard/>
      {/* <BentoGrid
        className="max-w-4xl mx-auto grid grid-cols-1 gap-4 
                   sm:grid-cols-2 lg:grid-cols-3 auto-rows-[12rem] 
                   sm:auto-rows-[16rem] md:auto-rows-[20rem]"
      >
        {items.map((item, i) => (
          <BentoGridItem
            key={item.id}
            description={item.description}
            header={item.header}
            className={cn(
              "flex flex-col justify-between bg-gray-900 rounded-lg p-4 shadow-md",
              item.className
            )}
          />
        ))}
      </BentoGrid> */}
    </div>
  );
}

const Skeleton = () => (
  <img
    src="./sam.jpg"
    alt="Background"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"
  />
);

const SkeletonWithImage = () => (
  <div
    className="flex-1 w-full h-full bg-cover bg-center opacity-70 rounded-xl"
    style={{ backgroundImage: "url('/sam.jpg')" }}
  >
  </div>
);

const items = [
  {
    id: 1,
    description: (
      <blockquote className="text-xl italic text-neutral-300">
        "Hello! I’m Yash Shewalkar, a passionate AI & Data Science student. I love working with AI technologies and building innovative solutions."
      </blockquote>
    ),
    header: <SkeletonWithImage />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 2,
    description: (
      <p className="text-xl text-neutral-300">
        Click to download my resume.
      </p>
    ),
    header: (
      <a href="/latest_resume.pdf" download>
        <SkeletonWithImage />
      </a>
    ),
    className: "md:col-span-1 cursor-pointer",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 3,
    description: (
      <ul className="text-xl text-neutral-300">
        <li>Journal 1: AI and Data Science</li>
        <li>Journal 2: Advances in Machine Learning</li>
        <li>Journal 3: The Future of Artificial Intelligence</li>
      </ul>
    ),
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 4,
    description: (
      <div className="flex flex-col space-y-2">
        <p className="text-xl text-neutral-300">Tech Stack:</p>
        <ul className="text-neutral-300">
          <li>AI & Machine Learning</li>
          <li>Data Science</li>
          <li>Python, React.js, Node.js</li>
          <li>Docker, Kubernetes</li>
        </ul>
      </div>
    ),
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
