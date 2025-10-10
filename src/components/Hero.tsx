import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { MapPin, Calendar, Globe, ArrowDown, Code, Palette, Zap, Star, Users, Coffee, Download } from 'lucide-react';
import SimpleIcon from './SimpleIcon';
import { generateAndDownloadCV } from '../utils/generateCV';

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const redirectToWhatsApp = () => {
    window.open('https://wa.me/+923362255235', '_blank');
  };

  const handleDownloadCV = () => {
    generateAndDownloadCV();
  };

  const skills = [
    { icon: <Code className="w-4 h-4" />, label: "Full-Stack" },
    { icon: <Palette className="w-4 h-4" />, label: "UI/UX" },
    { icon: <Zap className="w-4 h-4" />, label: "AI Tools" }
  ];

  const achievements = [
    { icon: <Star className="w-4 h-4" />, label: "50+ Projects" },
    { icon: <Users className="w-4 h-4" />, label: "20+ Countries" },
    { icon: <Coffee className="w-4 h-4" />, label: "4+ Years" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-gray-950 pt-20 lg:pt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Content - Optimized for LCP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-8 text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-800 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-700 dark:text-green-400 text-xs lg:text-sm font-medium">Available for Projects</span>
            </div>

            {/* Main Heading - LCP Element */}
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white leading-tight">
                Naveed Alam
              </h1>
              <p className="text-lg sm:text-xl lg:text-3xl text-gray-600 dark:text-gray-400 font-medium">
                Developer & UI/UX Designer
              </p>
            </div>

            {/* Location & Experience */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-6">
              <div className="flex items-center space-x-2">
                <SimpleIcon icon={<MapPin className="w-4 h-4" />} size="sm" />
                <span className="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400">Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <SimpleIcon icon={<Calendar className="w-4 h-4" />} size="sm" />
                <span className="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400">Since 2021</span>
              </div>
              <div className="flex items-center space-x-2">
                <SimpleIcon icon={<Globe className="w-4 h-4" />} size="sm" />
                <span className="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400">20+ Countries</span>
              </div>
            </div>

            {/* Description - Optimized for LCP */}
            <p className="text-sm lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0">
              Creator of <span className="font-semibold text-gray-900 dark:text-white">BugSolution</span> and <span className="font-semibold text-gray-900 dark:text-white">CyberCrew</span> platforms.
              Trusted by <span className="font-semibold text-gray-900 dark:text-white">50+ global clients</span> with premium development solutions.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <SimpleIcon icon={skill.icon} size="sm" />
                  <span className="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400">{skill.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <SimpleIcon icon={achievement.icon} size="sm" />
                  <span className="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400">{achievement.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start px-2 lg:px-0">
              <button
                onClick={handleDownloadCV}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-2.5 lg:px-8 lg:py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
              <EncryptButton onClick={redirectToWhatsApp} />
            </div>
          </motion.div>

          {/* Professional Card - Optimized for LCP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative px-2 lg:px-0"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transformStyle: "preserve-3d",
                transform,
              }}
              className="bg-gray-100 dark:bg-gray-900 rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-gray-200 dark:border-gray-800"
            >
              {/* Header */}
              <div
                className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-8"
                style={{
                  transform: "translateZ(50px)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                  <span className="text-white dark:text-gray-900 font-bold text-lg lg:text-xl">N</span>
                </div>
                <div>
                  <h3 className="text-base lg:text-xl font-bold text-gray-900 dark:text-white">Premium Quality</h3>
                  <p className="text-xs lg:text-base text-gray-600 dark:text-gray-400">Modern & Scalable Solutions</p>
                </div>
              </div>
              
              {/* Skills */}
              <div
                className="space-y-3 lg:space-y-6"
                style={{
                  transform: "translateZ(40px)",
                  transformStyle: "preserve-3d",
                }}
              >
                {[
                  { name: "React.js & Next.js", level: 95 },
                  { name: "UI/UX Design", level: 90 },
                  { name: "AI Integration", level: 85 }
                ].map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5 lg:mb-2">
                      <span className="text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 lg:h-2 bg-gray-200 dark:bg-gray-800 rounded-full">
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
              <div
                className="grid grid-cols-3 gap-2 lg:gap-4 mt-4 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200 dark:border-gray-800"
                style={{
                  transform: "translateZ(50px)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="text-center">
                  <div className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-xs lg:text-xs text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">20+</div>
                  <div className="text-xs lg:text-xs text-gray-600 dark:text-gray-400">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">4+</div>
                  <div className="text-xs lg:text-xs text-gray-600 dark:text-gray-400">Years</div>
                </div>
              </div>
            </motion.div>
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

const EncryptButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const TARGET_TEXT = "Hire Me Now";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white bg-white dark:bg-gray-950 px-6 py-2.5 lg:px-8 lg:py-3 font-medium transition-all text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    >
      <div className="relative z-10 flex items-center justify-center">
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-gray-400/0 from-40% via-gray-400/100 to-gray-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default Hero;