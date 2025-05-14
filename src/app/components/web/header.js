"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import "./head.css";

// Home icon SVG
export const Logo = () => (
  <svg className="h-8 w-auto" aria-label="Home" viewBox="0 0 24 24" fill="none">
    <path d="M3 12L12 4l9 8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M9 21V14h6v7" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M3 12v9h6v-7h6v7h6v-9" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export default function AppNavbar() {
  return (
    <Navbar className="navbar">
      <NavbarBrand>
        <Link href="/" aria-label="Home" className="flex items-center">
          <Logo />
          <p className="ml-2 font-bold text-inherit">Joe Ontiveros</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="research">
            Research
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="experience">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="home">
            About Me
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="https://www.linkedin.com/in/joeontiveros/" variant="flat">
            Contact Me!
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}