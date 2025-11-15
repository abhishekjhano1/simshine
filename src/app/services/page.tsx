"use client";

import { Palette, Code, Rocket, Megaphone, Bot, PenTool, Server, Smartphone, Search, Pencil, TestTube, RocketIcon } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Palette size={40} className="text-cyan-400" />,
    title: "Website Designing",
    description: "We craft visually stunning, user-centric web interfaces that captivate your audience and provide an intuitive, seamless experience across all devices.",
  },
  {
    icon: <Code size={40} className="text-cyan-400" />,
    title: "Website Development",
    description: "Our developers build robust, scalable, and high-performance websites using cutting-edge technologies to meet your specific business needs.",
  },
  {
    icon: <Rocket size={40} className="text-cyan-400" />,
    title: "E-commerce Solutions",
    description: "We create powerful e-commerce platforms that drive sales, foster customer loyalty, and provide a flawless online shopping journey.",
  },
  {
    icon: <Megaphone size={40} className="text-cyan-400" />,
    title: "Graphic Designing",
    description: "Our creative team delivers a wide range of graphic design services, from branding and identity to marketing materials that make an impact.",
  },
  {
    icon: <Bot size={40} className="text-cyan-400" />,
    title: "Web Promotion",
    description: "Leverage the power of the internet with our effective promotion and publicity strategies, designed to boost your digital footprint and reach.",
  },
  {
    icon: <PenTool size={40} className="text-cyan-400" />,
    title: "Content Writing",
    description: "Compelling, SEO-friendly content that not only tells your story but also engages your audience and drives conversions.",
  },
  {
    icon: <Server size={40} className="text-cyan-400" />,
    title: "Domain & Web Hosting",
    description: "Secure, reliable, and high-speed domain and hosting solutions that ensure your website is always available and performing at its best.",
  },
  {
    icon: <Smartphone size={40} className="text-cyan-400" />,
    title: "Mobile Apps Development",
    description: "We extend your business to mobile platforms with innovative and user-friendly smartphone applications for both iOS and Android.",
  },
];

const processSteps = [
  {
    icon: <Search size={32} />,
    title: "1. Discovery & Strategy",
    description: "We begin by understanding your vision, goals, and target audience to define a clear roadmap for success."
  },
  {
    icon: <Pencil size={32} />,
    title: "2. Design & Prototyping",
    description: "Our design team creates wireframes and mockups, focusing on user experience and visual appeal."
  },
  {
    icon: <Code size={32} />,
    title: "3. Development",
    description: "Our developers bring the designs to life with clean, efficient code and cutting-edge technology."
  },
  {
    icon: <TestTube size={32} />,
    title: "4. Testing & Quality Assurance",
    description: "We conduct rigorous testing to ensure your application is bug-free, secure, and performs flawlessly."
  },
  {
    icon: <RocketIcon size={32} />,
    title: "5. Deployment & Launch",
    description: "We handle the deployment process, ensuring a smooth launch of your new website or application."
  }
];

const ServicesPage = () => {
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
              Our Spectrum of Services
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              A complete suite of digital solutions designed to propel your business into the future.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gray-900/50 p-6 transition-all duration-300 hover:border-cyan-400 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex flex-col">
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm flex-grow">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-cyan-400 font-bold">
              Our Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              From Vision to Reality
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
              Our streamlined, collaborative process ensures your project is delivered on time and exceeds expectations.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyan-500/30 hidden md:block"></div>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex items-center w-full mb-8 md:mb-0"
              >
                <div className={`flex w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 justify-start md:justify-end' : 'md:pl-8 justify-start'}`}>
                  <div className={`w-full md:max-w-sm p-6 rounded-lg border border-gray-800 bg-gray-900 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold text-cyan-400">{step.title}</h3>
                    <p className="text-gray-400 mt-2">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-900 border-2 border-cyan-500 rounded-full items-center justify-center text-cyan-400">
                  {step.icon}
                </div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
