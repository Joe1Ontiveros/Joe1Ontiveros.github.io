/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

"use client";
import React from "react";
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import "dev/comp/style.css";
import { Route,Routes, BrowserRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import  Research  from '../app/research/page';
import  Home  from '../app/page';
import Projects from 'dev/app/projects/page';
import Experience from "dev/app/experience/page";

export const Header = ({ className }) => {
  // hot fix for navigation bar redirecting, forced a refresh to update the page on click
  function onClickResearch() {
    window.location.href = "/research"
  }
  function onClickExperience() {
    window.location.href = "/experience"
  }
  function onClickProjects() {
    window.location.href = "/projects"
  }
  function onClickHome() {
    window.location.href = "/"
  }

  return (
    <BrowserRouter>
    <div className={`header ${className}`}>
      <div className="overlap">
        <div className="rectangle" />
        <div className="abot">
          <div className="overlap-group">
            <div className="div" />
            {/* <div className="text-wrapper">About Me</div> */}
            <Link onClick={onClickHome} className="text-wrapper" to="">About Me</Link>
          </div>
        </div>
        <div className="reserc">
          <div className="overlap-2">
            <div className="rectangle-2" />
            <Link onClick={onClickResearch} className="text-wrapper-2" to="/research">Research</Link>
            
          </div>
        </div>
        <div className="exper">
          <div className="overlap-3">
            <div className="rectangle-3" />
            <Link onClick={onClickExperience} className="text-wrapper-3" to="/experience">Experience</Link>
          </div>
        </div>
        <div className="proj">
          <div className="overlap-4">
            <div className="rectangle-4" />
            <Link onClick={onClickProjects} className="text-wrapper-4" to="/projects">Projects</Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="" component={Home} />
        <Route path="/experience" component={Experience} />
        <Route path="/research" component={Research}/>
        <Route path="/projects" component={Projects}/>
      </Routes>
    </div>
    </BrowserRouter>
  

  );
  
};

export default Header;
