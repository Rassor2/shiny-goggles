import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, categories } from '../data/mock';
import { Leaf, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-green-600">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">EnergyWise<span className="text-green-400">Home</span></span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {siteConfig.description}
            </p>
            <a 
              href={`mailto:${siteConfig.email}`} 
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {siteConfig.email}
            </a>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Topics</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/category/${cat.slug}`}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            
            {/* Resources */}
            <h4 className="text-white font-semibold mt-6 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.energy.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1"
                >
                  Department of Energy
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.energystar.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1"
                >
                  ENERGY STAR
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Informational content only. Consult professionals for specific advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
