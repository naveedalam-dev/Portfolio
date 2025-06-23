import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Globe, ArrowDown, Code, Palette, Zap, Star, Users, Coffee } from 'lucide-react';
import SimpleIcon from './SimpleIcon';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const redirectToWhatsApp = () => {
    window.open('https://wa.me/+923021550385', '_blank');
  };

  const skills = [
    { icon: <Code className="w-4 h-4" />, label: "Full-Stack" },
    { icon: <Palette className="w-4 h-4" />, label: "UI/UX" },
    { icon: <Zap className="w-4 h-4" />, label: "AI Tools" }
  ];

  const achievements = [
    { icon: <Star className="w-4 h-4" />, label: "250+ Projects" },
    { icon: <Users className="w-4 h-4" />, label: "20+ Countries" },
    { icon: <Coffee className="w-4 h-4" />, label: "6+ Years" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-gray-950 pt-20 lg:pt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-3 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-800 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-700 dark:text-green-400 text-sm font-medium">Available for Projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white leading-tight">
                Umar Hashmi
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-medium">
                Developer & UI/UX Designer
              </p>
            </div>

            {/* Location & Experience */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
              <div className="flex items-center space-x-2">
                <SimpleIcon icon={<MapPin className="w-4 h-4" />} size="sm" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <SimpleIcon icon={<Calendar className="w-4 h-4" />} size="sm" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Since 2018</span>
              </div>
              <div className="flex items-center space-x-2">
                <SimpleIcon icon={<Globe className="w-4 h-4" />} size="sm" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">20+ Countries</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0">
              Original creator of <span className="font-semibold text-gray-900 dark:text-white">VNHAX</span> and <span className="font-semibold text-gray-900 dark:text-white">PUBHSTUFF</span> tools. 
              Trusted by <span className="font-semibold text-gray-900 dark:text-white">250+ global clients</span> with premium development solutions.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <SimpleIcon icon={skill.icon} size="sm" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <SimpleIcon icon={achievement.icon} size="sm" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{achievement.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <button
                onClick={scrollToPortfolio}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all"
              >
                View Portfolio
              </button>
              <button
                onClick={redirectToWhatsApp}
                className="border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
              >
                Hire Me Now
              </button>
            </div>
          </motion.div>

          {/* Professional Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative px-4 lg:px-0"
          >
            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6 lg:mb-8">
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                  <span className="text-white dark:text-gray-900 font-bold text-xl">U</span>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">Premium Quality</h3>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">Modern & Scalable Solutions</p>
                </div>
              </div>
              
              {/* Skills */}
              <div className="space-y-4 lg:space-y-6">
                {[
                  { name: "React.js & Next.js", level: 95 },
                  { name: "UI/UX Design", level: 90 },
                  { name: "AI Integration", level: 85 }
                ].map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full">
                      <motion.div
                        className="h-full bg-gray-900 dark:bg-white rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 1 + index * 0.2, duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 lg:gap-4 mt-6 lg:mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">250+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">20+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">6+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Years</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-600 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={scrollToPortfolio}
          >
            <span className="text-sm">Scroll to explore</span>
            <SimpleIcon icon={<ArrowDown className="w-4 h-4" />} size="sm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;