import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
const DarkLightMode = () => {
  const [brTheme, setBrTheme] = useState(true);

  function setDarkTheme() {
    localStorage.theme = "dark";
    setBrTheme(!brTheme);
  }

  function setLightTheme() {
    localStorage.theme = "light";
    setBrTheme(!brTheme);
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [brTheme]);
  return (
    <div onClick={brTheme ? setDarkTheme : setLightTheme} className="text-xl">
      {brTheme ? <BsMoonStars /> : <FiSun />}
    </div>
  );
};

export default DarkLightMode;
