import React from "react";
import html from "./assets/html.png";
import css from "./assets/css3.png";
import javascript from "./assets/javascript.png";
import react from "./assets/react.png";
import next from "./assets/next.png";
import bootstrap from "./assets/bootstrap.png";
import tailwind from "./assets/tailwind.png";
import git from "./assets/git.png";

const Skills = () => {
  return (
    <div className="my-5">
      <hr />
      <div className="my-10 text-2xl md:text-6xl text-purple-800">Skills</div>
      <div className="flex justify-evenly items-center gap-3 flex-wrap ">
        <div className="flex flex-col items-center gap-2">
          <img width={70} src={html} alt="html icon" />
          <p>HTML 5</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img width={70} src={css} alt="css icon" />
          <p>CSS 3</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          {" "}
          <img width={70} src={javascript} alt="js icon" />
          <p>JS</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img width={70} src={react} alt="react icon" />
          <p>React js</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            width={70}
            src={next}
            alt="nextjs icon"
            className="bg-gray-400"
          />
          <p>Next Js</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img width={70} src={bootstrap} alt="bootstrap icon" />
          <p>Bootstrap</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img width={70} src={tailwind} alt="tailwind icon" />
          <p>Tailwind css</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img width={70} src={git} alt="git icon" />
          <p>Git & Github</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
