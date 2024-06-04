import React from "react";
import me from "./assets/me.png";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaCloudDownloadAlt,
  FaReact,
} from "react-icons/fa";
import hand from "./assets/hand.png";

import { Button } from "@material-tailwind/react";
import { motion, stagger } from "framer-motion";
const Hero = () => {
  const social = [
    <a
      href="https://www.linkedin.com/in/jamal-nabaa-01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      className="hover:text-blue-900"
    >
      <FaLinkedin />
    </a>,
    <a href="https://github.com/jamaln02" className="hover:text-orange-900">
      <FaGithub />
    </a>,
    <a
      href="https://wa.me/message/HORH4QDTU52VG1"
      className="hover:text-green-900"
    >
      <FaWhatsapp />
    </a>,
    <a
      href="https://www.facebook.com/jamal.na.75?mibextid=ZbWKwL"
      className="hover:text-blue-900"
    >
      <FaFacebook />
    </a>,
  ];

  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-evenly items-center md:items-start mt-4 tracking-wide overflow-hidden"
      id="/"
    >
      <div className="w-full md:w-1/2 flex flex-col gap-12 mt-10 md:mt-20 overflow-hidden">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{
            x: 0,
            transition: { duration: 1, type: "spring", mass: 0.7 },
          }}
          className="md:flex items-center gap-3"
        >
          <img src={hand} alt="hand waving" width={40} />
          <h1 className="text-2xl md:text-4xl font-medium leading-7 md:leading-10 ">
            Hello I'm <span className="text-orange-900">Jamal Nabaa</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ x: 200 }}
          whileInView={{
            x: 0,
            transition: { duration: 1, type: "spring", mass: 0.7 },
          }}
          className="ms-4 flex flex-wrap text-xl"
        >
          Frontend
          <span className="text-light-blue-800 font-bold mx-2 flex items-center gap-2">
            React <FaReact />
          </span>
          Developer
        </motion.p>

        <motion.div
          initial={{ x: -100, scale: 0 }}
          whileInView={{ x: 0, scale: 1, transition: { duration: 1.5 } }}
        >
          <Button
            variant="gradient"
            className="flex items-center gap-3 w-full md:w-3/6"
          >
            <FaCloudDownloadAlt className="text-2xl" />
            Download my Cv
          </Button>
        </motion.div>
        <div className="flex items-center justify-evenly md:justify-normal gap-4 mt-2 text-2xl ">
          {social.map((ele, ind) => (
            <motion.span
              initial={{ translateY: -100, opacity: 0 }}
              whileInView={{
                translateY: 0,
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  duration: 1,
                  type: "spring",
                },
              }}
              key={ind}
            >
              {ele}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ x: 10, y: 0 }}
        whileInView={{
          y: -40,
          transition: {
            duration: 1.5,
            delay: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="md:w-1/2 "
      >
        <img src={me} alt="jamal img" width={500} className="z-10" />
      </motion.div>
    </div>
  );
};

export default Hero;
