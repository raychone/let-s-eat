import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center"
      id="about"
    >
      {/* text */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:pl-[135px]"
      >
        <h1 className="mb-9">Let&apos;s Eat And Talk About Eat </h1>
        <p className="mb-8">
          I believe that the most important part of our relationship with food
          is what we think about food. What we think and feel when it comes to
          eating.
        </p>
        <p className="mb-10">
          Somehow, the relationship of love and the deep attention given to food
          are the prerogative of the human species. Yes, yours and mine.
        </p>
        <Button>Read more</Button>
      </motion.div>
      {/* image */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          width={705}
          height={771}
          src="/about/img.png"
          alt="quizine"
          className="hidden xl:flex"
        />
      </motion.div>
    </section>
  );
};

export default About;
