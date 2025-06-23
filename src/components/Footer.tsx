import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Phone, MapPin, Instagram, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Articles', href: '#articles' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/naveedalam.dev', name: 'Instagram' },
    { icon: Linkedin, url: 'https://linkedin.com/in/naveedalam-dev', name: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/naveedalam-dev', name: 'GitHub' },
    { icon: Twitter, url: 'https://twitter.com/naveedalam_dev', name: 'Twitter' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Naveed Alam</h3>
                <p className="text-gray-400">Developer & UI/UX Designer</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm lg:text-base"
            >
              Creator of innovative solutions. Trusted by 250+ global clients 
              with premium web development and design solutions since 2018.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="flex items-center space-x-3 text-gray-400 text-sm lg:text-base">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@naveedalam.dev" className="hover:text-white transition-colors">
                  contact@naveedalam.dev
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm lg:text-base">
                <Phone className="w-4 h-4" />
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +92 300 1234567
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm lg:text-base">
                <MapPin className="w-4 h-4" />
                <span>Pakistan</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-4 mt-6"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'AI Integration', 'SEO Services'].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm lg:text-base">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start space-y-2 text-gray-400 text-sm text-center lg:text-left"
          >
            <div className="flex items-center space-x-2">
              <span>© 2025 Naveed Alam. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Pakistan</span>
            </div>
            
            {/* Developer Credits */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-1 lg:space-y-0 lg:space-x-4 text-xs">
              <span className="text-gray-500">Developed By:</span>
              <div className="flex flex-col lg:flex-row items-center space-y-1 lg:space-y-0 lg:space-x-4">
                <a 
                  href="https://umarhashmi.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Umar Hashmi</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-gray-500 hidden lg:inline">&</span>
                <a 
                  href="https://naveedalam.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Naveed Alam</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white p-2 rounded-lg transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <div className="text-sm text-gray-500">
              <span>Powered by </span>
              <span className="text-white font-medium">Naveed Alam</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;