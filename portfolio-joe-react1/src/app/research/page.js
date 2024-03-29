
"use client";
import React from "react";
import { Header } from "dev/comp/Header";
// import {Home} from "dev/app/page";
import "./styleres.css";
// import Image from 'next/image'
import NoSSRWrapper from  "dev/comp/nossr"; 

const Research = ({ className }) => {
  // const images = [
  //   {
  //     src: './img1.jpeg',
  //     alt: 'SRI Slide demo view',
  //   },
  //   // ... more images
  // ]
  return (<NoSSRWrapper>
        <div className={`RESEARCH`}>
        <div className="div-2">
          <Header className="header-instance" />
          <div className="overlap-5">
            <div className="text-wrapper-5">Undergraduate Research</div>
            <p className="over-the-summer-of">
              Over the Summer of 2023, I was awarded a summer research grant and stipend from the Rocky Mountain Associations
              for minority participation and by the Equity in STEM program at DU, with the goal of fostering minority participation in research.
              <br />
              <br />Throughout the summer of 2023, I worked with ARISE Laboratory and Dr. Christopher Reardon to create and
              integrate an intuitive user interface for controlling multiple MAVs (micro-air vehicles) through the use of
              ROS Noetic, Rviz, Python3, and the tkinter library.
            </p>

            <img className="presentfinal" src="./img1.jpeg"/>
            {/* <img className="presentfinal" src="https://drive.usercontent.google.com/download?id=148maOvWBh7dTidvhIzqcJB9eJ_sVNau9&authuser=0"/> */}
            <p className="following-the-summer">
              Following the Summer Research Initiative, I applied and got accepted a Partners in Scholarship award (P.I.N.S) by the University of Denver to continue my research.
              <br />
              My continuation of the research involves creating a new interface for augmented reality systems such as the HoloLens 2,
              where users can control the MAV’s trajectory through interactive 3D environments.
              Additionally, incorporating various safety features such as geo-fencing and collision avoidance
              from the CrazySwarm to better improve the overall safety and usability of the interface for
              non-experienced users.
            </p>
            <img className="image" alt="Image" src="./img3r.png"/>
            <img className="img" alt="Rectangle" src="./img2r1.png" />
          </div>
        </div>
        </div>
        </NoSSRWrapper>);
};

export default Research;
