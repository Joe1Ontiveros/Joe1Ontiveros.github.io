import { Inter } from "next/font/google";
import "../globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Joe Ontiveros - Software Engineer | Robotics | Research",
    tags: [
        "software engineering", "robotics", "research", "artificial intelligence", "machine learning",
        "autonomous systems", "programming", "coding", "technology", "software development",
        "web development", "data science", "innovation", "Denver", "Colorado", "Denver tech",
        "Colorado software engineering", "robotics research", "AI development", "Denver robotics",
        "Colorado innovation", "Denver software engineer", "robotics engineering", "research and development"
    ],
    description: "Explore the portfolio of Joe Ontiveros, a software engineer specializing in robotics, research,UI/UX Design, Web development, and cutting-edge technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.variable, "bg-background text-foreground h-full")}>{children}</body>
    </html>
  );
}