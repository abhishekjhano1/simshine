"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Code, Rocket, Palette, Megaphone, Bot, Server, PenTool, Smartphone, Zap, BrainCircuit, ShieldCheck } from "lucide-react";
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import ParallaxEffect from "@/components/ParallaxEffect";

const services = [
  {
    icon: <Palette size={48} className="text-primary" />,
    title: "Website Designing",
    description: "Crafting visually stunning and intuitive web interfaces that captivate your audience from the first click.",
  },
  {
    icon: <Code size={48} className="text-primary" />,
    title: "Website Development",
    description: "Building robust, scalable, and high-performance websites tailored to your specific business needs.",
  },
  {
    icon: <Rocket size={48} className="text-primary" />,
    title: "E-commerce Solutions",
    description: "Creating seamless online shopping experiences that drive sales and foster customer loyalty.",
  },
  {
    icon: <Megaphone size={48} className="text-primary" />,
    title: "Graphic Designing",
    description: "Creative and enthusiastic artists ready to craft your brand's visual identity.",
  },
  {
    icon: <Bot size={48} className="text-primary" />,
    title: "Web Promotion",
    description: "Effective online promotion and publicity strategies to boost your digital presence.",
  },
  {
    icon: <PenTool size={48} className="text-primary" />,
    title: "Content Writing",
    description: "Compelling content that crowns your website and engages your audience.",
  },
  {
    icon: <Server size={48} className="text-primary" />,
    title: "Domain & Web Hosting",
    description: "Reliable and secure hosting solutions to keep your website online and performing.",
  },
  {
    icon: <Smartphone size={48} className="text-primary" />,
    title: "Mobile Apps Development",
    description: "Bringing your business to mobile with cutting-edge smartphone applications.",
  },
];

const testimonials = [
  {
    name: "Yadhu Krishna",
    title: "Dy.MD, Lakshmipathi Group",
    avatar: "YK",
    testimonial: `It&apos;s been great working with you and your expert services has given a new face to the marketing of my company. I appreciate your flexibility and commitment towards customer satisfaction.`,
  },
  {
    name: "Sanjay B. Adulkar",
    title: "MD, Awaken Security Service",
    avatar: "SA",
    testimonial: "",
  },
  {
    name: "Mr.K.C. NAIR",
    title: "Proprietor, Samfire Services",
    avatar: "KN",
    testimonial: "&quot;Our website www.samfireservices.in&quot; designed by you is upto our satisfaction. It is giving us &quot;Enquiries, Informations etc.&quot; regularly. Thank you for the same.",
  },
];

const whyChooseUs = [
  {
    icon: <Zap size={32} className="text-primary" />,
    title: "Futuristic Technology",
    description: "We leverage the latest advancements in AI and web tech to build solutions that are ahead of the curve."
  },
  {
    icon: <BrainCircuit size={32} className="text-primary" />,
    title: "Innovative Solutions",
    description: "Our creative team thinks outside the box to deliver unique and impactful digital experiences."
  },
  {
    icon: <ShieldCheck size={32} className="text-primary" />,
    title: "Reliability & Trust",
    description: "We are committed to delivering high-quality products and building long-lasting partnerships with our clients."
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 relative overflow-hidden">
          <ParallaxEffect>
            <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse" data-speed="0.05"></div> {/* Dynamic grid pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" data-speed="0.02"></div>
          </ParallaxEffect>
          <div className="container px-4 md:px-6 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-primary"
              >
                Engineering the Future of the Web
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                Simshine Technologies: Your partner in crafting innovative, intelligent, and impactful digital experiences.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="space-x-4 pt-4"
              >
                <Link href="/services">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-transform duration-300 hover:scale-105 shadow-lg shadow-primary/50 animate-button-glow">Our Services</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold transition-transform duration-300 hover:scale-105 shadow-lg shadow-primary/30 animate-button-glow">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary font-bold">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Comprehensive Web & App Solutions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                From concept to launch, we provide end-to-end solutions to elevate your digital presence.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg border border-primary/30 bg-card/50 p-6 transition-all duration-300 group-hover-futuristic-card"
                >
                  <div className="flex flex-col items-center text-center">
                    {service.icon}
                    <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary font-bold">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Your Catalyst for Digital Excellence
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                We blend technology, creativity, and strategy to deliver unparalleled results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card/50 animate-border-pulse"
                >
                  {feature.icon}
                  <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What Our Clients Say
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Discover how we've helped businesses transform their digital landscape.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6 pt-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card border-primary/30 h-full flex flex-col">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground font-bold">{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle>{testimonial.name}</CardTitle>
                          <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}