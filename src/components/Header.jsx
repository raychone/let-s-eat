// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// import componente
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //detect when scroll used
      setActive(window.scrollY > 100);
    };
    //add eventListener
    window.addEventListener("scroll", handleScroll);
    // clear eventListener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? "bg-black py-2" : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        {/*logo,nav,btn*/}
        <div className="flex items-center justify-between">
          {/* logo */}
          <ScrollLink to={"home"}>
            <img
              width={100}
              height={45}
              src="/xletSEatx.png"
              alt="logo"
            />
          </ScrollLink>
          {/* nav */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white/80"
            linkStyles="capitalize"
          />
          {/* btn */}
          <ScrollLink
            to="reservation"
            smooth={true}
            offset={-50}
          >
            <Button
              variant="orange"
              size="sm"
            >
              Book a table
            </Button>
          </ScrollLink>
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
