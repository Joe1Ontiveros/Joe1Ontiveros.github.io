import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joe's Portfolio",
  description: "By Joe Ontiveros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.variable, "bg-background text-foreground h-full")}>{children}</body>
    </html>
  );
}