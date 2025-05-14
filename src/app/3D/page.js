"use client";
import Image from "next/image";
import RenderModel from "../components/RenderModel";
import ModelMain from "../components/models/Scene";
// import bg from "../../public/background-1.png";
import Link from "next/link";
import { useState } from "react";
import './home.css';
import '../globals.css';


export default function Page() {
    return (
        <main className="flex flex-col min-h-screen h-full w-full items-center justify-between">
            <header className="w-full text-center mt-8">
                <h1 className="text-2xl font-bold">work in progress! check back soon! [Built with Three.js & Blender!] </h1>
            </header>
            <div className="flex-grow w-full flex items-center justify-center">
                <div className="w-full h-full">
                    <RenderModel>
                        <ModelMain />
                    </RenderModel>
                </div>
            </div>
            <footer className="w-full flex justify-center mb-8">
                <Link href="/">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Return to Home page
                    </button>
                </Link>
            </footer>
        </main>
    );
}