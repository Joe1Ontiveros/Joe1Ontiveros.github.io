
"use client";
import Nav from "../components/web/header";
import './home.css';
import { useEffect, useRef } from 'react';

export default function Home() {
  const roboticHandRef = useRef(null);

  useEffect(() => {
    // Animation for the robotic hand
    if (roboticHandRef.current) {
      const hand = roboticHandRef.current;
      
      // Simple hover animation
      const handleMouseMove = (e) => {
        const { left, top, width, height } = hand.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 20;
        const y = (e.clientY - top - height / 2) / 20;
        
        hand.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.05)`;
      };
      
      // Reset animation when mouse leaves
      const handleMouseLeave = () => {
        hand.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      };
      
      hand.addEventListener('mousemove', handleMouseMove);
      hand.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        hand.removeEventListener('mousemove', handleMouseMove);
        hand.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <main className=" min-h-screen ">
      <Nav />
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center">
          {/* Text Content - Left Side */}
          <div className="max-w-3xl md:w-3/5">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="digi bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Innovating. Hard Working and Dedicated.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Developer. Designer. Problem Solver.
            </p>
            <a href="/research" className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300">
              Explore My Projects & Research!
            </a>
          </div>
          
          {/* Static Image - Right Side */}
          <div className="md:w-2/5 mt-8 md:mt-0">
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src="/images/CCD1.png" 
                alt="Tech Arm" 
                className="rounded-lg object-cover object-center shadow-2xl"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)'
                }}
              />
              {/* Optional overlay */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-500/10 to-purple-600/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="imageC1"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Undergraduate Research & Distinction Project </h3>
                <p className="text-gray-400 mb-4">A collection of research projects I worked on as an Undergrad and my distinction project focusing on MAV and AR Robotics Research</p>
                <a href="/research" className="text-blue-400 font-medium hover:text-blue-300">View Project →</a>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Work Experience and Skills</h3>
                <p className="text-gray-400 mb-4"> Explore my past work experience and all of my skils in this interactive resume!</p>
                <a href="/experience" className="text-blue-400 font-medium hover:text-blue-300">View Project →</a>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Side Projects and Open Source Contributions</h3>
                <p className="text-gray-400 mb-4">See other projects ive worked on in my free time and my contributions to various open-source software projects!</p>
                <a href="/projects" className="text-blue-400 font-medium hover:text-blue-300">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Robotic Hand */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                {/* Robotic Hand Container with Animation */}
                <div 
                  ref={roboticHandRef}
                  className="w-64 h-64 md:w-80 md:h-80 mx-auto flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-4 overflow-hidden transition-transform duration-300"
                  style={{ 
                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)', 
                    transform: 'perspective(1000px)'
                  }}
                >
                  {/* headshot Image */}
                  <div className="w-full h-full relative flex items-center justify-center">
                  <img 
                    src="/images/headshot_1.jpg" 
                    alt="Headshot" 
                    className="w-full h-full object-cover rounded-full border-2 border-black"
                  />              
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-600/30 mix-blend-overlay rounded-full "></div>
                  </div>
                </div>
                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-pulse "></div>
                        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}} ></div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">About Me</h2>
                        <p className="text-gray-300 mb-6">
                        I'm a developer passionate about creating beautiful, functional and innoative applications!
                        </p>
                        <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Swift</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">React</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">SwiftUI</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Next.js</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Tailwind CSS</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Robotics</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">ROS</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">MAV</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Augmented Reality</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Unity</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Research</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Software Architecture</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Infrastructure</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">C</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">C++</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">C#</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Python</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Java</span>
                        </div>
                      </div>
                      </div>
                    </div>
                    </section>

                    {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations/connections or just a friendly chat.
          </p>
          <a
            href="https://www.linkedin.com/in/joeontiveros/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300 inline-block"
          >
            Get In Touch
          </a>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/Joe1Ontiveros" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a> */}
            {/* <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
              </svg>
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">Joe Ontiveros Portfolio Website © NextJS & HeroUI 2025.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition">Terms</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}