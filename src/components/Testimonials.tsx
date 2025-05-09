import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar, FiMessageSquare, FiUser, FiCheckCircle, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    role: "Product Manager at TechCorp",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "Working with this design studio transformed our product completely. The team took time to understand our users deeply and delivered a UI that not only looks stunning but has measurably improved our conversion rates by 37%.",
    rating: 5,
    logo: "https://via.placeholder.com/80x40/4F46E5/FFFFFF?text=TechCorp",
    color: "from-blue-400 to-indigo-600",
    highlight: "37% conversion increase"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Founder & CEO",
    company: "HealthPlus",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "The team's approach to UX research was impressive. They identified usability issues we hadn't noticed for years and proposed elegant solutions. Our app store ratings have gone from 3.6 to 4.8 stars since the redesign.",
    rating: 5,
    logo: "https://via.placeholder.com/80x40/059669/FFFFFF?text=HealthPlus",
    color: "from-emerald-400 to-teal-600",
    highlight: "4.8 star app rating"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "ShopWave",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "We hired them to redesign our e-commerce platform, and the results exceeded our expectations. The new design not only looks more professional but has significantly reduced cart abandonment rates and improved our overall conversion funnel.",
    rating: 5,
    logo: "https://via.placeholder.com/80x40/DC2626/FFFFFF?text=ShopWave",
    color: "from-red-400 to-rose-600",
    highlight: "Reduced cart abandonment"
  },
  {
    id: 4,
    name: "David Patel",
    role: "CTO",
    company: "LearnSphere",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    content: "Their expertise in creating intuitive educational interfaces is unmatched. The LMS design they delivered has received overwhelmingly positive feedback from both students and instructors. Support tickets related to navigation issues have dropped by 64%.",
    rating: 5,
    logo: "https://via.placeholder.com/80x40/0284C7/FFFFFF?text=LearnSphere",
    color: "from-cyan-400 to-blue-600",
    highlight: "64% fewer support tickets"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};


const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const containerRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Get visible testimonials (active one and one on each side for desktop view)
  const getVisibleTestimonials = () => {
    let indices = [activeIndex];
    
    // Add previous
    indices.unshift(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
    
    // Add next
    indices.push(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
    
    return indices.map(index => testimonials[index]);
  };

  const visibleTestimonials = getVisibleTestimonials();

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar 
        key={i} 
        className={`${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'} h-5 w-5`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-300/10 dark:bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            x: [50, 30, 50],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-300/10 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [-50, -30, -50],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-md text-indigo-600 dark:text-indigo-400 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
            Client Testimonials
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Voice of Satisfaction
            </span> <br/>
            From Our Valued Clients
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 mx-auto">
            Discover why our clients trust us to deliver exceptional digital experiences that transform their businesses.
          </p>
        </motion.div>

        {/* Desktop testimonial carousel */}
        <div className="hidden md:block" ref={containerRef}>
          <div className="relative py-12">
            <motion.div 
              className="grid grid-cols-3 gap-8 px-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`relative ${index === 1 ? 'z-10' : 'z-0'}`}
                  animate={{ 
                    scale: index === 1 ? 1.05 : 0.95,
                    opacity: index === 1 ? 1 : 0.7,
                    y: index === 1 ? -20 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => {
                    if (index === 0) prevTestimonial();
                    if (index === 2) nextTestimonial();
                  }}
                  style={{
                    cursor: index !== 1 ? 'pointer' : 'default'
                  }}
                >
                  <motion.div 
                    className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl ${
                      index === 1 ? 'ring-2 ring-indigo-500 dark:ring-indigo-400' : ''
                    }`}
                    whileHover={index !== 1 ? { scale: 1.03, y: -5 } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Top gradient bar */}
                    <div className={`h-2 w-full bg-gradient-to-r ${testimonial.color}`}></div>
                    
                    <div className="p-8">
                      {/* Quote icon */}
                      <div className="absolute top-12 right-8 opacity-10">
                        <FiArrowLeft className="h-16 w-16 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      
                      {/* Highlight chip */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 mb-6">
                        <FiCheckCircle className="mr-1" />
                        {testimonial.highlight}
                      </div>
                      
                      {/* Content */}
                      <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10 line-clamp-4 text-base leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      {/* Rating */}
                      <div className="flex mb-6">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      {/* Divider */}
                      <div className="border-t border-gray-200 dark:border-gray-700 mb-6"></div>
                      
                      {/* Footer with user info and company logo */}
                        <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100 dark:border-gray-700 mr-4 flex-shrink-0">
                          <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="h-full w-full object-cover"
                          />
                          </div>
                          <div>
                          <h3 className="text-base font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100 dark:border-gray-700 flex items-center justify-center bg-white">
                          <FiUser className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        </div>
                        </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced navigation controls */}
            <div className="flex justify-center mt-12 space-x-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.1, x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronLeft className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </motion.button>
              
              {/* Pagination dots */}
              <div className="flex items-center space-x-3 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`rounded-full focus:outline-none transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-6 h-2 bg-indigo-600 dark:bg-indigo-400'
                        : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-indigo-300 dark:hover:bg-indigo-700'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextTestimonial}
                className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.1, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronRight className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile testimonial carousel with swipe */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={testimonials[activeIndex].id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl mb-6"
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Top gradient bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${testimonials[activeIndex].color}`}></div>
              
              <div className="p-6">
                {/* Highlight chip */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 mb-4">
                  <FiCheckCircle className="mr-1" />
                  {testimonials[activeIndex].highlight}
                </div>
                
                {/* Quote icon */}
                <div className="absolute top-8 right-6 opacity-10">
                  <FiArrowLeft className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                </div>
                
                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 relative z-10 text-base leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
                
                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 mb-4"></div>
                
                {/* Footer with user info and company logo */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100 dark:border-gray-700 mr-3 flex-shrink-0">
                    <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">{testimonials[activeIndex].name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[activeIndex].role}</p>
                  </div>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100 dark:border-gray-700 flex-shrink-0">
                  <img 
                    src={testimonials[activeIndex].logo} 
                    alt={testimonials[activeIndex].company} 
                    className="h-full w-full object-contain bg-white"
                  />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Mobile navigation controls */}
          <div className="flex justify-between items-center">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300 border border-gray-100 dark:border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </motion.button>
            
            {/* Dots indicator */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-5 h-2 bg-indigo-600 dark:bg-indigo-400'
                      : 'w-2 h-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300 border border-gray-100 dark:border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </motion.button>
          </div>
        </div>

        {/* Enhanced testimonial stats with cards */}
        <motion.div 
          className="mt-24 grid grid-cols-2 gap-5 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { icon: <FiUser />, value: "150+", label: "Happy Clients", color: "from-blue-500 to-indigo-500" },
            { icon: <FiStar />, value: "4.9", label: "Average Rating", color: "from-amber-500 to-orange-500" },
            { icon: <FiMessageSquare />, value: "200+", label: "Projects Completed", color: "from-emerald-500 to-teal-500" },
            { icon: <FiCheckCircle />, value: "92%", label: "Repeat Clients", color: "from-purple-500 to-indigo-500" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(stat.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced call to action */}
        <motion.div 
          className="mt-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="py-12 px-6 md:px-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-32 -right-16 w-64 h-64 rounded-full bg-white/10 blur-xl"></div>
              <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-xl"></div>
              <div className="absolute -bottom-32 left-1/3 w-80 h-80 rounded-full bg-white/10 blur-xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to transform your digital experience?</h3>
                <p className="text-indigo-100">Join our satisfied clients and elevate your brand with our expert design solutions.</p>
              </div>
              <motion.a 
                href="#contact" 
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  x: 5
                }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
                <FiArrowRight className="ml-2" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;