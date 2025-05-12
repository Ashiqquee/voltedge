'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const specifications = [
  {
    category: 'Audio',
    items: [
      { name: 'Driver Size', value: '45mm custom dynamic driver' },
      { name: 'Frequency Response', value: '5Hz - 40,000Hz' },
      { name: 'Impedance', value: '32 Ohms' },
      { name: 'Active Noise Cancellation', value: 'Up to 40dB reduction' },
      { name: 'Sound Modes', value: 'ANC, Ambient, Custom EQ' },
    ]
  },
  {
    category: 'Connectivity',
    items: [
      { name: 'Bluetooth Version', value: '5.3' },
      { name: 'Bluetooth Codecs', value: 'SBC, AAC, aptX HD, LDAC' },
      { name: 'Wireless Range', value: 'Up to 30m (100ft)' },
      { name: 'Multi-Device Connection', value: 'Yes (up to 2 devices)' },
      { name: 'Wired Connection', value: '3.5mm audio jack, USB-C' },
    ]
  },
  {
    category: 'Battery',
    items: [
      { name: 'Battery Life', value: 'Up to 50 hours (ANC on)' },
      { name: 'Battery Life ANC Off', value: 'Up to 65 hours' },
      { name: 'Fast Charging', value: '10 min charge = 5 hours playback' },
      { name: 'Full Charge Time', value: '2 hours' },
      { name: 'Battery Type', value: 'Lithium Polymer, 800mAh' },
    ]
  },
  {
    category: 'Design',
    items: [
      { name: 'Weight', value: '278g (9.8oz)' },
      { name: 'Materials', value: 'Premium aluminum, protein leather, memory foam' },
      { name: 'Colors', value: 'Cosmic Black, Lunar Silver, Aurora Blue' },
      { name: 'Water Resistance', value: 'IPX4 rated' },
      { name: 'Controls', value: 'Touch panels, Voice control, App control' },
    ]
  }
];

export default function SpecsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="specs" 
      className="py-20 bg-dark relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#3a3a3a_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Tech <span className="text-gradient">Specifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineered with precision to deliver the ultimate audio experience. 
            Every component has been meticulously designed for performance.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specifications.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-dark-lighter rounded-xl overflow-hidden"
            >
              <div className="bg-dark-light px-6 py-4 border-b border-gray-800">
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="px-6 py-4">
                <table className="w-full">
                  <tbody>
                    {category.items.map((item, index) => (
                      <tr key={item.name} className={index < category.items.length - 1 ? "border-b border-gray-800" : ""}>
                        <td className="py-3 text-gray-400">{item.name}</td>
                        <td className="py-3 text-right font-medium">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="/VoltEdge-Full-Specifications.pdf" 
            className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-primary transition-colors rounded-full text-lg font-medium"
          >
            Download Full Specs
          </a>
        </motion.div>
      </div>
    </section>
  );
} 