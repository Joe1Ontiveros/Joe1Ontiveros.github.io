"use client";
import React from "react";
import { Header } from "../comp/Header";
import "./stylemr.css";
import NoSSRWrapper from "../comp/nossr";

const Projects = ({ className }) => {
  return (
    <NoSSRWrapper>
      <div className={`PROJECTS`}>
        <div className="div-2">
          <Header className="header-instance" />
          <div className="overlap-5">
            <div className="text-wrapper-5">Projects</div>
            <div className="project-entry">
              <h3>Introduction to Programming I, II</h3>
              <p>University of Denver | Denver, Colorado, USA | September 2022 - March 2023</p>
              <ul>
                <li>Created various projects as a part of the introduction to programming curriculum in Python3</li>
                <li>Using various algorithms and packages, I visualized my programs in a 2D canvas and made it accessible to all users</li>
                <li>Learned <strong>HTML/CSS and basics of JavaScript</strong> to create a portfolio site hosted on a linux server</li>
                <li><strong>Technical Skills:</strong> Python3, Pandas, matplotlib, numpy, Tkinter, Canvas-based packages (DuDraw), CSS, HTML, JavaScript</li>
                <li><strong>Soft Skills:</strong> Presentation Skills, Computer Programming, Teamwork, Logical Thinking, Implementing Pseudo code</li>
              </ul>
            </div>
            <div className="project-entry">
              <h3>Introduction to Algorithms I & II</h3>
              <p>University of Denver | Denver, Colorado, USA | March 2023 - March 2024</p>
              <ul>
                <li>Learned and implemented various algorithms commonly used in software and the concepts behind dynamic programming algorithms and their design as well as optimizing for performance</li>
                <li><strong>Using python3, Java, and C#</strong>, I implemented various sorting algorithms, graph searching algorithms, Iterative closest point algorithms, as well as various data structures such as adjacency lists, linked lists, and hash maps</li>
                <li><strong>Technical Skills:</strong> Python3, Java, C#, Algorithms, Dynamic Programming, Optimization, matplotlib, Canvas-based packages (Du Draw)</li>
                <li><strong>Soft Skills:</strong> Algorithmic Thinking, Teamwork, Logical Thinking, Implementing Pseudo code & Algorithms, Optimizing Software, Software Design</li>
              </ul>
            </div>
            <div className="project-entry">
              <h3>Ethical Hacking & Penetration testing</h3>
              <p>University of Denver | Denver, Colorado, USA | March 2024 - June 2024</p>
              <ul>
                <li>Learned about penetration testing, the CIA Triad, and the basics of Kali Linux, as well as ethical practices for cybersecurity and safe programming in general</li>
                <li>Worked towards a final project where I used the Linux terminal shell, packet sniffing, Metasploitable Framework and other skills from the course to conduct a penetration test on a Windows 7 device, and various Metasploitable Virtual Machines</li>
                <li><strong>Technical Skills:</strong> Linux, Linux Shell, OPSEC basics, CyberSecurity, Encryption, Decryption, Ethics</li>
                <li><strong>Soft Skills:</strong> Computer Hacking, Reverse Engineering, Teamwork</li>
              </ul>
            </div>
            <div className="project-entry">
              <h3>Next.js Personal Website</h3>
              <p>Personal Project | Denver, Colorado, USA | July 2024 - Present</p>
              <ul>
                <li>Developing a modern, responsive personal website using Next.js, showcasing portfolio, projects, and professional achievements</li>
                <li>Implementing server-side rendering (SSR) and static site generation (SSG) for optimal performance and SEO</li>
                <li>Utilizing Tailwind CSS for responsive design and creating a clean, modern user interface</li>
                <li><strong>Technical Skills:</strong> Next.js, React, NodeJS, Tailwind CSS, Responsive Web Design, Server-Side Rendering</li>
                <li><strong>Soft Skills:</strong> Web Development, UI/UX Design, Performance Optimization</li>
              </ul>
            </div>
            <div className="project-entry">
              <h3>Raspberry Pi Webserver Platform</h3>
              <p>Innovation Lab | Denver, Colorado, USA | August 2024 - Present</p>
              <ul>
                <li>Developing and updating backend infrastructure to provide additional features such as updated image banners and video advertisements to a Pi-based Smart TV screen at the Innovation Labs</li>
                <li>Implementing software architecture to handle image and videos, processing, and real-time updates from a webserver/terminal</li>
                <li><strong>Technical Skills:</strong> Raspberry Pi, Linux Server Management, Backend Development, APIs, Web Development, Django, Python, Data Management</li>
                <li><strong>Soft Skills:</strong> System Architecture, Cloud & Remote Computing, Continuous Integration, Technical Innovation, Documentation, Web Server Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </NoSSRWrapper>
  );
};

export default Projects;