import React from "react";
import market from "./assets/market.png";
import movie from "./assets/movie.png";
import fashion from "./assets/fashion.png";
import dokan from "./assets/dokan.png";
import town from "./assets/town.png";

const Projects = () => {
  return (
    <div className="my-10" id="Projects">
      <hr />
      <div className="my-10 text-2xl md:text-5xl font-bold text-purple-800">
        Projects
      </div>

      <div className="flex flex-wrap gap-5 justify-evenly items-center">
        <div className="w-3/4 md:w-1/3">
          <img src={market} alt="project image" className="rounded-lg " />
          <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center mt-4 text-base gap-4 md:text-lg ">
            <a
              href="https://github.com/jamaln02/E-market.git"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-orange-900"
            >
              view on github
            </a>
            <a
              href="https://e-market-j.vercel.app/"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-purple-800"
            >
              view live
            </a>
          </div>
        </div>
        <div justify-evenly items-center className="w-3/4 md:w-1/3">
          <img src={movie} alt="project image" className="rounded-lg " />
          <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center mt-4 text-base gap-4 md:text-lg ">
            <a
              href="https://github.com/jamaln02/movieProject.git"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-orange-900"
            >
              view on github
            </a>
            <a
              href="https://movie0mania.vercel.app/"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-purple-800"
            >
              view live
            </a>
          </div>
        </div>
        <div justify-evenly items-center className="w-3/4 md:w-1/3">
          <img src={fashion} alt="project image" className="rounded-lg " />
          <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center mt-4 text-base gap-4 md:text-lg ">
            <a
              href="https://github.com/jamaln02/fashion.git"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-orange-900"
            >
              view on github
            </a>
            <a
              href="https://fashion-sooty.vercel.app/"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-purple-800"
            >
              view live
            </a>
          </div>
        </div>
        <div justify-evenly items-center className="w-3/4 md:w-1/3">
          <img src={dokan} alt="project image" className="rounded-lg " />
          <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center mt-4 text-base gap-4 md:text-lg ">
            <a
              href="https://github.com/jamaln02/Dokan-shop.git"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-orange-900"
            >
              view on github
            </a>
            <a
              href="https://dokan-shop-seven.vercel.app/"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-purple-800"
            >
              view live
            </a>
          </div>
        </div>
        <div justify-evenly items-center className="w-3/4 md:w-1/3">
          <img src={town} alt="project image" className="rounded-lg " />
          <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center mt-4 text-base gap-4 md:text-lg ">
            <a
              href="https://github.com/jamaln02/landing-page.git"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-orange-900"
            >
              view on github
            </a>
            <a
              href="https://landing-page-orpin-three-76.vercel.app/"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-purple-800"
            >
              view live
            </a>
          </div>
        </div>
        {/* <div justify-evenly items-center className="w-1/3">
          <img src={market} alt="project image" className="rounded-lg " />
          <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center mt-4 text-base gap-4 md:text-lg ">
            <a href="https://github.com/jamaln02/E-market.git" target="_blank">
              view on github
            </a>
            <a href="https://e-market-j.vercel.app/" target="_blank">
              view live
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
