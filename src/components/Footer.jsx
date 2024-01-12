import React from "react";

// imports motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="bg-footer bg-cover bg-no-repeat text-white pt-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          {/* logo */}
          <div className="w-[300px] mb-8 xl:mb-0">
            <ScrollLink to="home">
              <img
                src="/xletSEatx.png"
                alt="logo"
                width={90}
                height={36}
              />
            </ScrollLink>
          </div>
          {/* grid items */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            {/* blog */}
            <div>
              <h4 className="font-semibold mb-5">Blog</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <ScrollLink to="/">
                    Passionate Restaurant Led by the talented Japanese Chef
                    Wasabi Yokozuna, this new gastronomic table revisits ...
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/">
                    Each space in the restaurant has its own style and
                    signature:...
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/">
                    Evolving throughout the day, it&apos;s the ideal place to
                    sit down ...
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/">
                    At nightfall, it plunges visitors into a hushed
                    atmosphere...
                  </ScrollLink>
                </li>
              </ul>
            </div>
            {/* item */}
            <div>
              <h4 className="font-semibold mb-5">New Item</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <ScrollLink to="/">
                    Passionate Restaurant Led by the talented Japanese Chef
                    Wasabi Yokozuna, this new gastronomic table revisits ...
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/">
                    Each space in the restaurant has its own style and
                    signature: The central island with its custom-made benches
                    and surprising lighting...
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/">
                    Evolving throughout the day, it&apos;s the ideal place to
                    sit down, share and ...
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/">
                    At nightfall, it plunges visitors into a hushed atmosphere
                    for intimate dining or a romantic moment as a couple.
                  </ScrollLink>
                </li>
              </ul>
            </div>
            {/* social */}
            <div>
              <h4 className="font-semibold mb-5">Social Media</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <ScrollLink to="/">Facebook</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/">Youtube</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/">Instagram</ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* copyright text */}
        <div className="py-4 border-t border-white/10">
          <p className="text-center text-white/60 text-sm">
            Copyright &copy; Let&apos;s eat 2023
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
