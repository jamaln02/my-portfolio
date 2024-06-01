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

import victor from "./assets/Vector2.png";
import { Button } from "@material-tailwind/react";
const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row justify-evenly items-center md:items-start mt-4 tracking-wide">
      <div className="w-1/2 flex flex-col gap-6 mt-20">
        <h1 className="text-2xl md:text-4xl font-medium leading-7 md:leading-10 ">
          Hello I'm <span className="text-orange-900">Jamal Nabaa</span>
        </h1>
        <p className="flex">
          Frontend
          <span className="text-light-blue-800 font-bold mx-2 flex items-center gap-2">
            React <FaReact />
          </span>
          Developer
        </p>

        <Button
          variant="gradient"
          className="flex items-center gap-3 w-full md:w-3/6"
        >
          <FaCloudDownloadAlt className="text-2xl" />
          Download my Cv
        </Button>
        <div className="flex items-center gap-4 mt-2 text-xl">
          <a
            href="https://www.linkedin.com/in/jamal-nabaa-01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:text-blue-900"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/jamaln02"
            className="hover:text-orange-900"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/message/HORH4QDTU52VG1"
            className="hover:text-green-900"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/jamal.na.75?mibextid=ZbWKwL"
            className="hover:text-blue-900"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      {/* <img
        src={victor}
        className="absolute z-0 right-14 bottom-20 "
        alt=""
        width={400}
      /> */}
      <div className="md:w-1/2 relative">
        <img src={me} alt="jamal img" width={500} className="z-10" />
      </div>
    </div>
  );
};

export default Hero;
