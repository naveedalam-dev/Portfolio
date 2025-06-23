import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc. (USA)",
      location: "New York, USA",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Naveed delivered an exceptional e-commerce platform that exceeded all our expectations. His attention to detail and innovative solutions increased our user engagement by 300%.",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLab (UK)",
      location: "London, UK",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Working with Naveed was a game-changer for our fintech project. His expertise in AI integration and security implementation is outstanding.",
      rating: 5,
      project: "AI Dashboard"
    },
    {
      id: 3,
      name: "Ahmed Al-Rashid",
      role: "CTO",
      company: "Dubai Tech Solutions (UAE)",
      location: "Dubai, UAE",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Naveed's healthcare management system transformed our operations. The secure solution has improved patient care significantly.",
      rating: 5,
      project: "Healthcare System"
    }
  ];

  const redirectToWhatsApp = () => {
    window.open('https://wa.me/+923362255235', '_blank');
  };

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4 lg:px-0">
            Real feedback from satisfied clients across 20+ countries.
          </p>
        </motion.div>

        {/* Testimonials Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-5 lg:p-6 border border-gray-200 dark:border-gray-800 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-gray-300 dark:text-gray-700">
                <Quote className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                "{testimonial.content}"
              </p>

              {/* Project */}
              <div className="bg-gray-100 dark:bg-gray-950 rounded-lg p-3 mb-4 border border-gray-200 dark:border-gray-800">
                <span className="text-sm text-gray-900 dark:text-white font-medium">{testimonial.project}</span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm lg:text-base">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                </div>
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
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join These Happy Clients?
            </h3>
            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto px-4 lg:px-0">
              Let's work together to create something amazing that your users will love and your business will benefit from.
            </p>
            <button
              onClick={redirectToWhatsApp}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium transition-all text-sm lg:text-base"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;