"use client";

import { Eye, Github, Code, Palette, Rocket } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const allProjects = [
  {
    title: "AI-Powered E-commerce Platform",
    description: "A futuristic online store with personalized recommendations and an AI chatbot assistant.",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    category: "E-commerce",
    tech: ["Next.js", "AI/ML", "MongoDB"]
  },
  {
    title: "Interactive Data Visualization",
    description: "A web application for visualizing complex datasets with interactive charts and graphs.",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App",
    tech: ["React", "D3.js", "Python"]
  },
  {
    title: "Corporate Website Redesign",
    description: "A complete overhaul of a corporate website with a modern design and improved user experience.",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Design",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Mobile Banking App",
    description: "A secure and user-friendly mobile app for managing finances on the go.",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile App",
    tech: ["React Native", "Node.js", "PostgreSQL"]
  },
  {
    title: "SaaS Platform for Project Management",
    description: "A collaborative platform for teams to manage projects, tasks, and deadlines efficiently.",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App",
    tech: ["React", "Django", "GraphQL"]
  },
  {
    title: "Healthcare AI Assistant",
    description: "An AI-powered chatbot to assist patients with scheduling and medical queries.",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    category: "AI/ML",
    tech: ["Python", "TensorFlow", "LangChain"]
  }
];

const categories = ["All", "Web Design", "Web App", "E-commerce", "Mobile App", "AI/ML"];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full pt-40 pb-24 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-cyan-500/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="container px-4 md:px-6 z-10 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
              Our Digital Creations
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              A curated showcase of our most innovative and successful projects.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="w-full py-8">
        <div className="container px-4 md:px-6 flex justify-center">
          <div className="flex flex-wrap gap-2 bg-gray-900/50 border border-cyan-500/20 p-2 rounded-lg">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "ghost"}
                onClick={() => setActiveFilter(category)}
                className={`font-bold transition-colors duration-300 ${activeFilter === category ? 'bg-cyan-500 text-black hover:bg-cyan-600' : 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div 
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gray-900/50 transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="relative h-60 w-full">
                  <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/50 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors">
                      <Eye size={20} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/50 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-cyan-400 font-bold mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm h-16">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
