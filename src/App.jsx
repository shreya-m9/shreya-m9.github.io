import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Art from "./components/Art";
import Tagline from "./components/Tagline";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col scroll-smooth w-full noise shrink-0">
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <div id="home">
        <Home />
      </div>
      <div>
        <Tagline />
      </div>
      <div
        id="about"
        className="flex items-center justify-center h-screen shrink-0 pt-35"
      >
        <About />
      </div>
      <div
        id="skills"
        className="flex items-center justify-center h-screen shrink-0"
      >
        <Skills />
      </div>
      <div
        id="experience"
        className="flex items-center justify-center h-screen shrink-0"
      >
        <Experience />
      </div>
      <div
        id="projects"
        className="flex items-center justify-center h-screen shrink-0 pt-40"
      >
        <Projects />
      </div>
      <div
        id="art"
        className="flex items-center justify-start min-h-screen snap-start snap-normal shrink-0 pt-40 pl-15"
      >
        <Art />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
