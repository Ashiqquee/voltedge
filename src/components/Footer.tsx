import Link from 'next/link';
import Image from 'next/image';
import { FiTwitter, FiInstagram, FiYoutube, FiFacebook, FiLinkedin, FiHeadphones } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-full">
                <FiHeadphones className="text-white text-sm" />
              </div>
              <span className="font-display text-xl text-gradient">VoltEdge</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Redefining audio experiences with cutting-edge technology 
              and unmatched sound quality.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-primary transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-primary transition-colors">
                <FiYoutube size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-primary transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-primary transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Features', href: '#features' },
                { name: 'Specs', href: '#specs' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Pre-Order', href: '#pre-order' },
              ].map(link => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { name: 'Contact Us', href: '/contact' },
                { name: 'FAQs', href: '/faqs' },
                { name: 'Shipping Info', href: '/shipping' },
                { name: 'Return Policy', href: '/returns' },
                { name: 'Warranty', href: '/warranty' },
                { name: 'Privacy Policy', href: '/privacy' },
              ].map(link => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for product updates, exclusive offers, and more.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-dark-lighter border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover transition-colors py-2 px-4 rounded-lg font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Ashiqquee . All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/legal" className="text-gray-500 hover:text-gray-300 text-sm">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 