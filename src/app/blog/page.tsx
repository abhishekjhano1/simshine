"use client";

import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    slug: "the-rise-of-generative-ai",
    title: "The Rise of Generative AI and Its Impact on Web Development",
    author: "Alex Nova",
    date: "November 15, 2025",
    excerpt: "Generative AI is not just a buzzword; it's a revolution. We explore how technologies like GPT-4 and DALL-E are transforming the way we design, code, and interact with websites.",
    featured: true,
    image: "/placeholder.svg"
  },
  {
    slug: "quantum-computing-the-next-frontier",
    title: "Quantum Computing: The Next Frontier in Digital Innovation",
    author: "Jara Kine",
    date: "November 10, 2025",
    excerpt: "A deep dive into the principles of quantum computing and its potential to solve problems currently intractable for classical computers, revolutionizing industries from medicine to finance.",
    featured: false,
    image: "/placeholder.svg"
  },
  {
    slug: "designing-for-neurodiversity",
    title: "Designing for Neurodiversity: Creating Inclusive Digital Experiences",
    author: "Cyra Lumen",
    date: "November 5, 2025",
    excerpt: "An essential guide for designers and developers on how to create web applications that are accessible and welcoming to everyone, including users with diverse cognitive abilities.",
    featured: false,
    image: "/placeholder.svg"
  },
  {
    slug: "the-ethics-of-ai",
    title: "Navigating the Ethical Landscape of Artificial Intelligence",
    author: "Kenzo Byte",
    date: "October 28, 2025",
    excerpt: "As AI becomes more powerful, so do the ethical considerations. We discuss the importance of building fair, transparent, and accountable AI systems.",
    featured: false,
    image: "/placeholder.svg"
  },
];

const featuredPost = blogPosts.find(p => p.featured);
const otherPosts = blogPosts.filter(p => !p.featured);

const BlogPage = () => {
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
              Simshine Insights
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Exploring the future of technology, design, and digital innovation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Featured Post Section */}
      {featuredPost && (
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-cyan-400">Featured Post</h2>
            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="grid lg:grid-cols-2 gap-8 items-center p-6 rounded-lg border border-cyan-500/20 bg-gray-900/50 transition-all duration-300 cursor-pointer"
              >
                <Image src={featuredPost.image} alt={featuredPost.title} width={600} height={400} className="object-cover rounded-lg" />
                <div>
                  <h3 className="text-3xl font-bold">{featuredPost.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-400 mt-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-cyan-400 mt-4 font-bold">
                    Read More <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Latest Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 h-full flex flex-col rounded-lg border border-gray-800 bg-gray-900 transition-all duration-300 hover:border-cyan-500/50 cursor-pointer"
                >
                  <h3 className="text-xl font-bold text-cyan-400">{post.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-500 text-sm mt-2">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center text-cyan-500 mt-4 text-sm font-bold">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
