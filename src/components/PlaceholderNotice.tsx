'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PlaceholderNotice() {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-dark-lighter/90 backdrop-blur-lg px-4 py-3 rounded-lg border border-primary max-w-sm w-full"
    >
      <div className="flex items-start">
        <div className="flex-1">
          <h4 className="font-medium text-sm mb-1">Images are placeholders</h4>
          <p className="text-xs text-gray-300">
            This is a demo site - actual images would be replaced with product photography in a real implementation.
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-3 text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
    </motion.div>
  );
} 