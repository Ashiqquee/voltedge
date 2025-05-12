'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroSection() {
  const headphonesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headphonesRef.current) return;
      
      const { left, top, width, height } = headphonesRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const rotateY = ((e.clientX - centerX) / width) * 15; // -15 to 15 degrees
      const rotateX = ((centerY - e.clientY) / height) * 15; // -15 to 15 degrees
      
      headphonesRef.current.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="text-gradient">VoltEdge</span> <br />
                Next-Gen <br />
                Noise-Canceling <br />
                Headphones
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-lg">
                Experience unparalleled sound clarity with adaptive noise cancellation 
                that intelligently responds to your environment.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#pre-order" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-hover transition-colors rounded-full text-lg font-medium glow-border"
                >
                  Pre-Order Now
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="#learn-more" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-gray-400 transition-colors rounded-full text-lg font-medium"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gradient">50h</h3>
                  <p className="text-sm text-gray-400">Battery Life</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gradient">40dB</h3>
                  <p className="text-sm text-gray-400">Noise Reduction</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gradient">AI</h3>
                  <p className="text-sm text-gray-400">Powered EQ</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative"
            >
              {/* Stylized Headphones Visualization */}
              <div
                ref={headphonesRef}
                className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center rotate-3d"
              >
                {/* Main circle - headphone base */}
                <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border-4 border-primary/30 flex items-center justify-center">
                  <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full border-2 border-secondary/20"></div>
                  <div className="absolute w-[160px] h-[160px] md:w-[240px] md:h-[240px] rounded-full border border-accent/10 flex items-center justify-center">
                    <div className="absolute w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-full bg-dark-lighter/50 animate-pulse-slow flex items-center justify-center">
                      <span className="text-gradient text-xl md:text-3xl font-display font-bold">VOLT</span>
                    </div>
                  </div>
                </div>
                
                {/* Left ear cup */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-[60px] h-[100px] md:w-[80px] md:h-[140px] rounded-3xl bg-gradient-to-br from-primary/80 to-dark-lighter border border-primary/50 glow-border"></div>
                
                {/* Right ear cup */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-[60px] h-[100px] md:w-[80px] md:h-[140px] rounded-3xl bg-gradient-to-br from-primary/80 to-dark-lighter border border-primary/50 glow-border"></div>
                
                {/* Headband */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[240px] h-[20px] md:w-[340px] md:h-[30px] bg-gradient-to-r from-primary/50 via-secondary/30 to-primary/50 rounded-full glow-border"></div>
                
                {/* Central circular pulse */}
                <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-primary/5 animate-pulse-slow"></div>
                <div className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full bg-secondary/5 animate-pulse-slow"></div>
                
                {/* Animated rings */}
                <div className="absolute w-full h-full animate-glow">
                  <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping"></div>
                </div>
              </div>
              
              {/* Floating tech specs */}
              <motion.div 
                className="absolute -left-20 top-1/4 bg-dark-lighter/90 backdrop-blur-lg px-3 py-2 rounded-lg border border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
              </motion.div>
              
              <motion.div 
                className="absolute -right-20 bottom-1/4 bg-dark-lighter/90 backdrop-blur-lg px-3 py-2 rounded-lg border border-gray-700"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#1E1E1E"
            fillOpacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,229.3C672,235,768,213,864,181.3C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
} 