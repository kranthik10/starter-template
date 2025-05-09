
import { motion } from 'framer-motion';
import { 
  FiSearch, 
  FiPenTool, 
  FiLayout, 
  FiCode, 
  FiCheckCircle, 
  FiRepeat,
  FiArrowRight
} from 'react-icons/fi';

const processSteps = [
  {
    icon: <FiSearch className="h-8 w-8" />,
    title: "Discovery & Research",
    description: "We deeply understand your business, users, and competitors to identify key opportunities and challenges.",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    gradient: "from-blue-400 to-blue-600",
    delay: 0.2
  },
  {
    icon: <FiPenTool className="h-8 w-8" />,
    title: "Strategy & Wireframing",
    description: "Creating a comprehensive plan and low-fidelity wireframes to establish user flows and information architecture.",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
    gradient: "from-purple-400 to-purple-600",
    delay: 0.3
  },
  {
    icon: <FiLayout className="h-8 w-8" />,
    title: "UI Design",
    description: "Crafting beautiful, intuitive interfaces with attention to brand identity, typography, and visual hierarchy.",
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300",
    gradient: "from-pink-400 to-pink-600",
    delay: 0.4
  },
  {
    icon: <FiCode className="h-8 w-8" />,
    title: "Development",
    description: "Translating designs into fully functional products, working closely with developers to ensure design fidelity.",
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
    gradient: "from-green-400 to-green-600",
    delay: 0.5
  },
  {
    icon: <FiCheckCircle className="h-8 w-8" />,
    title: "Testing & Validation",
    description: "Rigorous testing with real users to validate design decisions and identify opportunities for improvement.",
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300",
    gradient: "from-yellow-400 to-yellow-600",
    delay: 0.6
  },
  {
    icon: <FiRepeat className="h-8 w-8" />,
    title: "Iteration & Refinement",
    description: "Continuously refining the product based on user feedback and performance data to optimize the experience.",
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300",
    gradient: "from-indigo-400 to-indigo-600",
    delay: 0.7
  }
];

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
      duration: 0.5
    }
  }
};

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70 -translate-x-1/2"></div>
      <div className="absolute bottom-40 right-0 w-64 h-64 bg-indigo-50 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-70 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
            Our Approach
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Design Process That <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Delivers Results</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Our systematic approach ensures we create exceptional user experiences
            that achieve your business goals.
          </p>
        </motion.div>

        {/* Process Flow Visualization */}
        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 transform -translate-y-1/2 rounded-full"></div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step number indicator */}
                <div className="absolute -top-10 left-0 right-0 flex justify-center lg:justify-start">
                  <motion.div 
                    className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${step.gradient} text-white text-lg font-bold shadow-lg`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: step.delay }}
                  >
                    {index + 1}
                  </motion.div>
                </div>
                
                {/* Card content */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
                  {/* Background decoration */}
                  <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10 bg-gradient-to-br ${step.gradient}`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center ${step.color}`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                  
                  {/* Arrow connecting to next step */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <FiArrowRight className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Hover effect indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center`}>
                      <FiArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* UI elements showcasing the process */}
        <motion.div
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                See How Our Process Transforms Your Ideas
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our design process is structured yet flexible, allowing us to adapt to your unique challenges while ensuring consistent, high-quality results.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Collaborative approach with regular check-ins",
                  "Data-informed design decisions",
                  "Iterative methodology for continuous improvement",
                  "Seamless handoff between design and development"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <FiArrowRight className="ml-2" />
              </motion.a>
            </div>
            
            {/* Visual representation of the design process */}
            <div className="relative h-72 md:h-96">
              {/* Wireframe stage */}
              <motion.div
                className="absolute top-0 left-0 w-60 h-40 md:w-72 md:h-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden z-10"
                initial={{ opacity: 0, x: 40, y: 40, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-3">
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full mb-2"></div>
                  <div className="w-1/2 h-2 bg-gray-200 dark:bg-gray-600 rounded-full mb-4"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Design stage */}
              <motion.div
                className="absolute top-10 left-10 w-60 h-40 md:w-72 md:h-48 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50 rounded-lg shadow-lg border border-purple-200 dark:border-purple-800/50 overflow-hidden z-20"
                initial={{ opacity: 0, x: 20, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="p-3">
                  <div className="w-1/3 h-2 bg-indigo-300 dark:bg-indigo-700 rounded-full mb-2"></div>
                  <div className="w-1/2 h-6 bg-indigo-400 dark:bg-indigo-600 rounded mb-3 flex items-center justify-center">
                    <div className="w-8 h-1 bg-white rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 bg-purple-300 dark:bg-purple-700 rounded flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white/50"></div>
                    </div>
                    <div className="h-10 bg-indigo-300 dark:bg-indigo-700 rounded flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white/50"></div>
                    </div>
                    <div className="h-10 bg-purple-300 dark:bg-purple-700 rounded flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white/50"></div>
                    </div>
                    <div className="h-10 bg-indigo-300 dark:bg-indigo-700 rounded flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white/50"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Final UI stage */}
              <motion.div
                className="absolute top-20 left-20 w-60 h-40 md:w-72 md:h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-xl overflow-hidden z-30"
                initial={{ opacity: 0, x: 0, y: 0, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="p-4">
                  <div className="w-1/3 h-1 bg-white/30 rounded-full mb-3"></div>
                  <div className="w-2/3 h-6 bg-white/20 rounded-lg mb-4"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div 
                      className="h-12 bg-white/10 rounded-lg flex items-center justify-center"
                      animate={{ 
                        boxShadow: ['0 0 0 rgba(255,255,255,0)', '0 0 10px rgba(255,255,255,0.3)', '0 0 0 rgba(255,255,255,0)'] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-6 h-6 rounded-full bg-white/40"></div>
                    </motion.div>
                    <div className="h-12 bg-white/10 rounded-lg"></div>
                    <div className="h-12 bg-white/10 rounded-lg"></div>
                    <div className="h-12 bg-white/10 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;