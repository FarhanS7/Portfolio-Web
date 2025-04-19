"use client";

import { motion, useInView } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Full Stack Engineer",
    period: "Jan 2022 - Present",
    description:
      "Led the development of a scalable e-commerce platform serving over 100,000 monthly users. Implemented microservices architecture and optimized database queries, resulting in a 40% improvement in page load times.",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    period: "Mar 2020 - Dec 2021",
    description:
      "Developed and maintained multiple client web applications. Created RESTful APIs and integrated third-party services. Collaborated with design and product teams to deliver high-quality software solutions.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Redis", "GCP"],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    company: "WebCraft Studios",
    position: "Frontend Developer",
    period: "Jun 2018 - Feb 2020",
    description:
      "Built responsive user interfaces for various web applications. Implemented state management solutions and optimized frontend performance. Participated in code reviews and mentored junior developers.",
    technologies: ["React", "Redux", "SASS", "Webpack", "Jest"],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    company: "StartUp Ventures",
    position: "Junior Web Developer",
    period: "Jan 2017 - May 2018",
    description:
      "Assisted in the development of web applications and websites. Implemented UI components based on design specifications. Collaborated with senior developers to troubleshoot and fix bugs.",
    technologies: ["JavaScript", "HTML/CSS", "jQuery", "Bootstrap", "PHP"],
    logo: "/placeholder.svg?height=80&width=80",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

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
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 grid-background opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-white">Work </span>
            <span className="text-primary glow-text">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            My professional journey as a Full Stack Engineer, showcasing my
            roles and accomplishments.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-secondary/50 to-primary/20 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-auto md:mr-1/2"
                  : "md:pl-12 md:ml-1/2"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0
                    ? "left-0 md:left-auto md:right-0 md:-mr-3.5"
                    : "left-0 md:-ml-3.5"
                } w-7 h-7 rounded-full bg-black border-2 border-primary z-10`}
              >
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse-slow"></div>
              </div>

              {/* Content card */}
              <div className="ml-10 md:ml-0 bg-card/40 backdrop-blur-sm border border-muted rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-muted/30 flex items-center justify-center">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={exp.company}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary">
                      {exp.company}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-400 mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
