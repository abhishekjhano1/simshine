"use client";

import { Briefcase, MapPin, Clock, Zap, BrainCircuit, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const jobOpenings = [
  {
    title: "Senior Frontend Engineer",
    location: "Remote",
    type: "Full-time",
    description: "We are seeking an experienced Frontend Engineer to lead the development of our next-gen web applications. You will work with React, Next.js, and other modern technologies to build high-performance, scalable user interfaces.",
  },
  {
    title: "AI/ML Research Scientist",
    location: "Navi Mumbai / Remote",
    type: "Full-time",
    description: "Join our research team to push the boundaries of artificial intelligence. You will be responsible for developing novel algorithms and models for our intelligent systems.",
  },
  {
    title: "Lead UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    description: "We are looking for a visionary UI/UX designer to lead our design team. You will be responsible for creating breathtaking and intuitive user experiences for our clients and our own products.",
  },
  {
    title: "DevOps & Cloud Architect",
    location: "Remote",
    type: "Contract",
    description: "Seeking a skilled DevOps architect to design, implement, and manage our cloud infrastructure. Expertise in AWS/GCP, Docker, and Kubernetes is a must.",
  },
];

const perks = [
    {
        icon: <Zap size={32} className="text-cyan-400" />,
        title: "Work on Cutting-Edge Tech",
        description: "Get your hands on the latest and greatest in AI, web, and mobile development."
    },
    {
        icon: <BrainCircuit size={32} className="text-cyan-400" />,
        title: "Continuous Learning",
        description: "We foster a culture of growth with access to courses, workshops, and conferences."
    },
    {
        icon: <Users size={32} className="text-cyan-400" />,
        title: "Collaborative Culture",
        description: "Join a team of passionate, like-minded individuals in a supportive environment."
    },
    {
        icon: <Star size={32} className="text-cyan-400" />,
        title: "Competitive Benefits",
        description: "We offer attractive compensation packages, health benefits, and flexible work hours."
    }
]

const CareersPage = () => {
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
              Shape the Future With Us
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              We&apos;re on a mission to build the future of the web, and we need brilliant minds like yours to join us.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Why Work With Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-cyan-400 font-bold">
              Our Culture
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Innovate, Grow, and Thrive
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
              At Simshine, we&apos;re more than just a company; we&apos;re a launchpad for your ambitions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-800"
              >
                {perk.icon}
                <h3 className="text-xl font-bold mt-4">{perk.title}</h3>
                <p className="text-gray-400 mt-2 text-sm">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Current Openings
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
              Find your next career-defining opportunity.
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-lg border border-cyan-500/20 bg-gray-900 transition-all duration-300 hover:border-cyan-400 hover:scale-105"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400">{job.title}</h3>
                    <div className="flex items-center flex-wrap space-x-4 text-gray-400 mt-2">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mt-4 text-sm">{job.description}</p>
                  </div>
                  <Button className="mt-4 sm:mt-0 bg-cyan-500 hover:bg-cyan-600 text-black font-bold transition-transform duration-300 hover:scale-105">Apply Now</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
