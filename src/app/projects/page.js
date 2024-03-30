"use client";

import React from "react";
import { Header } from "dev/comp/Header";
// import {Home} from "dev/app/page";
import NoSSRWrapper from  "dev/comp/nossr"; 
// import "./style.css";
// import Image from 'next/image'
const Projects = ({ className }) => {
  return (
    //   <div className={`EXPERIENCE`}>
    <NoSSRWrapper>
    <div>
      <Header className="header-instance" />
      <p>
        Work in progress! Coming Soon! In the meantime, check out my LinkedIn to learn more about what i've been working on!
      </p>
      <href>https://www.linkedin.com/in/joeontiveros/</href>      
    </div>
    </NoSSRWrapper>
  );
};

export default Projects;
