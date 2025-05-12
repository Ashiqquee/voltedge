'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

type CountdownProps = {
  targetDate: Date;
};

function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
      ].map(item => (
        <div key={item.label} className="bg-dark-lighter rounded-lg py-3 px-2 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-white">{item.value}</div>
          <div className="text-xs sm:text-sm text-gray-400">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function PreOrderSection() {
  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <section id="pre-order" className="py-24 bg-dark-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Be the <span className="text-gradient">First</span> to Experience VoltEdge
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Limited pre-order spots available with exclusive early-adopter benefits.
            Reserve yours before the official launch.
          </p>
        </motion.div>
        
        <div className="mb-12">
          <h3 className="text-center text-lg font-medium mb-6">Official Launch In:</h3>
          <Countdown targetDate={launchDate} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              tier: 'Standard',
              price: '$299',
              originalPrice: '$349',
              features: [
                'VoltEdge Headphones',
                'Carrying Case',
                'USB-C Charging Cable',
                '2-Year Warranty',
                'Free Standard Shipping'
              ],
              cta: 'Pre-Order Now',
              popular: false
            },
            {
              tier: 'Premium',
              price: '$349',
              originalPrice: '$399',
              features: [
                'VoltEdge Headphones',
                'Premium Carrying Case',
                'USB-C Charging Cable',
                'Audio Jack Cable',
                '3-Year Warranty',
                'Priority Shipping',
                'Exclusive Color Options'
              ],
              cta: 'Pre-Order Now',
              popular: true
            },
            {
              tier: 'Ultimate',
              price: '$429',
              originalPrice: '$499',
              features: [
                'VoltEdge Headphones',
                'Premium Carrying Case',
                'USB-C Charging Cable',
                'Audio Jack Cable',
                'Wireless Charging Dock',
                'Lifetime Warranty',
                'Priority Shipping',
                'Exclusive Color Options',
                'VIP Support Access'
              ],
              cta: 'Pre-Order Now',
              popular: false
            }
          ].map((tier, index) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-dark-lighter rounded-xl overflow-hidden border ${
                tier.popular ? 'border-primary' : 'border-gray-800'
              } relative`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 w-full bg-primary text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="px-6 py-8">
                <h3 className="text-xl font-bold mb-2">{tier.tier}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.originalPrice && (
                    <span className="text-gray-400 line-through ml-2">{tier.originalPrice}</span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <FiCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-full font-medium flex items-center justify-center ${
                    tier.popular 
                      ? 'bg-primary hover:bg-primary-hover text-white' 
                      : 'bg-dark-light hover:bg-dark border border-gray-700 hover:border-primary'
                  } transition-colors`}
                >
                  {tier.cta}
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            * Pre-order today with $0 down. You'll only be charged when your VoltEdge ships.
            <br />
            Estimated shipping date: {launchDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
          </p>
        </div>
      </div>
    </section>
  );
} 