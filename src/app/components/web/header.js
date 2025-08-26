"use client";
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import "./head.css";

// Home icon SVG
// export const Logo = () => (
//   <svg className="h-8 w-auto" aria-label="Home" viewBox="0 0 24 24" fill="none">
//     <path d="M3 12L12 4l9 8" stroke="currentColor" strokeWidth="2" fill="none"/>
//     <path d="M9 21V14h6v7" stroke="currentColor" strokeWidth="2" fill="none"/>
//     <path d="M3 12v9h6v-7h6v7h6v-9" stroke="currentColor" strokeWidth="2" fill="none"/>
//   </svg>
// );

export default function AppNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className="navbar w-full flex flex-wrap items-center justify-between px-4 py-2 relative">
      <NavbarBrand>
        <Link href="/home" aria-label="Home" className="flex items-center">
          {/* <Logo /> */}
          <p className="ml-2 font-bold text-inherit">Joe Ontiveros Portfolio</p>
        </Link>
      </NavbarBrand>

      {/* Hamburger for mobile */}
      <button
        className="sm:hidden flex items-center px-3 py-2 border rounded text-gray-400 border-gray-600"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Desktop Menu */}
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/research">
            Research
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/experience">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/home">
            About Me
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop Contact Button */}
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button as={Link} color="secondary" href="https://www.linkedin.com/in/joeontiveros/" variant="flat">
            Contact Me!
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full w-full sm:hidden mt-2 bg-black rounded-b-lg shadow-lg z-50">
          <div className="flex flex-col items-center gap-2 py-2">
            <Link href="/research" className="block w-full px-4 py-2 text-white hover:bg-gray-800 rounded">Research</Link>
            <Link href="/experience" className="block w-full px-4 py-2 text-white hover:bg-gray-800 rounded">Experience</Link>
            <Link href="/projects" className="block w-full px-4 py-2 text-white hover:bg-gray-800 rounded">Projects</Link>
            <Link href="/home" className="block w-full px-4 py-2 text-white hover:bg-gray-800 rounded">About Me</Link>
            <Button
              as={Link}
              color="secondary"
              href="https://www.linkedin.com/in/joeontiveros/"
              variant="flat"
              className="w-full mt-2"
            >
              Contact Me!
            </Button>
          </div>
        </div>
      )}
    </Navbar>
  );
}