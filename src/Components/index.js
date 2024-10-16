import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <div className="resume">Take it offline & download my resume</div>
      <Projects />
      <div className="projects"></div>
    </div>
  );
};

export default Home;
