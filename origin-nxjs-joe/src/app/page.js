// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }


'use client';

import React from "react";
import { Header } from "../comp";
import "./style.css";
import NoSSRWrapper from  "dev/comp/nossr"; 

// import {Research} from "dev/app/research";
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {BrowserRouter} from 'reac/t-router-dom';

export const Home = ({ className }) => {
  return (
      <NoSSRWrapper>
      <div className="HOME-ABOUT-SKILLS-PG">
        <div className="div-2">
          <div className="overlap-5">
            <div className="footer" />
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  Built with JavaScript React, Figma &amp; the Anima Plugin
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
