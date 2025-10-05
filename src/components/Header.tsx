import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Wrench, FileText, MessageSquare, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import SimpleIcon from './SimpleIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#certifications', label: 'Certifications', icon: Award },
    { href: '#portfolio', label: 'Portfolio', icon: Briefcase },
    { href: '#services', label: 'Services', icon: Wrench },
    { href: '#articles', label: 'Articles', icon: FileText },
    { href: '#contact', label: 'Contact', icon: MessageSquare }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const redirectToWhatsApp = () => {
    window.open('https://wa.me/+923362255235', '_blank');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Mobile Optimized */}
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollToSection('#home')}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-white dark:text-gray-900 font-bold text-lg lg:text-xl">N</span>
            </div>
            {/* Logo Text - Always visible on mobile */}
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white truncate">
                Naveed Alam
              </h1>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 truncate">
                Developer | UI/UX
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                <SimpleIcon icon={<item.icon className="w-4 h-4" />} size="sm" />
                <span>{item.label}</span>
              </button>
            ))}
            <ThemeToggle />
            <button
              onClick={redirectToWhatsApp}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-2 rounded-lg transition-all font-medium shadow-sm"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Controls - Theme Toggle + Menu */}
          <div className="lg:hidden flex items-center space-x-2 flex-shrink-0">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 rounded-b-xl"
            >
              <div className="py-6 px-4 space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-4 w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium rounded-lg"
                  >
                    <SimpleIcon icon={<item.icon className="w-5 h-5" />} size="sm" />
                    <span className="text-base">{item.label}</span>
                  </button>
                ))}
                <button
                  onClick={redirectToWhatsApp}
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-4 py-3 rounded-lg transition-colors font-medium mt-6"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;