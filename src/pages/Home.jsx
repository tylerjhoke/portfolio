import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
/*import CoolPortfolioGrid from '../components/CoolPortfolioGrid';*/

export default function Home() {
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  // State for the video modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  // Intersection Observer for About Me section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  // Function to scroll to the About Me section
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Functions to open and close the video modal
  const openVideoModal = (url) => {
    setCurrentVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl(''); // Clear the URL when closing
  };

  return (
    <div className="animate-fade">
      {/* Banner Section - Main Portfolio Welcome */}
      <div className="min-h-[40vh] flex flex-col justify-center items-center text-white text-center px-5 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-5">Welcome to My Portfolio</h1>
        <p className="text-xl sm:text-2xl mb-0">4/4 B.E. AND M.E. in Mechanical Engineering</p>
        <p className="text-xl sm:text-1xl mb-10">Aerospace/Product Design Focus</p>
        <Link to="/projects">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-[#ff6f61] rounded hover:bg-[#ff4a3d] transition-colors duration-300">
            View Projects
          </button>
        </Link>

        {/* Bouncing Down Arrow - consider making it stop after a few bounces in App.css if distracting */}
        <div className="mt-10 text-4xl animate-bounce cursor-pointer select-none" onClick={scrollToAbout}>
          ↓
        </div>
      </div>

      {/* About Me Section - Portrait and Text Side-by-Side */}
      <div
        ref={aboutRef}
        className={`flex flex-wrap justify-center items-center gap-10 max-w-6xl mx-auto px-5 py-16 transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        {/* Left Image: Your Portrait */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/aboutme/portrait2025.jpg`}
          alt="Tyler Hoke Professional Portrait"
          className="flex-none w-full max-w-xs rounded shadow-md object-cover"
        />

        {/* About Me Text */}
        <div className="flex-1 min-w-[300px] max-w-lg bg-gray-100 rounded-lg p-8 shadow-lg text-gray-800">
          <h2 className="text-3xl font-semibold mb-5">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hi! I’m Tyler Hoke, a passionate mechanical engineer and software enthusiast.
            I thrive on building things that solve real-world problems and I'm continuously learning new technologies.
            This portfolio is where I showcase projects that demonstrate my skills and creativity.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of my technical pursuits, I'm an avid athlete, particularly passionate about volleyball.
            I believe the discipline and teamwork learned in sports greatly complement my engineering approach.
          </p>
        </div>
      </div>

      {/* Volleyball Highlights Gallery Section */}
      <section className="bg-gray-50">
        {/* NEW BANNER FOR VOLLEYBALL HIGHLIGHTS - WITH IMAGE BACKGROUND */}
        <div
          className="relative py-32 mb-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/aboutme/marchmadnessvb.jpg)` }}
        >
          {/* Overlay for readability and color scheme */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] opacity-80"></div>
          <h2 className="relative z-10 -mt-20 text-3xl sm:text-4xl font-semibold text-white text-center ">
            Volleyball Highlights
          </h2>
        </div>

        {/* Action Shot (Fuller Width) - NOW CLICKABLE FOR VIDEO */}
        {/* This image is now separate from the banner, so it can be clicked for the video */}
        <div className="w-full max-w-6xl mx-auto px-5 mb-10">
            <a
                href="https://www.youtube.com/embed/VIDEO_ID8" // <== OPTIONAL: Direct YouTube link for SEO/fallback
                onClick={(e) => {
                    e.preventDefault(); // Prevent direct navigation
                    // IMPORTANT: Replace with your actual YouTube video embed URL
                    openVideoModal('https://www.youtube.com/embed/VIDEO_ID9');
                }}
                className="cursor-pointer block relative"
            >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/aboutme/Moran_Hoke_Set.jpg`}
                  alt="Tyler Hoke setting a volleyball during a game"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
                {/* Optional: Play button overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <svg className="h-20 w-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </a>
            <p className="text-center text-sm text-gray-600 mt-2">2023 National Championship Game Clip</p>
        </div>


        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-5 pb-16">
          {/* Team Photo with Trophy */}
          <div className="flex-1 min-w-[280px] max-w-sm">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/aboutme/teamnatty.png`}
              alt="Volleyball team celebrating with championship trophy"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <p className="text-center text-sm text-gray-600 mt-2">National Championship Team</p>
          </div>

          {/* Team Photo by Statue */}
          <div className="flex-1 min-w-[280px] max-w-sm">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/aboutme/stevensonteam.jpg`}
              alt="Volleyball team standing by a horse statue on campus"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <p className="text-center text-sm text-gray-600 mt-2">Team Photo</p>
          </div>

          {/* Team Photo at White House */}
          <div className="flex-1 min-w-[280px] max-w-sm">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/aboutme/whitehouse.png`}
              alt="Volleyball team visiting the White House"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <p className="text-center text-sm text-gray-600 mt-2">White House Visit</p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black bg-opacity-75 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-4xl h-auto aspect-video rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* YouTube Embed */}
            <iframe
              src={currentVideoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-gray-800 bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center leading-none"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}