import React from "react";
import "./index.css"
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact"
import Project from "./routes/project";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </div>
  );
}

export default App;
