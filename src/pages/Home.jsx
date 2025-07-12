import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="banner" style={{
        background: "#282c34",
        color: "#fff",
        padding: "40px 0",
        textAlign: "center"
      }}>
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my projects and skills</p>
        <Link to="/projects">
          <button style={{ marginTop: "20px", padding: "10px 20px" }}>
            View Projects
          </button>
        </Link>
      </div>
    </div>
  );
}