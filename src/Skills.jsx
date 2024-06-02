import React from "react";
import html from "./assets/html.png";
import css from "./assets/css3.png";
import javascript from "./assets/javascript.png";
import react from "./assets/react.png";
import next from "./assets/next.png";
import bootstrap from "./assets/bootstrap.png";
import tailwind from "./assets/tailwind.png";
import git from "./assets/git.png";
import redux from "./assets/redux.png";
const Skills = () => {
  return (
    <div className="my-5" id="skills">
      <hr />
      <div className="my-10 text-2xl md:text-5xl font-bold text-purple-800">
        Skills and Expertise
      </div>
      <ul className="list-disc my-8">
        <li className="my-2">
          {" "}
          <span className="font-bold text-orange-900">
            Front-End Development :{" "}
          </span>{" "}
          HTML, CSS, JavaScript
        </li>
        <li className="my-2">
          {" "}
          <span className="font-bold text-orange-900">
            JavaScript Frameworks :{" "}
          </span>{" "}
          React JS, Next JS
        </li>
        <li className="my-2">
          <span className="font-bold text-orange-900">Libraries : </span>{" "}
          Bootstrap, Tailwind CSS, Tailwind Material, Redux, Redux Toolkit,
          Redux Preset, JWT
        </li>
        <li className="my-2">
          <span className="font-bold text-orange-900">Problem-Solving : </span>{" "}
          Adept at identifying and resolving complex technical issues
        </li>
        <li className="my-2">
          <span className="font-bold text-orange-900">Self-Motivation : </span>{" "}
          Continuously seeking opportunities to learn and grow
        </li>
        <li className="my-2">
          <span className="font-bold text-orange-900">Adaptability : </span>{" "}
          Thrives in fast-paced environments and embraces new challenges
        </li>
        <li className="my-2">
          <span className="font-bold text-orange-900">Communication : </span>{" "}
          Effectively conveys technical concepts to both technical and
          non-technical audiences
        </li>
      </ul>
      <div className="flex justify-evenly items-center gap-3 flex-wrap ">
        <div className="flex flex-col items-center gap-2">
          <img width={45} src={html} alt="html icon" />
          <p>HTML 5</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img width={45} src={css} alt="css icon" />
          <p>CSS 3</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          {" "}
          <img width={45} src={javascript} alt="js icon" />
          <p>JS</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img width={45} src={react} alt="react icon" />
          <p>React js</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            width={45}
            src={next}
            alt="nextjs icon"
            className="bg-gray-400"
          />
          <p>Next Js</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img width={45} src={bootstrap} alt="bootstrap icon" />
          <p>Bootstrap</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img width={45} src={tailwind} alt="tailwind icon" />
          <p>Tailwind css</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img width={45} src={git} alt="git icon" />
          <p>Git & Github</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img width={45} src={redux} alt="redux icon" />
          <p>Redux & Reduxtoolkit </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
