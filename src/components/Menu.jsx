"use client";

import React from "react";

// import utility
import { NavLink } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// import icons
import { IoIosArrowRoundForward } from "react-icons/io";

const menu = [
  {
    img: "/menu/item1.png",
    title: "Stilton and pancetta penne",
    price: "25.00€",
  },
  {
    img: "/menu/item2.png",
    title: "Chorizo and avocado spaghetti",
    price: "24.00€",
  },
  {
    img: "/menu/item3.png",
    title: "Crayfish and black pepper tastie",
    price: "26.00€",
  },
  {
    img: "/menu/item4.png",
    title: "Orange and banana cookies",
    price: "12.00€",
  },
];

const Menu = () => {
  return (
    <section
      className="relative py-12 xl:py-24 bg-menu offsetY"
      id="menu"
    >
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-[570px] mx-auto text-center xl:text-right"
        >
          <h2 className="mb-3">Favorite Menu</h2>
          <NavLink
            to={"/"}
            className="text-green-500 flex justify-center xl:justify-end items-center mb-16"
          >
            View all
            <IoIosArrowRoundForward className="text-3xl" />
          </NavLink>
        </motion.div>
        {/* menu grid */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4 "
        >
          {menu.map((item, index) => {
            return (
              <div
                className="max-w-[270px] bg-white shadow-primary shadow-slate-300 mx-auto xl:mx-0 group"
                key={index}
              >
                <div className="overflow-hidden">
                  <img
                    className="group-hover:scale-110 transition-all duration-300"
                    width={270}
                    height={270}
                    src={item.img}
                    alt={item.name}
                  />
                </div>
                {/* title & price */}
                <div className="pt-[20px] pb-[28px] px-[30px]">
                  <NavLink to={"/"}>
                    <h3 className="font-poppins text-black mb-[14px]">
                      {item.title}
                    </h3>
                  </NavLink>
                  <div className="text-xl font-poppins font-semibold text-orange-500">
                    {item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
