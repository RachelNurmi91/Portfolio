import "./App.css";
import React from "react";
import Navigation from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="*" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
