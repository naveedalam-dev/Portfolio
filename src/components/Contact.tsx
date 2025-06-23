import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp instead of form submission
    const message = `Hi Naveed! I'm interested in your services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/+923362255235?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@naveedalam.dev",
      link: "mailto:contact@naveedalam.dev"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+92 336 2255235",
      link: "https://wa.me/923362255235"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4 lg:px-0">
            Ready to bring your project to life? I'd love to discuss your ideas and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6">Start Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm lg:text-base">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm lg:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm lg:text-base">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm lg:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm lg:text-base">
                    Project Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm lg:text-base"
                    placeholder="Brief description of your project"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm lg:text-base">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm lg:text-base"
                    placeholder="Tell me more about your project, goals, and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 lg:py-4 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 text-sm lg:text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-5 lg:p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {contact.link !== '#' ? (
                      <a
                        href={contact.link}
                        target={contact.link.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                          <contact.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white text-sm lg:text-base">{contact.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{contact.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-3 p-3 rounded-lg">
                        <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                          <contact.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white text-sm lg:text-base">{contact.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{contact.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-5 lg:p-6 border border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm lg:text-base">Response Time</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Email responses within 12 hours</li>
                <li>• WhatsApp responses within 2 hours</li>
                <li>• Project proposals within 24 hours</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;