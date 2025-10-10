import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Coffee, Heart, Code, Palette, Zap, CheckCircle, Globe, Star, Target, Briefcase, Clock, TrendingUp, Shield, Database, Smartphone, Search, Instagram, Linkedin, Github, Twitter, Facebook } from 'lucide-react';
import GlassIcon from './GlassIcon';

const About: React.FC = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "20+", label: "Countries Served", icon: Users },
    { number: "4+", label: "Years Experience", icon: Coffee },
    { number: "100%", label: "Client Satisfaction", icon: Heart }
  ];

  const skills = [
    { name: "React.js & Next.js", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Node.js & APIs", level: 88 },
    { name: "AI Integration", level: 85 }
  ];

  const achievements = [
    "Creator of BugSolution",
    "CyberCrew Developer", 
    "250+ Global Projects",
    "20+ Countries Served"
  ];

  const technicalStack = [
    { name: "Frontend", tools: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"], icon: Code },
    { name: "Backend", tools: ["Node.js", "Express.js", "Python", "PostgreSQL"], icon: Database },
    { name: "Mobile", tools: ["React Native", "Flutter", "iOS", "Android"], icon: Smartphone },
    { name: "AI/ML", tools: ["OpenAI", "TensorFlow", "Machine Learning", "Automation"], icon: Zap },
    { name: "Design", tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"], icon: Palette },
    { name: "DevOps", tools: ["AWS", "Docker", "CI/CD", "Git"], icon: Shield }
  ];

  const workProcess = [
    {
      icon: Briefcase,
      title: "Project Discovery",
      description: "Understanding your business goals and technical requirements"
    },
    {
      icon: Palette,
      title: "Design & Planning",
      description: "Creating wireframes, prototypes, and development roadmap"
    },
    {
      icon: Code,
      title: "Development",
      description: "Building with modern technologies and best practices"
    },
    {
      icon: TrendingUp,
      title: "Launch & Support",
      description: "Deployment, testing, and ongoing maintenance support"
    }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      url: 'https://instagram.com/naveedalam.dev', 
      name: 'Instagram',
      color: 'pink'
    },
    { 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/naveedalam-dev', 
      name: 'LinkedIn',
      color: 'blue'
    },
    { 
      icon: Github, 
      url: 'https://github.com/naveedalam-dev', 
      name: 'GitHub',
      color: 'gray'
    },
    { 
      icon: Twitter, 
      url: 'https://twitter.com/naveedalam_dev', 
      name: 'Twitter',
      color: 'cyan'
    },
    { 
      icon: Facebook, 
      url: 'https://facebook.com/naveedalam.dev', 
      name: 'Facebook',
      color: 'blue'
    }
  ];

  const clientBenefits = [
    "Free Initial Consultation",
    "24/7 Project Communication",
    "100% Money-Back Guarantee",
    "Post-Launch Support Included",
    "SEO-Optimized Development",
    "Mobile-First Responsive Design"
  ];

  const redirectToWhatsApp = () => {
    window.open('https://wa.me/+923362255235', '_blank');
  };

  return (
    <section id="about" className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Naveed Alam
          </h2>
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4 lg:px-0">
            Web Developer & UI/UX Designer from Pakistan. Creator of BugSolution and CyberCrew platforms.
          </p>
        </motion.div>

        {/* Main Content - Mobile Optimized */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-stretch mb-12 lg:mb-16">
          {/* Left Side - Professional Image & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            {/* Main Professional Image Container */}
            <div className="relative w-full max-w-xs lg:max-w-sm mx-auto mb-6 lg:mb-8">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 dark:from-white/10 to-gray-500/20 dark:to-gray-300/10 rounded-3xl blur-3xl transform scale-110"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-64 lg:h-96 rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-200 dark:from-gray-800 to-gray-300 dark:to-gray-900 border-2 border-gray-300 dark:border-gray-950 shadow-2xl">
                <img
                  src="/WhatsApp_Image_2025-06-19_at_11.11.19_b3646287-removebg-preview.png"
                  alt="Naveed Alam - Professional Web Developer & UI/UX Designer from Pakistan"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  fetchpriority="high"
                  width="400"
                  height="400"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/5 dark:from-gray-900/5 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Cards - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 bg-white dark:bg-gray-950 px-2 py-1.5 lg:px-4 lg:py-3 rounded-lg lg:rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <div className="text-center">
                  <div className="text-sm lg:text-xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-xs lg:text-xs text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-white dark:bg-gray-950 px-2 py-1.5 lg:px-4 lg:py-3 rounded-lg lg:rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <div className="text-center">
                  <div className="text-sm lg:text-xl font-bold text-gray-900 dark:text-white">4+</div>
                  <div className="text-xs lg:text-xs text-gray-600 dark:text-gray-400">Years</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 lg:-bottom-4 bg-white dark:bg-gray-950 px-3 py-1.5 lg:px-6 lg:py-3 rounded-lg lg:rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-sm font-medium text-gray-900 dark:text-white">Available</span>
                </div>
              </motion.div>
            </div>

            {/* Left Side Content - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="flex-1 space-y-6"
            >
              {/* Technical Stack Section */}
              <div className="bg-white dark:bg-gray-950 rounded-lg lg:rounded-xl p-3 lg:p-6 border border-gray-200 dark:border-gray-800">
                <h4 className="text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 flex items-center space-x-2">
                  <Code className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <span>Technical Stack</span>
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-4">
                  {technicalStack.map((stack, index) => (
                    <motion.div
                      key={stack.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-100 dark:bg-gray-800 rounded-md lg:rounded-lg p-2 lg:p-3"
                    >
                      <div className="flex items-center space-x-1.5 lg:space-x-2 mb-1.5 lg:mb-2">
                        <stack.icon className="w-3 h-3 lg:w-4 lg:h-4 text-gray-700 dark:text-gray-300" />
                        <h5 className="font-semibold text-gray-900 dark:text-white text-xs lg:text-sm">{stack.name}</h5>
                      </div>
                      <div className="space-y-0.5 lg:space-y-1">
                        {stack.tools.map((tool) => (
                          <span key={tool} className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-1.5 py-0.5 lg:px-2 lg:py-1 rounded text-xs mr-1 mb-0.5 lg:mb-1">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>

          {/* Right Side - Content with Equal Height */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full space-y-6"
          >
            {/* Header */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Naveed Alam
              </h3>
              <p className="text-base lg:text-xl text-gray-600 dark:text-gray-400 mb-3 lg:mb-4">
                Developer & UI/UX Designer
              </p>
              
              {/* Location & Details */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-6 text-xs lg:text-sm text-gray-600 dark:text-gray-400 mb-4 lg:mb-6">
                <span className="flex items-center space-x-1">
                  <span>📍</span>
                  <span>Pakistan</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span>📅</span>
                  <span>Since 2021</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span>🌍</span>
                  <span>Global Remote</span>
                </span>
              </div>

              {/* Key Achievements Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-3 mb-4 lg:mb-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 justify-center lg:justify-start"
                  >
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <span className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* My Journey Section */}
            <div className="bg-white dark:bg-gray-950 rounded-lg lg:rounded-xl p-3 lg:p-6 border border-gray-200 dark:border-gray-800">
              <h4 className="text-base lg:text-xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">My Journey</h4>
              <div className="space-y-3 lg:space-y-4 text-xs lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Since 2021, I've been crafting digital experiences that make a difference. What started as creating 
                  innovative platforms like <strong className="text-gray-900 dark:text-white">BugSolution</strong> and <strong className="text-gray-900 dark:text-white">CyberCrew</strong> 
                  has evolved into serving clients across 20+ countries.
                </p>
                <p>
                  Based in Pakistan, I founded <strong className="text-gray-900 dark:text-white">BugSolution</strong> - 
                  delivering premium web development, UI/UX design, and AI-powered solutions to businesses worldwide.
                </p>
                <p>
                  My commitment to excellence and innovation has earned the trust of 250+ global clients from the USA, UK, 
                  Germany, UAE, Canada, Australia, and many other regions.
                </p>
              </div>
            </div>

            {/* Technical Expertise Section */}
            <div className="bg-white dark:bg-gray-950 rounded-lg lg:rounded-xl p-3 lg:p-6 border border-gray-200 dark:border-gray-800">
              <h4 className="text-base lg:text-xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">Technical Expertise</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 lg:h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gray-900 dark:bg-white rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work Process Section with Social Icons */}
            <div className="bg-white dark:bg-gray-950 rounded-lg lg:rounded-xl p-3 lg:p-6 border border-gray-200 dark:border-gray-800 flex-1">
              <h4 className="text-base lg:text-xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <span>My Work Process</span>
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-3 mb-4 lg:mb-6">
                {workProcess.map((process, index) => (
                  <motion.div
                    key={process.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-2 lg:p-3 bg-gray-100 dark:bg-gray-800 rounded-md lg:rounded-lg"
                  >
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-200 dark:bg-gray-700 rounded-md lg:rounded-lg flex items-center justify-center mx-auto mb-1.5 lg:mb-2">
                      <process.icon className="w-3 h-3 lg:w-4 lg:h-4 text-gray-700 dark:text-gray-300" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white text-xs lg:text-xs mb-1">{process.title}</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-xs leading-tight">{process.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-3 lg:pt-4">
                <h5 className="text-xs lg:text-sm font-semibold text-gray-900 dark:text-white mb-2 lg:mb-3 text-center">Connect with me</h5>
                <div className="flex justify-center space-x-2 lg:space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                      title={social.name}
                    >
                      <GlassIcon 
                        icon={<social.icon className="w-4 h-4" />}
                        color={social.color}
                        size="sm"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid with Glass Icons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-8 lg:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white dark:bg-gray-950 rounded-lg lg:rounded-xl p-3 lg:p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all">
                <div className="flex justify-center mb-2 lg:mb-4">
                  <GlassIcon 
                    icon={<stat.icon className="w-5 h-5 lg:w-6 lg:h-6" />}
                    color="gray"
                    size="md"
                  />
                </div>
                <div className="text-lg lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 lg:mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white dark:bg-gray-950 rounded-lg lg:rounded-xl p-4 lg:p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-xs lg:text-base text-gray-700 dark:text-gray-300 mb-4 lg:mb-6 max-w-2xl mx-auto px-2 lg:px-0">
              Let's create something amazing together. I'm available for new projects and would love to discuss your ideas.
            </p>
            <button
              onClick={redirectToWhatsApp}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-5 lg:px-8 py-2.5 lg:py-3 rounded-lg font-medium transition-all text-sm lg:text-base"
            >
              Start a Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;