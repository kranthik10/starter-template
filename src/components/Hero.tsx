import { motion } from 'framer-motion';
import { FiArrowRight, FiMousePointer, FiLayout, FiZap } from 'react-icons/fi';

// Animation variants for UI elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// UI decoration elements
const UIDecoration = () => (
  <div className="relative w-full h-full">
    {/* Floating UI elements */}
    <motion.div 
      className="absolute top-1/4 left-1/4 w-32 h-32 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 z-10 border border-gray-100 dark:border-gray-700"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2"></div>
      <div className="w-3/4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2"></div>
      <div className="w-1/2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
      <div className="flex space-x-1">
        <div className="w-4 h-4 rounded-full bg-red-400"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
        <div className="w-4 h-4 rounded-full bg-green-400"></div>
      </div>
    </motion.div>
    
    <motion.div 
      className="absolute bottom-1/3 right-1/4 w-40 h-24 bg-indigo-500 rounded-lg shadow-xl flex flex-col justify-center items-center"
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      <div className="w-8 h-8 rounded-full bg-white mb-2 flex items-center justify-center">
        <FiLayout className="text-indigo-500" />
      </div>
      <div className="w-3/4 h-2 bg-indigo-400 rounded-full"></div>
    </motion.div>
    
    <motion.div 
      className="absolute top-1/2 left-1/3 w-36 h-36 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
        <FiZap className="w-10 h-10 text-purple-500" />
      </div>
    </motion.div>
    
    {/* Wireframe backdrop */}
    <motion.div 
      className="absolute inset-0 bg-indigo-50 dark:bg-gray-800 rounded-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
        {Array(12).fill(null).map((_, rowIndex) => (
          Array(12).fill(null).map((_, colIndex) => (
            <div 
              key={`${rowIndex}-${colIndex}`} 
              className="border-[0.5px] border-indigo-200 dark:border-gray-700"
            ></div>
          ))
        ))}
      </div>
    </motion.div>
    
    {/* Interactive cursor element */}
    <motion.div
      className="absolute w-16 h-16 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center z-20"
      initial={{ x: '80%', y: '60%' }}
      animate={{ 
        x: ['80%', '30%', '60%', '80%'],
        y: ['60%', '40%', '70%', '60%']
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <FiMousePointer className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    </motion.div>
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative bg-white dark:bg-gray-900 overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content Column */}
          <motion.div 
            className="lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full inline-flex items-center mb-6"
              variants={itemVariants}
            >
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-white"></span>
              UI/UX Design Studio
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
              variants={itemVariants}
            >
              Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">exceptional</span> digital experiences
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              We transform visions into immersive digital experiences through 
              thoughtful UI design, detailed interactions, and a deep understanding 
              of user needs.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-lg bg-indigo-600 text-white font-medium flex items-center justify-center shadow-lg hover:shadow-indigo-200 dark:hover:shadow-none hover:bg-indigo-700 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(79, 70, 229, 0.4)' }}
                whileTap={{ y: 0 }}
              >
                Start Your Project
              </motion.a>
              
              <motion.a
                href="#work"
                className="px-8 py-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Work <FiArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center space-x-8"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden bg-gradient-to-br ${
                      i === 0 ? 'from-red-400 to-red-600' :
                      i === 1 ? 'from-blue-400 to-blue-600' :
                      i === 2 ? 'from-green-400 to-green-600' :
                      'from-yellow-400 to-yellow-600'
                    }`}
                  ></div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Trusted by <span className="font-semibold text-gray-900 dark:text-white">150+</span> clients
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visual Column */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-indigo-50 dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <UIDecoration />
          </motion.div>
        </div>
      </div>
      
      {/* Abstract design elements */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-50 blur-3xl"></div>
    </section>
  );
};

export default Hero;