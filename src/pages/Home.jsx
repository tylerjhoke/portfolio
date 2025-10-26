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
    <div className="animate-fade bg-white">
      {/* Elegant Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-black mb-6 tracking-tight">
            Tyler Hoke
          </h1>
          <p className="text-sm sm:text-base uppercase tracking-widest text-gray-500 mb-8">
            Mechanical Engineering
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mb-8">
              Creating engineered solutions that are functional, innovative, and impactful.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link to="/projects">
              <button className="px-8 py-3 text-sm uppercase tracking-wider bg-black text-white hover:bg-gray-800 transition-colors duration-300 font-light">
                View Projects
              </button>
            </Link>
            <Link to="/work_experience">
              <button className="px-8 py-3 text-sm uppercase tracking-wider bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-300 font-light">
                Experience
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section - Elegant Layout */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <div className="order-2 md:order-1">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/aboutme/portrait2025.jpg`}
                alt="Tyler Hoke"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-sm uppercase tracking-wider text-gray-500 font-light">
                About Me
              </p>
              <h2 className="text-4xl font-light text-black tracking-tight">
                Engineering excellence through design and innovation
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a mechanical engineering student at Stevens Institute of Technology, passionate about solving real-world problems through hands-on design and analysis. Seeking full-time opportunities starting Spring 2026.
                </p>
                <p>
                  Beyond engineering, I'm a varsity athlete on the Stevens Men's Volleyball Team. Competing at a national level has taught me discipline, teamwork, and strategic thinking—skills that shape my approach to every engineering challenge.
                </p>
                <p>
                  I thrive in fast-paced environments where adaptability, critical thinking, and creativity converge. With a strong foundation in engineering and a commitment to continuous improvement, I'm eager to contribute meaningfully to innovative teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-light mb-4">Featured Work</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group block"
                >
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-light text-black mb-2 group-hover:underline">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link to="/projects">
                <button className="text-sm uppercase tracking-wider border-b border-black pb-1 hover:pb-2 transition-all duration-300 font-light">
                  View All Projects
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Athletics Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-light mb-4">Athletics</p>
          <h2 className="text-4xl font-light text-black tracking-tight mb-12">
            Stevens Institute of Technology Men's Volleyball
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { src: 'teamnatty.png', alt: 'National Championship Team', caption: '2023 National Champions' },
              { src: 'stevensonteam.jpg', alt: 'Team Photo', caption: 'Team Photo' },
              { src: 'whitehouse.png', alt: 'White House Visit', caption: 'White House Visit' },
            ].map(({ src, alt, caption }) => (
              <div key={src} className="aspect-[3/4] overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/aboutme/${src}`}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="w-full mb-12">
            <a
              href="https://youtu.be/rHX1UpAAU34?feature=shared&t=1891"
              onClick={(e) => {
                e.preventDefault();
                openVideoModal('https://www.youtube.com/embed/rHX1UpAAU34?si=flqXze0ZItCeFJrL&amp;start=1891');
              }}
              className="cursor-pointer block relative group"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/aboutme/Moran_Hoke_Set.jpg`}
                alt="Tyler Hoke setting during a game"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <svg className="h-16 w-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>
            <p className="text-center text-sm text-gray-500 mt-4 font-light">2023 National Championship Game</p>
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
