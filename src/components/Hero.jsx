"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0"
      id="home"
    >
      <div className="container mx-auto">
        {/* text & img */}
        <div className="flex items-center xl:h-[960px]">
          {/* text */}
          <div className="w-full xl:max-w-[460px] text-center xl:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white/80 mb-7"
            >
              A taste of local
              <br /> flavours
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white/80 font-semibold mb-7"
            >
              by:
              <span className="text-orange-400/80 pl-2">
                Chef Wasabi Yokozuna
              </span>
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white/80 mb-12 max-w-lg mx-auto lx:max-w-none xl:mx-0"
            >
              “In the childhood memories of every good cook, there is a big
              kitchen, a warm stove, a hot pot and a mother.„
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <ScrollLink
                to="reservation"
                offset={-150}
              >
                <Button>Let&apos;s eat</Button>
              </ScrollLink>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-0"
          >
            <img
              width={756}
              height={682}
              src="/hero/plate.png"
              alt="plate"
            />
          </motion.div>
        </div>
      </div>
      {/* coffee img */}
      <motion.div
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="hidden xl:flex xl:relative xl:-top-36"
      >
        <img
          width={386}
          height={404}
          src="/hero/coffee.png"
          alt="coffee"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
