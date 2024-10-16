import "./App.css";
import React from "react";
import Navigation from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Components";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
