'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiWifi, FiBattery, FiHeadphones, FiMic, FiZap, FiMusic } from 'react-icons/fi';
import { cn } from '@/utils/cn';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
};

const features = [
  {
    title: 'Adaptive Noise Cancellation',
    description: 'Intelligently adjusts to your environment for perfect audio in any situation.',
    icon: <FiHeadphones className="w-6 h-6" />,
  },
  {
    title: '50-Hour Battery Life',
    description: 'Industry-leading battery performance keeps you immersed in your audio for days.',
    icon: <FiBattery className="w-6 h-6" />,
  },
  {
    title: 'Spatial Audio',
    description: 'Experience true 3D sound with our advanced spatial audio technology.',
    icon: <FiMusic className="w-6 h-6" />,
  },
  {
    title: 'Ultra-Fast Charging',
    description: '10 minutes of charging provides 5 hours of listening time.',
    icon: <FiZap className="w-6 h-6" />,
  },
  {
    title: 'Voice Isolation Tech',
    description: 'Crystal clear calls with AI-powered voice isolation technology.',
    icon: <FiMic className="w-6 h-6" />,
  },
  {
    title: 'Seamless Connectivity',
    description: 'Connect to multiple devices simultaneously with Bluetooth 5.3.',
    icon: <FiWifi className="w-6 h-6" />,
  },
];

function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "bg-dark-lighter border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300",
        "hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden group"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="p-3 bg-dark-light rounded-lg inline-block mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

export default function FeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="features" 
      className="py-20 bg-dark-light relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Cutting-Edge <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engineered with precision for the ultimate audio experience. 
              Discover what makes VoltEdge the future of sound.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-dark-lighter rounded-2xl p-6 md:p-10 overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">
                  Unmatched Audio Intelligence
                </h3>
                <p className="text-gray-300 mb-6">
                  VoltEdge headphones feature our proprietary VoltCore™ processor, 
                  calibrating audio in real-time for perfect sound in any environment.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Adaptive EQ automatically tunes audio to your ear shape</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Machine learning noise cancellation adapts to your environment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Spatial audio with dynamic head tracking for immersive sound</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden">
                {/* Interactive Tech Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Sound wave visualization */}
                  <div className="absolute w-full h-full flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute rounded-full border border-primary/50"
                        style={{
                          width: `${100 + i * 40}px`,
                          height: `${100 + i * 40}px`,
                          opacity: 1 - i * 0.15,
                          animation: `ping ${2 + i * 0.5}s cubic-bezier(0, 0, 0.2, 1) infinite`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Center tech core */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-primary animate-pulse-slow flex items-center justify-center">
                    <div className="text-white font-bold text-center">VOLT<br/>CORE</div>
                  </div>
                  
                  {/* Tech visualization elements */}
                  <div className="absolute w-40 h-40 bg-primary/5 rounded-full animate-spin-slow"></div>
                  <div className="absolute w-60 h-60 border border-secondary/30 rounded-full" style={{ animation: 'spin 12s linear infinite' }}></div>
                  <div className="absolute w-80 h-80 border border-dashed border-accent/20 rounded-full rotate-45" style={{ animation: 'spin 20s linear infinite reverse' }}></div>
                  
                  {/* Tech specs floating */}
                  <div className="absolute -top-10 -right-10 bg-dark-lighter px-3 py-1 rounded-lg text-xs border border-primary/30">40 dB reduction</div>
                  <div className="absolute -bottom-10 -left-10 bg-dark-lighter px-3 py-1 rounded-lg text-xs border border-primary/30">20Hz-40kHz</div>
                  <div className="absolute top-1/4 -left-16 bg-dark-lighter px-3 py-1 rounded-lg text-xs border border-secondary/30">Adaptive AI</div>
                  <div className="absolute bottom-1/4 -right-16 bg-dark-lighter px-3 py-1 rounded-lg text-xs border border-secondary/30">VoltCore™</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 