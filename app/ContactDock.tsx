import React from 'react'
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconHome,
    IconMail,
    IconBrandInstagram

  } from "@tabler/icons-react";

export function FloatingDockDemo (){
    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#home",
        },
    
        {
          title: "X.com",
          icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://x.com/shewalkar_yash",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://github.com/yash-shewalkar",
        },
        {
            title: "LinkedIn",
            icon: (
              <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/yash-shewalkar/",
        },
        {
            title: "Gmail",
            icon: (
              <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=iamyashshewalkar@gmail.com",
        },
        {
            title: "Instagram",
            icon: (
              <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/yash_shewalkar/",
          },
      ];
      return (
        <div className="flex items-center justify-center h-[35rem] w-full">
          <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          />
        </div>
      );
    

}

export default FloatingDockDemo