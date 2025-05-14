"use client";
import Nav from "../components/web/header";
import './home.css';
import { useEffect, useRef } from 'react';

export default function Research() {
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
  // Helper for square image blocks (responsive)
  const SquareImage = ({ src, alt, className = "" }) => (
    <div
      className={`aspect-square w-full max-w-xs md:max-w-sm lg:max-w-md flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-gray-800 ${className}`}
      style={{ minWidth: "200px" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );

  return (
    <main className="min-h-screen">
      <Nav />
      <div className="background:white">
      {/* only for showcase:  */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4  bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Undergraduate Showcase 2025 Directory: 
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          See the following links for more information on this poster!
        </p>
      </section>
      </div>
      {/* Link-tree Section */}
      <section className="flex flex-col items-center gap-6 py-8">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/joeontiveros/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
          >
            <svg width="24" height="24" fill="currentColor" className="inline-block">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/>
            </svg>
            LinkedIn
          </a>
          {/* Video Demo */}
          <a
            href="https://drive.google.com/file/d/1rNqAWKP_EVo87If2-DZPhmVQS92EEAuM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition"
          >
            <svg width="24" height="24" fill="currentColor" className="inline-block">
              <path d="M21.8 7.2c-.2-.8-.8-1.4-1.6-1.6-1.4-.4-7.2-.4-7.2-.4s-5.8 0-7.2.4c-.8.2-1.4.8-1.6 1.6-.4 1.4-.4 4.3-.4 4.3s0 2.9.4 4.3c.2.8.8 1.4 1.6 1.6 1.4.4 7.2.4 7.2.4s5.8 0 7.2-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.3.4-4.3s0-2.9-.4-4.3zm-12.8 7.3v-6l6 3-6 3z"/>
            </svg>
            Video Demo
          </a>
          {/* LBR Paper */}
          <a
            href="https://drive.google.com/file/d/1EErKMRjtdjp4OqlQXHjBt_5XwxBBTT2n/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition"
          >
            <svg width="24" height="24" fill="currentColor" className="inline-block">
              <path d="M19 2H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6l-5-4zm-1 16H8V4h7.17L18 6.83V18zm-7-2h6v2h-6v-2zm0-4h6v2h-6v-2zm0-4h6v2h-6V8z"/>
            </svg>
            LBR Paper In Progress
          </a>
          {/* Poster Sources */}
          <a
            href="https://drive.google.com/file/d/1g3NLYMSbH4enjKYSTWUS6pw1Ly_8jDBC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow transition"
          >
            <svg width="24" height="24" fill="currentColor" className="inline-block">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Poster Sources
          </a>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-digi bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Research & Projects Showcase
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Explore my undergraduate research journey below!.
        </p>
      </section>
      <section className="flex flex-col gap-24">
        {/* Block 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 px-6 lg:px-24">
          <SquareImage src="/images/w12.png" alt="Summer Research" className="md:w-1/2 w-full" />
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">Freshmen Year: Summer Research Initiative</h2>
            <p className="text-gray-300 mb-4">
              My first project and introduction to robotics & MAV research! Presented at 2024 DU Undergraduate Symposium!
            </p>
            <a href="https://drive.google.com/file/d/1UFN1Btqe13JVDulh3nu-I56Vuz8xZCh8/view?usp=sharing" className="text-blue-400 font-medium hover:text-blue-300">View Poster →</a>
          </div>
        </div>


        {/* Large Image Chunk */}
        <div className="w-full h-96 my-8 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
          <img src="/images/hlshow_y2.jpg" alt="Large Project Visual" className="w-full h-full object-cover" />
        </div>

        {/* Block 2 */}
        {/* <div className="flex flex-col md:flex-row-reverse items-center gap-12 px-6 lg:px-24">
          <div className="imageC2 w-full md:w-1/2 h-64 rounded-2xl shadow-2xl"></div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Sophmore Year & 2024 P.I.N.S</h2>
            <p className="text-gray-300 mb-4">
              Explored pre-liminary research into Multi-MAV and Augmented Reality Swarm control using the micro-MAV Crazyflie platform!
            </p>
            <a href="https://drive.google.com/file/d/1LPsz_kE9knOFlAN-8ht9wA3kPLr8CfQq/view?usp=sharing" className="text-blue-400 font-medium hover:text-blue-300">View Experience →</a>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 px-6 lg:px-24">
          <SquareImage src="/images/w13.jpg" alt="PINS Research" className="md:w-1/2 w-full" />
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">Sophomore Year & 2024 P.I.N.S</h2>
            <p className="text-gray-300 mb-4">
              Explored preliminary research into Multi-MAV and Augmented Reality Swarm control using the micro-MAV Crazyflie platform!
            </p>
            <a href="https://drive.google.com/file/d/1LPsz_kE9knOFlAN-8ht9wA3kPLr8CfQq/view?usp=sharing" className="text-blue-400 font-medium hover:text-blue-300">View Experience →</a>
          </div>
        </div>
        {/* Large Image Chunk */}
        <div className="w-full h-96 my-8 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
          <img src="/images/HL_show_1.jpg" alt="Headshot Large" className="w-full h-full object-cover" />
        </div>

        {/* Block 3 */}
        {/* <div className="flex flex-col md:flex-row items-center gap-12 px-6 lg:px-24">
          <div className="imageC3 w-full md:w-1/2 h-64 rounded-2xl shadow-2xl"></div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Undergraduate Distinction Project</h2>
            <p className="text-gray-300 mb-4">
              A collection of my previous works, I aim to study 2 methods and do a thorough analysis for a future publication
            </p>
            <a href="/projects" className="text-blue-400 font-medium hover:text-blue-300">View Projects →</a>
          </div>
        </div>
      </section> */}
        <div className="flex flex-col md:flex-row items-center gap-12 px-6 lg:px-24">
          <SquareImage src="/images/HL_show_2.jpg" alt="Distinction Project" className="md:w-1/2 w-full" />
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">Senior Year & Undergraduate Distinction Project</h2>
            <p className="text-gray-300 mb-4">
              A collection of my previous works, I aim to study 2 methods and do a thorough analysis for a future publication.
            </p>
            <a href="/projects" className="text-blue-400 font-medium hover:text-blue-300">View Projects →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">Joe Ontiveros Portfolio Website © NextJS & HeroUI 2025.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {/* <a href="#" className="text-gray-500 hover:text-gray-300 transition">Privacy</a> */}
              {/* <a href="#" className="text-gray-500 hover:text-gray-300 transition">Terms</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition">Contact</a> */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}