"use client";
import Nav from "../components/web/header";
import "./home.css";

const experiences = [
    {
        logo: "/images/du.png", // Local fallback for University of Denver seal
        role: "Undergraduate Researcher (Unpaid, Passion Project)",
        org: "ARISE Laboratory",
        location: "Denver, Colorado, US",
        dates: "June 2023 - Current",
        highlights: [
            "Received Computing Research Association (CRA) Honorable Mention and Partners in Scholarship award for developing Human-Robot Interaction AR software enabling intuitive control of MAV robotic swarms.",
            "Developed AR interface using Microsoft HoloLens 2 and Unity Engine, implementing novel algorithmic methods for MAV trajectory generation through 3D digital-twins.",
            "First author of research paper at SSRR 2024 and lead research developer at ARISE Labs, directing MAV platforms/software development and mentoring peers in robotics research.",
            "Technical Skills: Python3, C++, ROS Noetic, Unity Engine, Ubuntu Linux, HoloLens 2, MAVROS, PX4 Autopilot, AR Development, Robotics Systems, Embedded Programming.",
            "Soft Skills: Project Management, Research Leadership, Technical Communication, Software Architecture, Agile Development."
        ]
    },
    {
        logo: "/images/xcel.png",
        role: "IT Portfolio Architecture Intern",
        org: "Xcel Energy",
        location: "Denver, Colorado, US",
        dates: "January 2025 - Present",
        highlights: [
            "Developing and maintaining enterprise-scale software architecture for pioneering energy grid management solutions serving millions of customers.",
            "Contributing to design and implementation of mission-critical internal systems, focusing on infrastructure reliability and power distribution efficiency.",
            "Collaborating with UAS (Unmanned Aircraft Systems) team on drone technology integration, developing software solutions for utility infrastructure inspection and management.",
            "Technical Skills: Software Development, Software Infrastructure, System Architecture, Cloud Computing, UAS Software Integration.",
            "Soft Skills: Project Management, Cross-functional Collaboration, Technical Documentation, Requirements Analysis, System Design."
        ]
    },
    {
        logo: "/images/mutual.png", // Replace with actual logo
        role: "Data QA Software Engineer Intern",
        org: "Mutual Markets",
        location: "Denver, Colorado, US - Remote",
        dates: "July 2024 - January 2025",
        highlights: [
            "Developed and implemented data quality assurance software using NodeJS and PostgreSQL within a docker container. Achieved an automated Command-Line Interface that automates Data QA and management significantly.",
            "Created a PostgreSQL database that would handle .CSV files with thousands of CBS & NBC TV-show data.",
            "Automated the quality assurance process for LLM-Generated data, worked with Machine Learning engineers and the CTO to create scalable and business valuable software.",
            "Technical Skills: Docker, NodeJS, SQL, PostgreSQL, Database Management, Machine Learning, Web Development, Algorithms & Data Structures, JavaScript, OpenAI API, API Development, MySQL, NodeJS PostgreSQL, Command-Line Interface, Developer Platforms.",
            "Soft Skills: Teamwork, Time Management, Communication, Collaboration, Analytical Thinking, Automation, Integrating feedback."
        ]
    }
];

export default function Experience() {
    return (
        <main className="bg-black text-white min-h-screen flex flex-col">
            <Nav />
            <section className="flex flex-1 flex-col items-center py-12">
                <h1 className="text-4xl font-bold mb-8 text-blue-400">Experience</h1>
                <div className="w-full max-w-3xl space-y-10">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col md:flex-row items-center bg-gray-900 rounded-lg shadow-lg p-6"
                        >
                            <img
                                src={exp.logo}
                                alt={exp.org + " logo"}
                                className="w-20 h-20 object-contain rounded-full border-2 border-blue-400 mb-4 md:mb-0 md:mr-8 bg-white"
                            />
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h2 className="text-2xl font-semibold">{exp.role}</h2>
                                        <h3 className="text-lg text-blue-300">{exp.org}</h3>
                                    </div>
                                    <div className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
                                        <div>{exp.location}</div>
                                        <div>{exp.dates}</div>
                                    </div>
                                </div>
                                <ul className="mt-4 list-disc list-inside space-y-1 text-gray-200">
                                    {exp.highlights.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <footer className="py-6 bg-black border-t border-gray-800">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <p className="text-gray-500">
                        Joe Ontiveros Portfolio Website © NextJS & HeroUI 2025.
                    </p>
                </div>
            </footer>
        </main>
    );
}
