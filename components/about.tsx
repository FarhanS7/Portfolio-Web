"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { FileText, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 grid-background opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary glow-border">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="text-primary glow-text">Me</span>
            </h2>

            <p className="text-gray-300 mb-6">
              I'm a passionate Full Stack Engineer with expertise in building
              modern web applications. With a strong foundation in both frontend
              and backend technologies, I create seamless, user-friendly
              experiences that solve real-world problems.
            </p>

            <p className="text-gray-300 mb-8">
              My journey in software development began 1 years ago, and since
              then, I've worked on various projects ranging from e-commerce
              platforms to complex enterprise applications. I'm constantly
              learning and adapting to new technologies to stay at the forefront
              of web development.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-primary text-primary hover:bg-primary/10 flex items-center"
              >
                <FileText size={16} />
                <span>Resume</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 flex items-center"
              >
                <Link
                  href="https://github.com/FarhanS7"
                  className="flex items-center gap-2"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 flex items-center"
              >
                <Link
                  href="https://www.linkedin.com/in/farhan-shahriar1/"
                  className="flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 flex items-center"
              >
                <Link
                  href="https://x.com/FarhanShah29986"
                  className="flex items-center gap-2"
                >
                  <Twitter size={16} />
                  <span>Twitter</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
