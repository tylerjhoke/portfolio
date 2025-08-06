// App.jsx
import React, { useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail"; 
import Work from "./pages/Work";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import GoogleAnalytics from "./components/GoogleAnalytics";
import { pageview } from "./utils/gtag";
import "./styles/App.css";

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="App">
        <header></header>
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/work_experience" element={<Work />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/portfolio">
      <GoogleAnalytics />
      <AppRoutes />
    </Router>
  );
}

export default App;
