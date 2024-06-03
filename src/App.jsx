import AboutMe from "./AboutMe";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import { motion, useScroll } from "framer-motion";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <main>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          backgroundColor: "red",
          height: "10px",
          width: "100%",
          position: "fixed",
          zIndex: 1000,
        }}
      />

      <section className=" dark:bg-gray-900 dark:text-gray-300 p-10 pt-2">
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </section>
    </main>
  );
}

export default App;
