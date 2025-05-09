import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiArrowRight, 
  FiMail, 
  FiMessageSquare, 
  FiCheck, 
  FiUsers,
  FiStar
} from 'react-icons/fi';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
        <motion.div 
          className="absolute top-20 -right-40 w-[500px] h-[500px] bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-40 w-[400px] h-[400px] bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="relative z-10 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main CTA Card */}
          <motion.div 
            className="rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden">
              {/* Decorative header gradient */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              
              {/* CTA Content */}
              <div className="pt-16 pb-10 px-8 md:px-16 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
                  Ready to Get Started?
                </motion.div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Digital Presence</span> Today
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                  Join hundreds of satisfied clients who have elevated their brands with our exceptional design solutions. Let's create something amazing together.
                </p>
                
                <div className="max-w-xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <div className="flex-1">
                      <motion.div 
                        className="relative"
                        whileHover={{ y: -2 }}
                      >
                        <input 
                          type="email" 
                          placeholder="Enter your email" 
                          className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                        />
                        <div className="absolute top-0 right-0 h-full flex items-center pr-3">
                          <FiMail className="text-gray-400" />
                        </div>
                      </motion.div>
                    </div>
                    <motion.button
                      className="px-8 py-4 font-medium rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/20 transition-all duration-300"
                      whileHover={{ scale: 1.03, translateY: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                      <FiArrowRight className="inline-block ml-2" />
                    </motion.button>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <FiCheck className="text-green-500 mr-2" />
                      No credit card required
                    </span>
                    <span className="flex items-center">
                      <FiCheck className="text-green-500 mr-2" />
                      14-day free trial
                    </span>
                    <span className="flex items-center">
                      <FiCheck className="text-green-500 mr-2" />
                      Cancel anytime
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-700 bg-gray-50 dark:bg-gray-700/30">
                {[
                  { icon: <FiUsers className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />, value: "1,200+", label: "Happy Clients" },
                  { icon: <FiStar className="w-6 h-6 text-amber-500 dark:text-amber-400" />, value: "4.9/5", label: "Client Satisfaction" },
                  { icon: <FiMessageSquare className="w-6 h-6 text-green-500 dark:text-green-400" />, value: "24/7", label: "Customer Support" },
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="py-6 px-4 text-center"
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Featured Brands */}
            <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
            >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {[
              { icon: <FiStar className="w-8 h-8 text-yellow-500" />, name: "StarCorp" },
              { icon: <FiUsers className="w-8 h-8 text-blue-500" />, name: "UserBase" },
              { icon: <FiMail className="w-8 h-8 text-red-500" />, name: "Mailify" },
              { icon: <FiMessageSquare className="w-8 h-8 text-green-500" />, name: "ChatFlow" },
              { icon: <FiCheck className="w-8 h-8 text-purple-500" />, name: "CheckPoint" },
              ].map((brand, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center opacity-70 dark:opacity-50 hover:opacity-100 dark:hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.05 }}
              >
                {brand.icon}
                <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{brand.name}</span>
              </motion.div>
              ))}
            </div>
            </motion.div>
          
          {/* Alternative Contact Option */}
          <motion.div 
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
            variants={itemVariants}
          >
            <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
              <FiMessageSquare className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Prefer to talk to a human?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-lg">
                Our team is available Monday through Friday from 9am to 5pm EST.
              </p>
            </div>
            <motion.a
              href="tel:+1234567890"
              className="px-6 py-3 rounded-lg border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Call
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;