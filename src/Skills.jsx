import React from "react";
import html from "./assets/html.png";
import css from "./assets/css3.png";
import javascript from "./assets/javascript.png";
import react from "./assets/react.png";
import next from "./assets/next.png";
import bootstrap from "./assets/bootstrap.png";
import tailwind from "./assets/tailwind.png";
import git from "./assets/git.png";
import github from "./assets/github.png";
import redux from "./assets/redux.png";
import { motion, reverseEasing } from "framer-motion";
const Skills = () => {
  const icons = [
    { name: "Html 5", img: html },
    { name: "Css 3", img: css },
    { name: "Javascript", img: javascript },
    { name: "React js", img: react },
    { name: "Next", img: next },
    { name: "Bootstrap", img: bootstrap },
    { name: "Tailwind", img: tailwind },
    { name: "Git", img: git },
    { name: "GitHub", img: github },
    { name: "Redux", img: redux },
  ];

  const parentVariants = {
    hidden: {
      y: 10,
    },
    visible: {
      y: 0,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: 10,
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        repeat: Infinity,
        repeatType: "reverse",
        reverseEasing: reverseEasing,
      },
    },
  };

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
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-evenly items-center gap-3 flex-wrap "
      >
        {icons.map((ele, ind) => (
          <motion.div
            variants={childVariants}
            className="flex flex-col items-center gap-2"
          >
            {ele.img == next ? (
              <img
                width={45}
                src={ele.img}
                alt={`${ele.name} icon`}
                className="bg-gray-400"
              />
            ) : (
              <img width={45} src={ele.img} alt={`${ele.name} icon`} />
            )}

            <p>{ele.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
