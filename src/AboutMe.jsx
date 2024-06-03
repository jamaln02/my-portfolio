import React from "react";
import { motion } from "framer-motion";

import Typed from "typed.js";
const AboutMe = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello, I am Jamal Nabaa from Syria and I live in Egypt"],
      typeSpeed: 50,
      loop: true,
      backDelay: 5000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="" id="About">
      <hr className="my-10" />
      <div className="text-2xl md:text-5xl text-purple-800 my-2 font-bold">
        About Me
      </div>

      <div className="my-6">
        <h1 className="text-3xl leading-10 tracking-wide">
          <span ref={el} />
        </h1>

        <p className="text-xl leading-10 my-2 tracking-wide">
          I am a passionate and experienced front-end developer with a knack for
          crafting visually appealing and user-friendly web experiences. With a
          deep-rooted love for programming and a relentless pursuit of
          knowledge, I am always eager to embrace new technologies and expand my
          skillset
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
