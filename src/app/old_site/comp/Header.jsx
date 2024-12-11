"use client";
import React from "react";
import "./style.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import Research from '../research/page';
import Home from '../page';
import Projects from '../projects/page';
import Experience from '../experience/page';

export const Header = ({ className }) => {
  // hot fix for navigation bar redirecting, forced a refresh to update the page on click
  function onClickResearch() {
    window.location.href = "/old_site/research";
  }
  function onClickExperience() {
    window.location.href = "/old_site/experience";
  }
  function onClickProjects() {
    window.location.href = "/old_site/projects";
  }
  function onClickHome() {
    window.location.href = "/old_site";
  }

  return (
    <BrowserRouter>
      <div className={`header ${className}`}>
        <div className="overlap">
          <div className="rectangle" />
          <div className="abot">
            <div className="overlap-group">
              <div className="div" />
              <Link onClick={onClickHome} className="text-wrapper" to="/old_site">About Me</Link>
            </div>
          </div>
          <div className="reserc">
            <div className="overlap-2">
              <div className="rectangle-2" />
              <Link onClick={onClickResearch} className="text-wrapper-2" to="/old_site/research">Research</Link>
            </div>
          </div>
          <div className="exper">
            <div className="overlap-3">
              <div className="rectangle-3" />
              <Link onClick={onClickExperience} className="text-wrapper-3" to="/old_site/experience">Experience</Link>
            </div>
          </div>
          <div className="proj">
            <div className="overlap-4">
              <div className="rectangle-4" />
              <Link onClick={onClickProjects} className="text-wrapper-4" to="/old_site/projects">Projects</Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Header;