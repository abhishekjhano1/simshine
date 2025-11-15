"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

type Inputs = {
  name: string,
  email: string,
  message: string,
};

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

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
              Connect With Us
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Have a project in mind or just want to say hello? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form and Details Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 p-8 rounded-lg border border-cyan-500/20 bg-gray-900/50"
            >
              <h2 className="text-3xl font-bold text-cyan-400">Send a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input placeholder="Your Name" {...register("name", { required: true })} className="bg-gray-800 border-gray-700 focus:ring-cyan-500" />
                  {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="bg-gray-800 border-gray-700 focus:ring-cyan-500" />
                  {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}
                </div>
                <div>
                  <Textarea placeholder="Your Message" {...register("message", { required: true })} className="bg-gray-800 border-gray-700 focus:ring-cyan-500 h-32" />
                  {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-black w-full font-bold transition-transform duration-300 hover:scale-105">
                  Send Message <Send size={18} className="ml-2" />
                </Button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-lg border border-cyan-500/20 bg-gray-900/50">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail size={24} className="text-cyan-400 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-gray-400 hover:text-cyan-300 transition-colors"><a href="mailto:contact@simshine.com">contact@simshine.com</a></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone size={24} className="text-cyan-400 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p className="text-gray-400">+1 (234) 567-890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin size={24} className="text-cyan-400 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Address</h3>
                      <p className="text-gray-400">123 Future Tech Ave, Innovation City, Navi Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-64 rounded-lg overflow-hidden border border-cyan-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.983334173843!2d73.0554220148999!3d19.02043498712023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24c07c55555%3A0x3da36e762178ac9a!2sNavi%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale invert hue-rotate-180"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
