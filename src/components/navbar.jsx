"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Accueil" },
  { url: "/about", title: "À propos" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate:0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3 whitespace-nowrap">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */} 
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/">
          <Image
            src="/jaylogo.png"
            alt="jay logo"
            width={40}
            height={40}
            className="mt-4 sm:w-16 sm:h-16"
          />
        </Link>
      </div>
      {/* SOCIALS */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end pr-6">
        <Link
          href="https://github.com/Jay-Jay-19"
          target={"_blank"}
        >
          <Image
            src="/github.png"
            alt="github logo"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/gilbert-jay-m-598a0b2b1/"
          target={"_blank"}
        >
          <Image
            src="/linkedin.png"
            alt="linkedin logo"
            width={30}
            height={30}
          />
        </Link>
      </div>
      {/* RESPONSIVE MENU */} 
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-6 flex flex-col justify-between z-50 relative"
          onClick={(() => setOpen(!open))}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-0.5 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-0.5 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-0.5 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} className="" key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;