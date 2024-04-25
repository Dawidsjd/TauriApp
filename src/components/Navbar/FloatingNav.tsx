"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { cn } from "../../utils/cn";


export const FloatingNav = ({
    navItems,
    className,
  }: {
    navItems: {
      name: string;
      link: string;
      icon?: JSX.Element;
    }[];
    className?: string;
  }) => {
    const [visible, setVisible] = useState(true);
  
    return (
      <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
            className
          )}
          style={{ backgroundColor: '#141518' }} // Dodaj styl tła
        >
            {navItems.map((navItem: any, idx: number) => (
              <a
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </a>
            ))}
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
              <span>Login</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent  h-px" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };