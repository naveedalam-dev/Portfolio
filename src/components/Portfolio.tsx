import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const featuredProjects = [
    {
      title: "BugSolution",
      description: "Revolutionary development platform with advanced features and secure infrastructure.",
      image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["JavaScript", "Node.js", "Security", "API"],
      year: "2018",
      users: "10K+ Users",
      link: "https://bugsolution.site",
      featured: true,
      category: "Development Tools"
    },
    {
      title: "CyberCrew",
      description: "Comprehensive platform with premium features and seamless user experience.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "API", "Cloud", "Security"],
      year: "2019",
      users: "5K+ Downloads",
      link: "#",
      featured: true,
      category: "Platform Solutions"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with payment integration and analytics.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
      users: "Enterprise",
      link: "#",
      featured: true,
      category: "E-Commerce"
    },
    {
      title: "AI Dashboard",
      description: "Modern analytics dashboard with AI insights for fintech company.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Python", "AI/ML", "D3.js"],
      year: "2024",
      users: "Corporate",
      link: "#",
      featured: true,
      category: "AI Solutions"
    },
    {
      title: "Healthcare System",
      description: "Comprehensive healthcare management platform with telemedicine features.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React Native", "Node.js", "MySQL", "Security"],
      year: "2023",
      users: "Healthcare",
      link: "#",
      featured: false,
      category: "Healthcare"
    },
    {
      title: "Fintech Mobile App",
      description: "Secure mobile banking application with biometric authentication.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Flutter", "Firebase", "Blockchain", "Auth"],
      year: "2024",
      users: "Banking",
      link: "#",
      featured: false,
      category: "Fintech"
    }
  ];

  const redirectToWhatsApp = () => {
    window.open('https://wa.me/+923362255235', '_blank');
  };

  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Portfolio
          </h2>
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4 lg:px-0">
            Showcasing my most impactful projects including BugSolution and CyberCrew platforms.
          </p>
        </motion.div>

        {/* Projects Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 h-full">
                {/* Project Image - Fixed Height */}
                <div className="relative overflow-hidden h-48 lg:h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gray-900/90 text-white text-xs font-medium rounded-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-md">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Hover Link */}
                  {project.link !== '#' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Live
                      </a>
                    </div>
                  )}
                </div>

                {/* Project Content - Mobile Optimized */}
                <div className="p-4 lg:p-5 h-64 lg:h-72 flex flex-col">
                  {/* Project Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3 text-xs text-gray-600 dark:text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.year}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{project.users}</span>
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  <div className="mt-auto">
                    {project.link !== '#' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-gray-900 dark:text-white text-sm font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Private Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {[
            { number: "250+", label: "Projects" },
            { number: "20+", label: "Countries" },
            { number: "15K+", label: "Users" },
            { number: "6+", label: "Years" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto px-4 lg:px-0">
              Join 250+ satisfied clients worldwide. Let's create something amazing together.
            </p>
            <button 
              onClick={redirectToWhatsApp}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 lg:px-8 py-3 rounded-lg font-medium transition-all"
            >
              Start a Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;