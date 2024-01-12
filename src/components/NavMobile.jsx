/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from "react";

// import utility
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";

// import icons
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";

// import components
import { Button } from "./ui/button";

const links = [
  {
    icon: <RiHomeFill />,
    path: "home",
    name: "home",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    path: "menu",
    name: "menu",
    offset: -50,
  },
  {
    icon: <FaUsers />,
    path: "about",
    name: "about",
    offset: -50,
  },
  {
    icon: <FaEnvelope />,
    path: "contact",
    name: "contact",
    offset: -0,
  },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${containerStyles}`}>
      {/* nav grigger button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className="text-3xl text-white/80 transition-all duration-200" />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className="flex flex-col items-center justify-between h-full bg-orange-400/20">
          {/* nav close btn */}
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-4xl text-white/80 absolute w-10 h-10 left-8 top-8 bg-green-400 flex justify-center items-center"
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <ScrollLink to={"home"}>
            <img
              width={128}
              height={56}
              src="/xletSEatx.png"
              alt="logo"
            />
          </ScrollLink>
          {/* links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <ScrollLink
                  key={index}
                  to={link.path}
                  offset={link.offset}
                  smooth={false}
                  className="flex gap-x-3 items-center"
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </ScrollLink>
              );
            })}
          </div>
          {/* btn */}
          <ScrollLink
            to="reservation"
            smooth={true}
            offset={-150}
          >
            <Button variant="orange">Book a table</Button>
          </ScrollLink>
        </div>
      </aside>
    </nav>
  );
};

export default NavMobile;
