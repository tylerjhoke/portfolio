import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../projects";

export default function Home() {
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

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

  const openVideoModal = (url) => {
    setCurrentVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl('');
  };

  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured === true);

  return (
    <div className="animate-fade">
      {/* Banner Section */}
      <div className="min-h-[40vh] flex flex-col justify-center items-center text-white text-center px-5 bg-gradient-to-r from-red-950 to-black">
        <h1 className="text-4xl sm:text-5xl font-bold mb-5">Welcome to My Portfolio</h1>
        <p className="text-xl sm:text-2xl mb-0">Stevens Institute of Technology</p>
        <p className="text-xl sm:text-2xl mb-0">4/4 B.E. AND M.E. in Mechanical Engineering. Spring '26</p>
        <p className="text-xl sm:text-1xl mb-10"></p>
        <Link to="/projects">
          <button className="px-6 py-3 text-lg font-semibold text-black bg-white rounded hover:bg-black hover:text-white transition-colors duration-300">
            View Projects
          </button>
        </Link>
        <div className="mt-10 text-4xl animate-bounce cursor-pointer select-none" onClick={scrollToAbout}>
          ↓
        </div>
      </div>

      {/* About Me Section - NEW Layout */}
      <div
        ref={aboutRef}
        className={`bg-zinc-00 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-5 py-20 items-center transition-all duration-1000 ${
          aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Portrait */}
        <div className="flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/aboutme/portrait2025.jpg`}
            alt="Tyler Hoke Professional Portrait"
            className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="bg-white rounded-xl shadow-xl p-2 text-gray-800">
          <h2 className="text-3xl font-semibold mb-5">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hi! I’m Tyler Hoke, a mechanical engineering student passionate about solving real-world problems through hands-on design and analysis.
            I’m currently seeking full-time opportunities starting in Spring 2026.
            I thrive in fast-paced environments where adaptability, critical thinking, and creativity come together to make an impact.
            This portfolio highlights some of my favorite projects that reflect my technical background and engineering mindset.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Outside the classroom, I am a varsity athlete on the Stevens Men’s Volleyball Team.
            Competing at a national level has taught me the value of discipline, teamwork, and perseverance.
            Volleyball has also helped me develop strong leadership and communication skills, as well as the ability to stay composed and think strategically under pressure.
            These experiences have shaped how I approach engineering challenges, emphasizing preparation, collaboration, and a drive to improve every day.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I am always eager to learn, grow, and contribute meaningfully to the teams I am part of.
            With a strong foundation in engineering and a commitment to continuous improvement, I am excited to apply my skills to make a lasting impact.
          </p>
        </div>

      </div>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="bg-gray-50">
          <div
            className="relative py-20 mb-10 bg-gradient-to-r from-zinc-600 to-zinc-900 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              {/* Top row */}
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute top-12 left-32 w-8 h-8 border-2 border-white rounded-full"></div>
              <div className="absolute top-24 left-52 w-16 h-16 border-2 border-white rotate-45"></div>
              <div className="absolute top-8 left-80 w-12 h-12 border-2 border-white rounded-full"></div>
              
              {/* Middle left */}
              <div className="absolute top-1/2 -translate-y-1/2 left-16 w-14 h-14 border-2 border-white rotate-12"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-32 w-6 h-6 border-2 border-white rounded-full"></div>
              
              {/* Middle right */}
              <div className="absolute top-1/2 -translate-y-1/2 right-20 w-16 h-16 border-2 border-white rotate-45"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-40 w-10 h-10 border-2 border-white rounded-full"></div>
              
              {/* Right side */}
              <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rotate-45"></div>
              <div className="absolute top-32 right-36 w-10 h-10 border-2 border-white rounded-full"></div>
              <div className="absolute top-8 right-56 w-12 h-12 border-2 border-white rotate-12"></div>
              
              {/* Bottom row */}
              <div className="absolute bottom-10 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-16 left-1/3 w-8 h-8 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-20 right-1/3 w-24 h-24 border-2 border-white rotate-12"></div>
              <div className="absolute bottom-12 right-1/2 w-10 h-10 border-2 border-white rotate-45"></div>
              <div className="absolute bottom-24 left-1/2 w-14 h-14 border-2 border-white rounded-full"></div>
            </div>
            
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/50 to-transparent"></div>
            
            <h2 className="relative z-10 text-3xl sm:text-4xl font-semibold text-white text-center">
              Featured Projects
            </h2>
          </div>
          <div className="max-w-6xl mx-auto px-5 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-bold text-base mb-2">{project.name}</h3>
                    <p className="text-white/90 text-xs line-clamp-3">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link to="/projects">
                <button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-zinc-600 to-zinc-900 text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
                  View All Projects
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Volleyball Highlights Section (unchanged) */}
      <section className="bg-gray-50">
        <div
          className="relative py-32 mb-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/aboutme/marchmadnessvb.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-600 to-zinc-900 opacity-80"></div>
          <h2 className="relative z-10 -mt-20 text-3xl sm:text-4xl font-semibold text-white text-center">
            Stevens Institute of Technology Men's Volleyball
          </h2>
        </div>

        <div className="w-full max-w-6xl mx-auto px-5 mb-10">
          <a
            href="https://youtu.be/rHX1UpAAU34?feature=shared&t=1891"
            onClick={(e) => {
              e.preventDefault();
              openVideoModal('https://www.youtube.com/embed/rHX1UpAAU34?si=flqXze0ZItCeFJrL&amp;start=1891');
            }}
            className="cursor-pointer block relative"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/aboutme/Moran_Hoke_Set.jpg`}
              alt="Tyler Hoke setting a volleyball during a game"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <svg className="h-20 w-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
          <p className="text-center text-sm text-gray-600 mt-2">2023 National Championship Game Clip</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-5 pb-16">
          {/* Image Blocks */}
          {[
            { src: 'teamnatty.png', alt: 'Volleyball team celebrating with championship trophy', caption: 'National Championship Team' },
            { src: 'stevensonteam.jpg', alt: 'Volleyball team at Stevenson', caption: 'Team Photo' },
            { src: 'whitehouse.png', alt: 'Volleyball team visiting the White House', caption: 'White House Visit' },
          ].map(({ src, alt, caption }) => (
            <div key={src} className="flex-1 min-w-[280px] max-w-sm">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/aboutme/${src}`}
                alt={alt}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <p className="text-center text-sm text-gray-600 mt-2">{caption}</p>
            </div>
          ))}
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
            <iframe
              src={currentVideoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
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
