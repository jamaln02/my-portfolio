import React, { memo } from "react";
import market from "./assets/market.png";
import movie from "./assets/movie.png";
import fashion from "./assets/fashion.png";
import dokan from "./assets/dokan.png";
import town from "./assets/town.png";
import facebook from "./assets/facebook.png";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ReadMoreAndLess } from "read-more-and-less/dist/components/ReadMoreAndLess";
import LazyLoad from "react-lazyload";

const Element = ({ index }) => (
  <LazyLoad height={200} offset={100}>
    <motion.div
      initial={{ y: 200, x: -200, opacity: 0 }}
      whileInView={{
        y: 0,
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      }}
    >
      Element {index + 1}
    </motion.div>
  </LazyLoad>
);

const Projects = () => {
  const linksData = [
    {
      github: "https://github.com/jamaln02/E-market.git",
      live: "https://e-market-j.vercel.app/",
      alt: "E-market",
      name: market,
    },
    {
      github: "https://github.com/jamaln02/movieProject.git",
      live: "https://movie0mania.vercel.app/",
      alt: "Movie mania",
      name: movie,
    },
    {
      github: "https://github.com/jamaln02/fashion.git",
      live: "https://fashion-sooty.vercel.app/",
      alt: "Fashion Store",
      name: fashion,
    },
    {
      github: "https://github.com/jamaln02/Dokan-shop.git",
      live: "https://dokan-shop-seven.vercel.app/",
      alt: "Dokan Shop",
      name: dokan,
    },
    {
      github: "https://github.com/jamaln02/landing-page.git",
      live: "https://landing-page-orpin-three-76.vercel.app/",
      alt: "Town",
      name: town,
    },
    {
      github: "https://github.com/jamaln02/facebook.git",
      live: "https://facebook-eta-eight.vercel.app/",
      alt: "facebook clone",
      name: facebook,
    },
  ];

  return (
    <div className="my-10 p-2" id="Projects">
      <hr />
      <div className="my-10 text-2xl md:text-5xl font-bold text-purple-800">
        Projects
      </div>

      <div className="flex flex-wrap gap-5 justify-evenly items-center overflow-hidden">
        {linksData.map(({ github, live, alt, name }, index) => (
          <motion.div
            initial={{ y: 200, x: -200, opacity: 0 }}
            whileInView={{
              y: 0,
              x: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            className="w-full md:w-1/3   rounded-md"
          >
            <Card className="w-full h-full bg-gray-700 text-gray-300 ">
              <CardHeader
                floated={false}
                className="p-0 m-1 group relative overflow-hidden cursor-pointer"
              >
                <img
                  src={name}
                  alt={alt}
                  className="  hover:opacity-30 group-hover:-rotate-2 group-hover:scale-125 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 tranlate-y-[50%] group-hover:translate-y-0  duration-500  opacity-0 group-hover:opacity-100 flex flex-row justify-evenly items-center mt-4 gap-8">
                  <a
                    href={github}
                    target="_blank"
                    className=" text-orange-900 group-hover:text-orange-600 mx-4  "
                  >
                    <FaGithub className="text-4xl" />
                  </a>
                  <a
                    href={live}
                    target="_blank"
                    className="text-purple-800 hover:text-purple-600"
                  >
                    <FaLink className="text-4xl" />
                  </a>
                </div>
              </CardHeader>
              <CardBody className="pb-1 mb-0 text-lg tracking-wide">
                <p className="font-bold p-1 text-lg text-blue-900">
                  <span className="text-gray-300 font-bold ">name : </span>{" "}
                  {alt}
                </p>
                <Typography className="text-orange-600">
                  <span className="text-gray-300 font-bold">
                    description :{" "}
                  </span>
                  {alt === "E-market" && (
                    <ReadMoreAndLess
                      charLimit={50}
                      text=" This E-commerce website was built with NEXT JS and Redux
                    Toolkit NEXT helped us maximize the site's visibility in
                    search engines We worked on the design using the MATRIAL
                    TAILWIND library for a more attractive design There's a
                    search feature and a dark-to-light theme feature. and the
                    add to cart feature. I was quick to code and develop this
                    project, of course, by sticking to the code, organizing the
                    files, and making sure that making sure everything works
                    without issues.   "
                    />
                  )}
                  {alt === "Movie mania" && (
                    <ReadMoreAndLess
                      charLimit={50}
                      text="I worked on this project using react js library, tailwind
                    matrial in design and react slik library. Through the site,
                    you can see all the details of the movie or series you like
                    and all the artists and staff with the ability to see all
                    their work You can watch the trailer of the movie or series
                    and all the videos uploaded to it on youtube and all the
                    photos and reviews There is a search feature and a theme
                    feature from dark to light It was one of the projects that
                    took me the most time and effort because it has a lot of
                    details   "
                    />
                  )}
                  {alt === "Fashion Store" && (
                    <ReadMoreAndLess
                      charLimit={50}
                      text="This project I built the front and back end but the data was
                    uploaded to render so unfortunately you won't be able to see
                    it unless you contact me. In this project, I worked on the
                    login system, user data registration and validation, and the
                    user can change his data after logging in. There is an admin
                    dashboard for the administrator to be able to manage the
                    site, whether in terms of users or products It was built
                    using React JS, Tailwind CSS, and json server.   "
                    />
                  )}
                  {alt === "Dokan Shop" && (
                    <ReadMoreAndLess
                      charLimit={50}
                      text="This project is an e-commerce landing page It was
                    professionally designed as it was 100% customized. I worked
                    on it using only html, css, javascript.  "
                    />
                  )}
                  {alt === "Town" && (
                    <ReadMoreAndLess
                      charLimit={50}
                      text="A simple project to design a beautiful and elegant landing
                    page It was one of my first exercises in html css javascript.   "
                    />
                  )}
                  {alt === "facebook clone" && (
                    <ReadMoreAndLess
                      charLimit={50}
                      text="This project is a simulation of Facebook's login and signup
                    interface It is not just a design, it improves the user
                    experience when entering wrong data, unauthorized words,
                    number of letters or numbers, and email validation. It was
                    built using html, css, javascript and bootstrap library.   "
                    />
                  )}
                </Typography>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
