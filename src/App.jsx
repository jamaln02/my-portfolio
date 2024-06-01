import AboutMe from "./AboutMe";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

function App() {
  return (
    <main className=" dark:bg-gray-900 dark:text-gray-300 p-10 pt-2">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </main>
  );
}

export default App;
