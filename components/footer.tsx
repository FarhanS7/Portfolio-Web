"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 border-t border-muted relative">
      <div className="absolute inset-0 grid-background opacity-10 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold text-white">
              <span className="text-primary">{"<"}</span>
              <span className="glow-text">DevName</span>
              <span className="text-primary">{"/>"}</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <Link
              href="#home"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="mt-1">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
