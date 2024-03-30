"use client";

import React from "react";
import { Header } from "dev/comp/Header";
// import "./style.css";
// import Image from 'next/image'
import NoSSRWrapper from  "dev/comp/nossr"; 

const Experience = ({ className }) => {
  return (
    //   <div className={`EXPERIENCE`}>
    <NoSSRWrapper>
      <div>
        <Header className="header-instance" />
          <p>
              Work in progress! Coming Soon! In the meantime, check out my LinkedIn for up to date work experience!!
          </p>
          <href>https://www.linkedin.com/in/joeontiveros/</href>
      </div>
    </NoSSRWrapper>
  );
};

export default Experience;
