'use client';
import React from "react";
import { Header } from "../comp";
import "./style.css";
import NoSSRWrapper from  "dev/comp/nossr"; 

export const Home = ({ className }) => {
  return (
    // TODO: replace the Anima live image links with local files in /public/
      <NoSSRWrapper>
      <div className="HOME-ABOUT-SKILLS-PG">
        <div className="div-2">
          <div className="overlap-5">
            <div className="footer" />
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  Built with NextJs, a JsReact Framework, as well as Figma &amp; the Anima Plugin.
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">Contact me at jontiverosrodriguez1@gmail.com !</span>
              </p>
            </div>
          </div>
          <div className="overlap-6">
            <div className="rectangle-5" />
            <Header className="header-instance" />
            <p className="hey-my-name-is-joe">
              Hey! my name is Joe Ontiveros and im studying computer science at the University of Denver! Born and raised
              in Westwood Denver, Ive always had an interest in technology! In my free time I enjoy working on side
              projects, research and&nbsp;&nbsp;&amp; learning animation! I aspire to use my skills to create new
              technologies and works of art that inspire and helps people. Check out my side projects to learn more about
              my interests and I hope you consider me in a future opportunity, or feel free to reach out to me on
              LinkedIn!
            </p>
            <img
              className="pixilstudio"
              alt="Pixilstudio"
              src="https://c.animaapp.com/izjMSMnZ/img/pixilstudio-headshots-010-1.png"
            />
            <div className="text-wrapper-5">Skills</div>
            <div className="rectangle-6" />
            <img className="citsc" alt="Citsc" src="https://c.animaapp.com/izjMSMnZ/img/citsc1-1.png" />
            <img className="image" alt="Image" src="https://c.animaapp.com/izjMSMnZ/img/image-2@2x.png" />
          </div>
          <div className="ICONSX">
            <div className="vector-wrapper">
              <img className="vector" alt="Vector" src="https://c.animaapp.com/izjMSMnZ/img/vector.svg" />
            </div>
            <div className="icon-bot-wrapper">
              <img className="icon-bot" alt="Icon bot" src="https://c.animaapp.com/izjMSMnZ/img/---icon--bot-@2x.png" />
            </div>
            <div className="icon-draw-shape-wrapper">
              <img
                className="icon-draw-shape"
                alt="Icon draw shape"
                src="https://c.animaapp.com/izjMSMnZ/img/---icon--draw-shape-@2x.png"
              />
            </div>
            <div className="fa-group-wrapper">
              <img className="fa-group" alt="Fa group" src="https://c.animaapp.com/izjMSMnZ/img/fa-group.svg" />
            </div>
          </div>
          <div className="frame">
            <p className="my-primary">
              My primary programming languages are Python3, C#, Java, HTML,CSS,
              <br /> I am knowledgeable in C++,C, JavaScript,ReactJs.
            </p>
            <p className="i-am-proficient-at">
              I am proficient at the ROS 1 and Unity platforms. I love working with robotics and drones here at ARISE
              Lab!&nbsp;&nbsp;See my research section for more information!
            </p>
            <p className="i-have-a-growing">
              I have a growing interest in Animation &amp; 3D CGI and im actively self-teaching and improving my skills! I
              find it to be a great artistic medium and provides a lot of freedom of expression!
            </p>
            <p className="p">
              Thanks to my Entrepreneurship Minor! I am knowledgeable in various aspects regarding marketing and business
              management.
            </p>
          </div>
        </div>
      </div>
      </NoSSRWrapper>
  );
};




export default Home;
