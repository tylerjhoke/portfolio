// App.jsx
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import ProjectDetail from "./pages/ProjectDetail"; // You’ll create this
import "./styles/App.css";

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <header>

        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
