"use client";

import React, { useEffect, useRef } from 'react';

interface ParallaxEffectProps {
  children: React.ReactNode;
  speed?: number; // Default speed for children if not specified on individual elements
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({ children, speed = 0.1 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elements = ref.current.querySelectorAll('[data-speed]');
        elements.forEach(element => {
          const elementSpeed = parseFloat(element.getAttribute('data-speed') || String(speed));
          const yPos = window.scrollY * elementSpeed;
          (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return <div ref={ref} className="relative w-full h-full overflow-hidden">{children}</div>;
};

export default ParallaxEffect;
