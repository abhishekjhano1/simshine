import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Zap } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/30 text-muted-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <div className="mb-4">
              <Link href="/" className="text-2xl font-bold text-foreground flex items-center">
                <Zap className="text-primary mr-2" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
                  Simshine
                </span>
              </Link>
            </div>
            <p className="text-muted-foreground mb-4">
              Pioneering the future of digital innovation with cutting-edge technology and creative solutions.
            </p>
            <div className="flex space-x-4 mt-auto">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaFacebook size={22} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaTwitter size={22} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaLinkedin size={22} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaInstagram size={22} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaYoutube size={22} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: contact@simshine.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Future Tech Ave, Innovation City</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Join Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">Get the latest on AI, tech trends, and our innovations.</p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-card text-foreground px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Simshine Technologies. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
