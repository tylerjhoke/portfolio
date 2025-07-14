// App.jsx
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import "./styles/App.css";

function App() {
  return (
    <Router basename="/portfolio">
      <Navbar />
      <div className="App">
        <header>

        </header>
       
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
