import AboutMe from "./AboutMe";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import { motion, useScroll } from "framer-motion";
import Footer from "./Footer";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <main className="dark:bg-gray-900 dark:text-gray-300 p-2 pt-0">
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
      <Header />
      <section className=" dark:bg-gray-900 dark:text-gray-300 p-6 md:p-10 pt-2">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </section>
      <Footer />
    </main>
  );
}

export default App;
