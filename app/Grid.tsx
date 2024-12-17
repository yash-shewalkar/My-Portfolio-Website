"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Grid() {
  return (
    <div className="pb-32 pt-36" id="about">
      <h1 className="relative text-3xl flex justify-center pb-6">About Me</h1>
      <p className="relative text-xl flex justify-center pb-4 text-purple-400">
        This will contain -tech-stack, my hobbies, my college, my intro, my email contact, my resume download, my publications
      </p>
      <BentoGrid
        className="max-w-4xl mx-auto grid grid-cols-1 gap-4 
                   sm:grid-cols-2 lg:grid-cols-3 auto-rows-[12rem] 
                   sm:auto-rows-[16rem] md:auto-rows-[20rem]"
      >
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn(
              "flex flex-col justify-between bg-gray-900 rounded-lg p-4 shadow-md",
              item.className
            )}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <img
    src="./sam.jpg"
    alt=""
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"
  />
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
