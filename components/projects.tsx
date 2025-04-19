"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Kinetic AI(You AI career coach)",
    description:
      "A full stack web application that provides personalized career coaching using AI.",
    image: "/public/Landing.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for social media accounts with data visualization and reporting features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Express", "PostgreSQL", "D3.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description:
      "A property listing and management platform with search, filtering, and booking capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Django", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 grid-background opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-white">My </span>
            <span className="text-primary glow-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Here are some of the projects I've worked on. Each project
            represents different challenges and solutions I've implemented.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <Card className="overflow-hidden bg-card/40 backdrop-blur-sm border border-muted hover:border-primary/50 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full bg-white/10 hover:bg-white/20 text-white"
                      onClick={() => setActiveProject(project)}
                    >
                      <Maximize2 className="h-5 w-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full bg-white/10 hover:bg-white/20 text-white"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full bg-white/10 hover:bg-white/20 text-white"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
