import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, Award, ExternalLink, Calendar, Shield } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  authority: string;
  year: string;
  verified: boolean;
  image: string;
  description: string;
  link?: string;
  category: string;
}

const Certifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const certifications: Certification[] = [
    {
      id: 1,
      name: "IBM Full Stack Software Developer",
      authority: "IBM via Coursera",
      year: "2024",
      verified: true,
      image: "https://i.postimg.cc/SRgdDPkB/IBM-Coursera-MGVC9-DDF676-B.png",
      description: "Comprehensive full-stack development program covering modern web technologies, cloud computing, and enterprise-level application development with hands-on projects.",
      link: "https://coursera.org/verify/professional-cert/MGVC9DDF676B",
      category: "Development"
    },
    {
      id: 2,
      name: "Software Engineering",
      authority: "Professional Certification",
      year: "2024",
      verified: true,
      image: "https://i.postimg.cc/FFknZrLp/Software-Engineering.png",
      description: "Advanced software engineering principles, design patterns, system architecture, and best practices for building scalable and maintainable applications.",
      link: "#",
      category: "Engineering"
    },
    {
      id: 3,
      name: "Foundations of Cybersecurity",
      authority: "Google via Coursera",
      year: "2024",
      verified: true,
      image: "https://i.postimg.cc/fybd8THK/Foundations-of-Cybersecurity.png",
      description: "Essential cybersecurity concepts, threat analysis, risk management, and security frameworks for protecting modern digital environments and infrastructure.",
      link: "https://coursera.org/verify/foundations-cybersecurity",
      category: "Security"
    },
    {
      id: 4,
      name: "Foundations of User Experience (UX) Design",
      authority: "Google via Coursera",
      year: "2024",
      verified: true,
      image: "https://i.postimg.cc/0NkxhMs7/Foundations-of-User-Experience-UX-Design.png",
      description: "User-centered design principles, research methodologies, prototyping, and usability testing for creating exceptional and accessible user experiences.",
      link: "https://coursera.org/verify/ux-design-foundations",
      category: "Design"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, certifications.length]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  const redirectToWhatsApp = () => {
    window.open('https://wa.me/+923362255235', '_blank');
  };

  return (
    <section id="certifications" className="py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl">
              <Award className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Professional Certifications
            </h2>
          </div>
          <p className="text-sm lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-3 lg:px-0">
            Industry-recognized credentials that validate my expertise in development, design, and cybersecurity.
          </p>
        </motion.div>

        {/* Main Slider Container */}
        <div className="relative">
          {/* Navigation Controls - Desktop */}
          <div className="hidden lg:flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:scale-110"
              aria-label="Previous certification"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:scale-110"
              aria-label="Next certification"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Slider Container */}
          <div 
            ref={sliderRef}
            className="relative overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.6 
                }}
                className="w-full"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 rounded-2xl p-6 lg:p-12 border border-gray-200 dark:border-gray-800 shadow-xl">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Certificate Image */}
                    <div className="relative group order-2 lg:order-1">
                      <div className="aspect-[4/3] bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-2xl relative">
                        <img
                          src={certifications[currentIndex].image}
                          alt={certifications[currentIndex].name}
                          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        
                        {/* Verified Badge */}
                        <div className="absolute -top-3 -right-3 bg-green-500 dark:bg-green-400 rounded-full p-3 shadow-xl border-4 border-white dark:border-gray-900">
                          <CheckCircle className="w-5 h-5 text-white dark:text-gray-900" />
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-gray-900/90 dark:bg-white/90 text-white dark:text-gray-900 px-3 py-1.5 rounded-lg text-sm font-semibold">
                          {certifications[currentIndex].category}
                        </div>
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
                      {/* Title */}
                      <div>
                        <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 leading-tight">
                          {certifications[currentIndex].name}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Shield className="w-4 h-4" />
                            <span className="font-medium text-sm lg:text-base">
                              {certifications[currentIndex].authority}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium text-sm lg:text-base">
                              {certifications[currentIndex].year}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base lg:text-lg">
                        {certifications[currentIndex].description}
                      </p>

                      {/* Meta Information */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                            <span className="text-sm lg:text-base font-semibold text-green-600 dark:text-green-400">
                              Verified Credential
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-4">
                          {certifications[currentIndex].link !== '#' && (
                            <a
                              href={certifications[currentIndex].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg transition-all font-medium text-sm lg:text-base shadow-lg hover:shadow-xl"
                            >
                              <span>View Certificate</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex lg:hidden items-center justify-center space-x-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous certification"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next certification"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center space-x-3 mt-8 lg:mt-12">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-3 bg-gray-900 dark:bg-white rounded-full'
                  : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full'
              }`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 lg:mt-8">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / certifications.length) * 100}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <div className="flex justify-between mt-3 text-sm text-gray-500 dark:text-gray-400">
            <span>{currentIndex + 1} of {certifications.length} Certifications</span>
            <span>Industry Recognized</span>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-gray-50 dark:bg-gray-950 rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work with a Certified Professional?
            </h3>
            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              These certifications represent my commitment to staying current with industry standards and best practices. 
              Let's discuss how my expertise can benefit your project.
            </p>
            <button
              onClick={redirectToWhatsApp}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium transition-all text-sm lg:text-base shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;