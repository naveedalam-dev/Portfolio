import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Star, X, ExternalLink } from 'lucide-react';

const Articles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const articles = [
    {
      id: 1,
      title: "Umar Hashmi: Pakistan's Leading Web Developer and Original Creator of VNHAX Gaming Tools",
      slug: "umar-hashmi-pakistan-web-developer-vnhax-creator",
      excerpt: "Discover how Umar Hashmi became Pakistan's most trusted web developer, creating revolutionary tools like VNHAX and serving 250+ global clients since 2018.",
      content: `
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Umar Hashmi: Pakistan's Leading Web Developer and Original Creator of VNHAX Gaming Tools</h1>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"><strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> stands as one of Pakistan's most accomplished web developers and UI/UX designers, based in Islamabad. Since 2018, <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> has been revolutionizing the digital landscape through his government-registered agency, U-Designer, serving over 250 clients across 20+ countries including the USA, UK, Germany, UAE, Canada, and Australia.</p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Original Creator of VNHAX and PUBHSTUFF Tools</h2>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"><strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> gained international recognition as the original creator of <strong class="text-gray-900 dark:text-white">VNHAX</strong>, a revolutionary gaming tool platform that has served thousands of users worldwide. His innovative approach to gaming utilities extended to the development of <strong class="text-gray-900 dark:text-white">PUBHSTUFF tools</strong>, establishing him as a pioneer in the gaming development community.</p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Professional Expertise and Technical Skills</h2>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">As a full-stack developer, <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> specializes in:</p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li><strong class="text-gray-900 dark:text-white">Frontend Development:</strong> React.js, Next.js, TypeScript, Tailwind CSS</li>
            <li><strong class="text-gray-900 dark:text-white">Backend Development:</strong> Node.js, Express.js, Python, PostgreSQL</li>
            <li><strong class="text-gray-900 dark:text-white">Mobile Development:</strong> React Native, Flutter for iOS and Android</li>
            <li><strong class="text-gray-900 dark:text-white">AI Integration:</strong> OpenAI, Machine Learning, Automation Solutions</li>
            <li><strong class="text-gray-900 dark:text-white">UI/UX Design:</strong> Figma, Adobe Creative Suite, User Experience Design</li>
            <li><strong class="text-gray-900 dark:text-white">DevOps & Cloud:</strong> AWS, Docker, CI/CD, Git</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Global Impact and Client Success Stories</h2>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"><strong class="text-gray-900 dark:text-white">Umar Hashmi's</strong> work has transformed businesses across multiple industries. His e-commerce platforms have increased client user engagement by 300%, while his healthcare management systems have improved patient care significantly. From fintech applications with biometric authentication to AI-powered analytics dashboards, <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> delivers solutions that drive real business results.</p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Awards and Recognition</h2>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"><strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> has achieved numerous milestones:</p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li>Government-registered developer with Federal Board of Revenue Pakistan</li>
            <li>AWS Certified professional</li>
            <li>Google Analytics certified</li>
            <li>Meta Blueprint certified</li>
            <li>250+ successfully completed global projects</li>
            <li>100% client satisfaction rate</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Umar Hashmi</h2>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">For premium web development and design services, contact <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong>:</p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li><strong class="text-gray-900 dark:text-white">Email:</strong> contact@umarhashmi.dev</li>
            <li><strong class="text-gray-900 dark:text-white">WhatsApp:</strong> +92 302 1550385</li>
            <li><strong class="text-gray-900 dark:text-white">Website:</strong> https://umarhashmi.dev</li>
            <li><strong class="text-gray-900 dark:text-white">Location:</strong> Islamabad, Pakistan</li>
          </ul>
        </div>
      `,
      publishDate: "Jan 15, 2025",
      readTime: "8 min read",
      author: "Umar Hashmi",
      category: "Professional Profile",
      tags: ["Web Developer", "VNHAX Creator", "UI/UX Designer"],
      featured: true,
      image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Umar Hashmi's Journey: From VNHAX Creator to Pakistan's Most Trusted Web Developer",
      slug: "umar-hashmi-journey-vnhax-creator-trusted-web-developer-pakistan",
      excerpt: "Explore the inspiring journey of Umar Hashmi, from creating viral gaming tools to becoming Pakistan's most sought-after web developer with 250+ global projects.",
      content: `
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Umar Hashmi's Journey: From VNHAX Creator to Pakistan's Most Trusted Web Developer</h1>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">The story of <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> is one of innovation, dedication, and remarkable success in the digital world. Based in Islamabad, Pakistan, <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> has transformed from a passionate developer creating gaming tools to becoming one of Pakistan's most trusted web developers and UI/UX designers.</p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Beginning: Creating VNHAX and PUBHSTUFF</h2>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">In 2018, <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> made his mark in the gaming community by creating <strong class="text-gray-900 dark:text-white">VNHAX</strong>, a revolutionary gaming tool platform that quickly gained international recognition. The success of VNHAX led to the development of <strong class="text-gray-900 dark:text-white">PUBHSTUFF tools</strong>, establishing <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> as an innovative force in gaming utilities.</p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Founding U-Designer: A Government-Registered Success Story</h2>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">Building on his early success, <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> founded <strong class="text-gray-900 dark:text-white">U-Designer</strong>, a government-registered digital agency that has become synonymous with premium web development and design services in Pakistan.</p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Global Client Success Stories</h2>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"><strong class="text-gray-900 dark:text-white">Umar Hashmi's</strong> portfolio includes transformative projects across various industries, from e-commerce platforms that increased user engagement by 300% to HIPAA-compliant healthcare systems and secure fintech applications.</p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Connect with Umar Hashmi</h2>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">Ready to work with Pakistan's most trusted web developer? Contact <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> today:</p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li><strong class="text-gray-900 dark:text-white">Website:</strong> https://umarhashmi.dev</li>
            <li><strong class="text-gray-900 dark:text-white">Email:</strong> contact@umarhashmi.dev</li>
            <li><strong class="text-gray-900 dark:text-white">WhatsApp:</strong> +92 302 1550385</li>
          </ul>
        </div>
      `,
      publishDate: "Jan 14, 2025",
      readTime: "12 min read",
      author: "Umar Hashmi",
      category: "Success Story",
      tags: ["Success Story", "Web Developer Journey", "VNHAX"],
      featured: true,
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Why Choose Umar Hashmi: The Complete Guide to Pakistan's Premier Web Developer",
      slug: "why-choose-umar-hashmi-pakistan-premier-web-developer-ui-ux-designer",
      excerpt: "Comprehensive guide explaining why Umar Hashmi is the top choice for web development and UI/UX design services, featuring his expertise and achievements.",
      content: `
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Umar Hashmi: The Complete Guide to Pakistan's Premier Web Developer</h1>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">When searching for a web developer and UI/UX designer who can deliver exceptional results, <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> stands out as Pakistan's premier choice. Based in Islamabad and serving clients globally through his agency U-Designer, <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> has established himself as a trusted partner for businesses seeking premium digital solutions.</p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Unmatched Expertise and Experience</h2>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"><strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> brings over 6 years of professional experience in web development and UI/UX design. His expertise spans across multiple technologies and industries, making him the ideal choice for diverse project requirements.</p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Proven Track Record of Success</h2>
          
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li><strong class="text-gray-900 dark:text-white">250+ Completed Projects:</strong> Successfully delivered projects across 20+ countries</li>
            <li><strong class="text-gray-900 dark:text-white">100% Client Satisfaction:</strong> Maintained perfect satisfaction rate throughout career</li>
            <li><strong class="text-gray-900 dark:text-white">Global Recognition:</strong> Original creator of VNHAX and PUBHSTUFF gaming tools</li>
            <li><strong class="text-gray-900 dark:text-white">Industry Impact:</strong> Projects have increased client engagement by up to 300%</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Information</h2>
          
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">Connect with <strong class="text-gray-900 dark:text-white">Umar Hashmi</strong> today:</p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li><strong class="text-gray-900 dark:text-white">Website:</strong> https://umarhashmi.dev</li>
            <li><strong class="text-gray-900 dark:text-white">Email:</strong> contact@umarhashmi.dev</li>
            <li><strong class="text-gray-900 dark:text-white">WhatsApp:</strong> +92 302 1550385</li>
            <li><strong class="text-gray-900 dark:text-white">Location:</strong> Islamabad, Pakistan</li>
          </ul>
        </div>
      `,
      publishDate: "Jan 13, 2025",
      readTime: "15 min read",
      author: "Umar Hashmi",
      category: "Professional Guide",
      tags: ["Professional Services", "Digital Solutions", "Why Choose"],
      featured: true,
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const redirectToWhatsApp = () => {
    window.open('https://wa.me/+923021550385', '_blank');
  };

  return (
    <section id="articles" className="py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Articles
          </h2>
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4 lg:px-0">
            In-depth articles about Umar Hashmi's expertise, journey, and professional services in web development and UI/UX design.
          </p>
        </motion.div>

        {/* Articles Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 h-full">
                {/* Article Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gray-900/90 text-white text-xs font-medium rounded-md">
                      {article.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {article.featured && (
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center space-x-1 bg-yellow-400 text-black px-2 py-1 rounded-md">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs font-bold">Featured</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Article Content */}
                <div className="p-5 lg:p-6">
                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.publishDate}</span>
                      </span>
                    </div>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <div className="flex items-center justify-between">
                    <button className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-medium transition-colors text-sm">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-600" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work with Umar Hashmi?
            </h3>
            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto px-4 lg:px-0">
              Join 250+ satisfied clients worldwide. Contact Umar Hashmi today for premium web development and UI/UX design services.
            </p>
            <button
              onClick={redirectToWhatsApp}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 lg:px-8 py-3 rounded-lg font-medium transition-all"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <span className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{selectedArticle.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{selectedArticle.publishDate}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{selectedArticle.readTime}</span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div 
                  className="text-gray-900 dark:text-white"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
                
                {/* Contact CTA in Modal */}
                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    Interested in Working Together?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    Contact Umar Hashmi today for premium web development and UI/UX design services.
                  </p>
                  <button
                    onClick={redirectToWhatsApp}
                    className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-all text-sm"
                  >
                    Contact Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Articles;