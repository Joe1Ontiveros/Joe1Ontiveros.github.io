"use client";
import Nav from "../components/web/header";
import "./home.css";
import { useEffect } from "react";

export default function Projects() {
    useEffect(() => {
        document.body.style.scrollBehavior = "smooth";
        return () => {
            document.body.style.scrollBehavior = "auto";
        };
    }, []);

    return (
        <main className="bg-black text-white min-h-screen flex flex-col">
            <Nav />
            <section className="flex flex-1 flex-col items-center justify-center">
                <div
                    className="w-48 h-48 rounded-full mb-8 shadow-lg"
                    style={{
                        backgroundImage:
                            "url('https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k=')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    aria-label="Construction"
                />
                <h1 className="text-4xl font-bold mb-4 text-blue-400">Coming Soon!</h1>
                <p className="text-lg text-gray-300">This page is under construction.</p>
            </section>
            <footer className="py-6 bg-black border-t border-gray-800">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <p className="text-gray-500">Joe Ontiveros Portfolio Website © NextJS & HeroUI 2025.</p>
                </div>
            </footer>
        </main>
    );
}
