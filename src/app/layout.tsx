import { Orbitron, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import AiChatbot from "@/components/AiChatbot";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Simshine Technologies",
  description: "Welcome to the future of AI-powered web solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${inter.variable} font-inter flex flex-col min-h-screen`}>
        <AnimatedBackground />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <AiChatbot />
      </body>
    </html>
  );
}
