import React from "react";
import Projects from "./components/Projects";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tyler Hoke Portfolio</h1>
        <p>Welcome to my professional portfolio. Browse my projects by skill/tag!</p>
      </header>
      <Projects />
      {/* Add About, Contact, Footer sections as you expand */}
    </div>
  );
}

export default App;