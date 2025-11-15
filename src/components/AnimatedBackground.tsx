"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <>
      {/* First layer - existing gradient */}
      <motion.div
        className="fixed inset-0 -z-10"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          background: "linear-gradient(270deg, #0A0E1A, #1A202C, #0A0E1A)",
          backgroundSize: "200% 200%",
        }}
      />
      {/* Second layer - new, more vibrant gradient */}
      <motion.div
        className="fixed inset-0 -z-10 opacity-30" // Slightly transparent
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{
          duration: 30, // Slower animation
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          background: "linear-gradient(135deg, #4A00E0, #8E2DE2, #4A00E0)", // Purple gradient
          backgroundSize: "300% 300%", // Larger size for more movement
        }}
      />
    </>
  );
}
