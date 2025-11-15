"use client";

import { Cpu, Wind, Bot, Database, Code, Brush, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Frontend",
    icon: <Brush size={32} className="text-cyan-400" />,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend",
    icon: <Code size={32} className="text-cyan-400" />,
    technologies: ["Node.js", "Express", "Python", "Django", "FastAPI", "GraphQL"]
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit size={32} className="text-cyan-400" />,
    technologies: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI API", "LangChain", "Natural Language Processing"]
  },
  {
    title: "Databases & DevOps",
    icon: <Database size={32} className="text-cyan-400" />,
    technologies: ["MongoDB", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Vercel"]
  }
];

const TechnologiesPage = () => {
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
              Our Technological Arsenal
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              We wield a powerful stack of cutting-edge technologies to forge the future of digital experiences.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {techCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                className="p-8 rounded-lg border border-cyan-500/20 bg-gray-900/50"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-bold ml-4">{category.title}</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      className="px-4 py-2 bg-gray-800 text-cyan-300 rounded-full text-sm font-medium border border-gray-700"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Technology Philosophy
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
              Choosing the right tool for the job is paramount. Our approach is guided by three core principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Cpu size={40} className="text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold">Performance</h3>
              <p className="text-gray-400 mt-2 text-sm">We select technologies that ensure lightning-fast, responsive, and scalable applications.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Wind size={40} className="text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-400 mt-2 text-sm">We are constantly exploring and adopting emerging tech to deliver future-proof solutions.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Bot size={40} className="text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold">Intelligence</h3>
              <p className="text-gray-400 mt-2 text-sm">We integrate AI and machine learning to create smart, adaptive, and personalized user experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage;
