import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  authority: string;
  year: string;
  verified: boolean;
  image: string;
  description: string;
  link?: string;
}

const CertificationsSlider: React.FC = () => {
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
      description: "Comprehensive full-stack development program covering modern web technologies, cloud computing, and enterprise-level application development.",
      link: "https://coursera.org/verify/professional-cert/MGVC9DDF676B"
    },
    {
      id: 2,
      name: "Software Engineering",
      authority: "Professional Certification",
      year: "2024",
      verified: true,
      image: "https://i.postimg.cc/FFknZrLp/Software-Engineering.png",
      description: "Advanced software engineering principles, design patterns, system architecture, and best practices for scalable application development.",
      link: "#"
    },
    {
      id: 3,
      name: "Foundations of Cybersecurity",
      authority: "Google via Coursera",
      year: "2024",
      verified: true,
      image: "https://i.postimg.cc/fybd8THK/Foundations-of-Cybersecurity.png",
      description: "Essential cybersecurity concepts, threat analysis, risk management, and security frameworks for modern digital environments.",
      link: "https://coursera.org/verify/foundations-cybersecurity"
    },
    {
      id: 4,
      name: "Foundations of User Experience (UX) Design",
      authority: "Google via Coursera",
      year: "2024",
      verified: true,
      image: "https://i.postimg.cc/0NkxhMs7/Foundations-of-User-Experience-UX-Design.png",
      description: "User-centered design principles, research methodologies, prototyping, and usability testing for creating exceptional user experiences.",
      link: "https://coursera.org/verify/ux-design-foundations"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

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

    setTimeout(() => setIsAutoPlaying(true), 3000);
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
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <div className="bg-white dark:bg-gray-950 rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
            <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div>
            <h4 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
              Professional Certifications
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Industry-recognized credentials
            </p>
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="hidden lg:flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous certification"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next certification"
          >
            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div 
        ref={sliderRef}
        className="relative overflow-hidden rounded-xl"
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
              duration: 0.5 
            }}
            className="w-full"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Certificate Image */}
                <div className="relative group">
                  <div className="aspect-[4/3] bg-white dark:bg-gray-950 rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-lg">
                    <img
                      src={certifications[currentIndex].image}
                      alt={certifications[currentIndex].name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Verified Badge */}
                  <div className="absolute -top-2 -right-2 bg-green-500 dark:bg-green-400 rounded-full p-2 shadow-lg">
                    <CheckCircle className="w-4 h-4 text-white dark:text-gray-900" />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-4 lg:space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {certifications[currentIndex].name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {certifications[currentIndex].authority}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                    {certifications[currentIndex].description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Year:</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {certifications[currentIndex].year}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">
                          Verified
                        </span>
                      </div>
                    </div>

                    {/* View Certificate Link */}
                    {certifications[currentIndex].link !== '#' && (
                      <a
                        href={certifications[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center space-x-2 mt-6 lg:mt-8">
        {certifications.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gray-900 dark:bg-white scale-125'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to certification ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 lg:mt-6">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
          <motion.div
            className="bg-gray-900 dark:bg-white h-1 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / certifications.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
          <span>{currentIndex + 1} of {certifications.length}</span>
          <span>Professional Certifications</span>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSlider;