import React from "react";
import market from "./assets/market.png";
import movie from "./assets/movie.png";
import fashion from "./assets/fashion.png";
import dokan from "./assets/dokan.png";
import town from "./assets/town.png";
import { FaGithub, FaLink } from "react-icons/fa";
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
      alt: "Movie Project",
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
  ];

  return (
    <div className="my-10" id="Projects">
      <hr />
      <div className="my-10 text-2xl md:text-5xl font-bold text-purple-800">
        Projects
      </div>

      <div className="flex flex-wrap gap-5 justify-evenly items-center">
        {linksData.map(({ github, live, alt, name }) => (
          <div className="w-3/4 md:w-1/3 group relative overflow-hidden cursor-pointer rounded-md">
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
                className=" hover:text-orange-900 mx-4  "
              >
                <FaGithub className="text-4xl" />
              </a>
              <a href={live} target="_blank" className=" hover:text-purple-800">
                <FaLink className="text-4xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
