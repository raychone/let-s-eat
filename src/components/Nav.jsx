// @ts-nocheck
/* eslint-disable react/prop-types */
import React from "react";

import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    path: "home",
    name: "home",
    offset: -50,
  },
  {
    path: "menu",
    name: "menu",
    offset: -50,
  },
  {
    path: "about",
    name: "about",
    offset: -150,
  },
  {
    path: "contact",
    name: "contact",
    offset: 0,
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            key={index}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            className={`${linkStyles}`}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default Nav;
