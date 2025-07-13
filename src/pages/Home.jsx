import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
/*import CoolPortfolioGrid from '../components/CoolPortfolioGrid';*/

export default function Home() {
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="animate-fade">
      {/* Banner */}
      <div className="min-h-[40vh] flex flex-col justify-center items-center text-white text-center px-5 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-5">Welcome to My Portfolio</h1>
        <p className="text-xl sm:text-2xl mb-10 tracking-wide">Showcasing my projects and skills</p>
        <Link to="/projects">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-[#ff6f61] rounded hover:bg-[#ff4a3d] transition-colors duration-300">
            View Projects
          </button>
        </Link>

        {/* Bouncing Down Arrow */}
        <div className="mt-10 text-4xl animate-bounce cursor-pointer select-none" onClick={scrollToAbout}>
          ↓
        </div>
      </div>

      {/* Spacer */}
      <div className="h-24"></div>

      {/* About Me Section */}
      <div
        ref={aboutRef}
        className={`flex flex-wrap justify-center items-start gap-10 max-w-6xl mx-auto px-5 py-16 transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        {/* Left Image */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/aboutme/Moran_Hoke_Set.jpg`}
          alt="Tyler on a bike"
          className="flex-1 max-w-xs w-full rounded shadow-md"
        />

        {/* About Me Text */}
        <div className="flex-2 min-w-[300px] bg-gray-100 rounded-lg p-8 shadow-lg text-gray-800">
          <h2 className="text-3xl font-semibold mb-5">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi! I’m Tyler Hoke, a passionate mechanical engineer and software enthusiast.
            I love building things that solve real-world problems and continuously learning new technologies.
            Welcome to my portfolio where I showcase projects that demonstrate my skills and creativity.
          </p>
        </div>

        {/* Right Image */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/aboutme/portrait2025.jpg`}
          alt="CAD Model"
          className="flex-1 max-w-xs w-full rounded shadow-md"
        />
      </div>

      {/* Extra Space */}
      <div className="h-[600px]"></div>
    </div>
  );
}
