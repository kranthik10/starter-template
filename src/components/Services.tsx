
import { motion } from 'framer-motion';
import { FiLayout, FiSmartphone, FiGrid, FiUsers, FiBarChart, FiCode } from 'react-icons/fi';

const servicesList = [
  {
    icon: <FiLayout className="w-7 h-7" />,
    title: "UI Design",
    description: "Crafting intuitive, beautiful interfaces that balance functionality with aesthetics.",
    features: ["User flows", "Wireframes", "Visual design", "Animation & micro-interactions"],
    color: "from-blue-500 to-indigo-600",
    shadowColor: "shadow-blue-500/30",
    hover: "hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 hover:text-white"
  },
  {
    icon: <FiUsers className="w-7 h-7" />,
    title: "UX Research",
    description: "Understanding user needs through data-driven research and testing methodologies.",
    features: ["User interviews", "Usability testing", "Journey mapping", "Heuristic evaluation"],
    color: "from-purple-500 to-pink-600",
    shadowColor: "shadow-purple-500/30",
    hover: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-600 hover:text-white"
  },
  {
    icon: <FiSmartphone className="w-7 h-7" />,
    title: "Mobile Design",
    description: "Creating seamless, engaging mobile experiences optimized for touch interactions.",
    features: ["iOS & Android interfaces", "Responsive layouts", "Gesture controls", "App navigation"],
    color: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-500/30",
    hover: "hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-600 hover:text-white"
  },
  {
    icon: <FiGrid className="w-7 h-7" />,
    title: "Design Systems",
    description: "Building scalable design frameworks that ensure consistency across products.",
    features: ["Component libraries", "Style guides", "Design tokens", "Documentation"],
    color: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/30",
    hover: "hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 hover:text-white"
  },
  {
    icon: <FiBarChart className="w-7 h-7" />,
    title: "Data Visualization",
    description: "Translating complex data into intuitive, actionable visual representations.",
    features: ["Dashboard design", "Interactive charts", "Information hierarchy", "Accessibility"],
    color: "from-red-500 to-rose-600",
    shadowColor: "shadow-red-500/30",
    hover: "hover:bg-gradient-to-br hover:from-red-500 hover:to-rose-600 hover:text-white"
  },
  {
    icon: <FiCode className="w-7 h-7" />,
    title: "Design to Code",
    description: "Bridging the gap between design and development with implementation-ready assets.",
    features: ["Developer handoff", "CSS automation", "Animation specs", "Design QA"],
    color: "from-cyan-500 to-blue-600",
    shadowColor: "shadow-cyan-500/30",
    hover: "hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
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
            Our Expertise
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            UI/UX Design Services That Drive <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Results & Engagement</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We blend aesthetics with functionality to create digital experiences 
            that captivate users and achieve business goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-300 ${service.hover} group relative overflow-hidden`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Card decoration - subtle shape in background */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10 bg-gray-900 dark:bg-white"></div>
              
              {/* Top section with icon */}
              <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} text-white ${service.shadowColor}`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Feature list */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="flex items-center text-gray-700 dark:text-gray-300 group-hover:text-white/90 transition-colors duration-300"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} mr-2`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Card footer with arrow */}
              <div className="mt-auto">
                <motion.div 
                  className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium group-hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to transform your digital experience?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create designs that not only look exceptional but drive real business outcomes.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(79, 70, 229, 0.4)' }}
              whileTap={{ y: 0 }}
            >
              Get a Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;