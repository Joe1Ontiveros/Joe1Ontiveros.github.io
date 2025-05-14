"use client";
import Image from "next/image";
import RenderModel from "./components/RenderModel";
import ModelMain from "./components/models/Scene";
import bg from "../../public/background-1.png";
import Link from "next/link";
import { useState } from "react";
import './home/home.css';
import './globals.css';
export default function Home() {
  const [choice, setChoice] = useState(null);

  if (choice === "3D") {
    window.location.href="/3D/";
    return null;
  }

  if (choice === "2D") {
    window.location.href = "/home/";
    return null;
  }

  return (
    <div>
      <main className="flex min-h-screen h-full w-full bg-black text-green-500">
        <div className="m-auto text-center">
          <p className="text-[80px] mb-4 text-abduc flicker">
            <span className="animate-typing overflow-hidden whitespace-nowrap inline-block border-r-4 border-green-500">
              Welcome! Please choose an option:
            </span>
          </p>
          <div className="space-y-8">
            <div>
              <button
                className="bg-black text-green-500 border border-green-500 px-6 py-3 text-[80px] hover:bg-green-500 hover:text-black transition-all text-digi flicker"
                onClick={() => setChoice("3D")}
              >
                Logout
              </button>
              <div className="mt-2 text-[24px] text-green-400 font-mono">
                Game Development &amp; 3DCGI Portfolio
              </div>
            </div>
            <div>
              <button
                className="bg-black text-green-500 border border-green-500 px-6 py-3 text-[80px] hover:bg-green-500 hover:text-black transition-all text-digi flicker"
                onClick={() => setChoice("2D")}
              >
                Continue
              </button>
              <div className="mt-2 text-[24px] text-green-400 font-mono">
                Web Design, Robotics Research &amp; Software Development Portfolio
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .animate-typing {
            animation: typing 4s steps(40, end), blink 0.5s step-end infinite;
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes blink {
            from,
            to {
              border-color: transparent;
            }
            50% {
              border-color: green;
            }
          }

          .flicker {
            animation: flicker 1.8s infinite;
          }

          @keyframes flicker {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.45;
            }
          }
        `}</style>
      </main>
    </div>
  );
}