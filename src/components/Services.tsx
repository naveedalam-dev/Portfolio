import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Search, Smartphone, Zap, Shield } from 'lucide-react';
import GlassIcon from './GlassIcon';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Modern web applications using React, Next.js, Node.js, and cloud technologies.",
      features: ["React & Next.js", "API Development", "Database Design", "Cloud Deployment"],
      price: "Starting from $2,000"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centric designs that convert visitors into customers.",
      features: ["Interface Design", "User Research", "Prototyping", "Design Systems"],
      price: "Starting from $1,500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native and Flutter.",
      features: ["React Native", "Flutter", "App Store Deploy", "Push Notifications"],
      price: "Starting from $3,000"
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Custom AI-powered tools and automation solutions.",
      features: ["AI Integration", "Custom Tools", "Automation", "Machine Learning"],
      price: "Starting from $2,500"
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Comprehensive SEO strategies and marketing.",
      features: ["Technical SEO", "Content Strategy", "Performance", "Analytics"],
      price: "Starting from $800/month"
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Advanced security implementations and performance optimization.",
      features: ["Security Audits", "Performance", "Authentication", "Data Protection"],
      price: "Starting from $1,200"
    }
  ];

  const redirectToWhatsApp = () => {
    window.open('https://wa.me/+923362255235', '_blank');
  };

  return (
    <section id="services" className="py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
            Professional Services
          </h2>
          <p className="text-sm lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-3 lg:px-0">
            Comprehensive solutions delivered with premium quality through BugSolution.
          </p>
        </motion.div>

        {/* Services Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-950 rounded-lg lg:rounded-xl p-4 lg:p-6 border border-gray-200 dark:border-gray-800 h-full hover:border-gray-300 dark:hover:border-gray-700 transition-all relative">
                {/* Glass Icon - Top Left Corner */}
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
                  <GlassIcon 
                    icon={<service.icon className="w-5 h-5" />}
                    color="gray"
                    size="sm"
                  />
                </div>

                {/* Content with top margin to account for icon */}
                <div className="mt-12 lg:mt-16">
                  {/* Title */}
                  <h3 className="text-base lg:text-xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-3">
                    {service.title}
                  </h3>

                  {/* Price */}
                  <div className="text-gray-600 dark:text-gray-400 font-medium mb-3 lg:mb-4 text-xs lg:text-base">{service.price}</div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-400 mb-4 lg:mb-6 leading-relaxed text-xs lg:text-base">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 lg:space-y-2 mb-4 lg:mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    onClick={redirectToWhatsApp}
                    className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-4 py-2 lg:py-3 rounded-lg font-medium transition-all text-xs lg:text-base"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;