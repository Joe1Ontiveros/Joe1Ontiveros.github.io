"use client";

import React from "react";
import { Header } from "dev/comp/Header";
// import {Home} from "dev/app/page";
import NoSSRWrapper from  "dev/comp/nossr"; 

// import "./style.css";
// import Image from 'next/image'


const Projects = ({ className }) => {
  // ssr: false,

  // const images = [
  //   {
  //     src: './img1.jpeg',
  //     alt: 'SRI Slide demo view',
  //   },
  //   // ... more images
  // ]
  return (
    //   <div className={`EXPERIENCE`}>
    <NoSSRWrapper>
    <div>
      <Header className="header-instance" />
      <p>
          Work in progress! Coming Soon!
      </p>
    </div>
    </NoSSRWrapper>
  );
};

export default Projects;
