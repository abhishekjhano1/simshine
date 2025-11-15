"use client";

import { Building, Users, Target, BrainCircuit, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const teamMembers = [
  {
    name: "Deepa Mourya",
    role: "Founder & CEO",
    avatar: "/placeholder-user.jpg",
    bio: "Visionary leader with a passion for disruptive technology and AI-driven solutions."
  },
  {
    name: "Jara Kine",
    role: "Lead Developer",
    avatar: "/placeholder-user.jpg",
    bio: "Expert in crafting robust, scalable back-end systems and futuristic web architectures."
  },
  {
    name: "Cyra Lumen",
    role: "Head of Design",
    avatar: "/placeholder-user.jpg",
    bio: "Creative force behind our stunning user interfaces and immersive digital experiences."
  },
  {
    name: "Kenzo Byte",
    role: "AI Specialist",
    avatar: "/placeholder-user.jpg",
    bio: "Master of machine learning and neural networks, bringing intelligence to our applications."
  }
];

const AboutPage = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section 
        className="w-full pt-40 pb-24 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 relative overflow-hidden flex items-center justify-center text-center"
      >
        <Image 
          src="/placeholder.svg" // Replace with a more suitable futuristic image
          alt="Futuristic background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
        <div className="container px-4 md:px-6 z-20 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400"
            >
              About Simshine
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-[700px] text-gray-300 md:text-xl"
            >
              We are a collective of dreamers, creators, and innovators, engineering the digital frontier with passion and precision.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-cyan-400">Our Genesis</h2>
              <p className="text-gray-400 mb-4">
                Simshine Technologies was born from a shared vision: to create a web that is not only more connected but more intelligent. Founded in Navi Mumbai, we set out to challenge the status quo, blending creative design with the power of artificial intelligence.
              </p>
              <p className="text-gray-400">
                From a small team of dedicated tech enthusiasts, we have grown into a full-fledged digital agency serving a global clientele. Our journey is one of relentless innovation and an unwavering commitment to excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-64 md:h-full flex items-center justify-center rounded-2xl overflow-hidden"
            >
              <Image
                src="/placeholder.svg" // Replace with an image representing growth/innovation
                alt="Company Growth"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 z-0 opacity-50 transition-opacity duration-500 hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent z-10"></div>
              <BrainCircuit size={80} className="text-cyan-400 animate-pulse z-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission, Vision, and Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-lg border border-cyan-500/20 bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden group"
              whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-lg transition-all duration-300 z-0"></div>
              <Target size={48} className="text-cyan-400 mb-4 z-10" />
              <h2 className="text-2xl font-bold mb-2 z-10">Our Mission</h2>
              <p className="text-gray-400 z-10">
                To empower businesses with innovative and intelligent web solutions that drive growth and create lasting value.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-8 rounded-lg border border-cyan-500/20 bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden group"
              whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-lg transition-all duration-300 z-0"></div>
              <Building size={48} className="text-cyan-400 mb-4 z-10" />
              <h2 className="text-2xl font-bold mb-2 z-10">Our Vision</h2>
              <p className="text-gray-400 z-10">
                To be a leading force in the digital transformation of industries, shaping the future of online experiences.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center p-8 rounded-lg border border-cyan-500/20 bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden group"
              whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-lg transition-all duration-300 z-0"></div>
              <Users size={48} className="text-cyan-400 mb-4 z-10" />
              <h2 className="text-2xl font-bold mb-2 z-10">Our Values</h2>
              <p className="text-gray-400 z-10">
                Innovation, Quality, Collaboration, and Customer-Centricity are the pillars that guide our work and culture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-cyan-400 font-bold">
              Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              The Architects of Innovation
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
              Meet the brilliant minds who power Simshine Technologies and drive our mission forward.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900 p-6 text-center transition-all duration-300 hover:border-cyan-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                whileHover={{ y: -5 }}
              >
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-gray-700 group-hover:border-cyan-400 transition-colors">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs">{member.bio}</p>
                {/* Social Media Icons Placeholder */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-2 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="text-gray-400 hover:text-cyan-400"><Users size={18} /></a>
                  <a href="#" className="text-gray-400 hover:text-cyan-400"><Zap size={18} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
