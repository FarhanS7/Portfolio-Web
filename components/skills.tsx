"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Colorful logos URLs (mostly from official sources or trusted CDNs)
const logoMap: Record<string, string> = {
  React:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  "Next.js":
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg",
  TypeScript:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  "Tailwind CSS":
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
  Redux:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  "Node.js":
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  Express:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  NestJS:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg",
  Python:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  Django:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg",
  MongoDB:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  PostgreSQL:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  MySQL:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  Redis:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
  Prisma:
    "https://raw.githubusercontent.com/prisma/prisma/main/icons/favicon-32x32.png",
  Docker:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  Kubernetes:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
  "CI/CD": "https://cdn.worldvectorlogo.com/logos/github-actions.svg",
  AWS: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
  Vercel:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
  Git: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  "REST API": "https://cdn.worldvectorlogo.com/logos/openapi-initiative.svg",
  GraphQL:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
  WebSockets:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
  Testing:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
};

function TechLogo({
  name,
  className = "w-5 h-5",
}: {
  name: string;
  className?: string;
}) {
  const src = logoMap[name];
  if (!src) return null;
  return (
    <img
      src={src}
      alt={`${name} logo`}
      className={className}
      loading="lazy"
      style={{ objectFit: "contain" }}
      draggable={false}
    />
  );
}

const skills = [
  {
    category: "Frontend",
    icon: <TechLogo name="React" className="w-6 h-6" />,
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Redux" },
    ],
  },
  {
    category: "Backend",
    icon: <TechLogo name="Node.js" className="w-6 h-6" />,
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "NestJS" },
      { name: "Python" },
      { name: "Django" },
    ],
  },
  {
    category: "Database",
    icon: <TechLogo name="MongoDB" className="w-6 h-6" />,
    items: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Prisma" },
    ],
  },
  {
    category: "DevOps",
    icon: <TechLogo name="Docker" className="w-6 h-6" />,
    items: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "CI/CD" },
      { name: "AWS" },
      { name: "Vercel" },
    ],
  },
  {
    category: "Other",
    icon: <TechLogo name="Git" className="w-6 h-6" />,
    items: [
      { name: "Git" },
      { name: "REST API" },
      { name: "GraphQL" },
      { name: "WebSockets" },
      { name: "Testing" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
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
            <span className="text-primary glow-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            I've worked with a variety of technologies across the full stack
            development spectrum. Here are some of the key skills and
            technologies I specialize in.
          </motion.p>
        </div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="bg-card/40 backdrop-blur-sm border border-muted rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-md bg-primary/10 text-primary mr-3 flex items-center justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-4">
                {skill.items.map((item) => (
                  <li key={item.name} className="flex items-center group">
                    <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="group-hover:opacity-100 opacity-90 transition-opacity duration-300">
                        <TechLogo name={item.name} className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="text-gray-300 group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
