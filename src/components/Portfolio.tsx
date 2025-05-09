import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiEye, FiTag, FiArrowRight, FiMonitor, FiSmartphone, FiTablet } from 'react-icons/fi';

// Portfolio projects data
const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "UI/UX Design",
    type: "Dashboard",
    description: "A comprehensive financial analytics platform with intuitive data visualization and actionable insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    tags: ["Dashboard", "Analytics", "Finance"],
    devices: ["desktop", "tablet"],
    color: "from-blue-500 to-indigo-600",
    highlight: true
  },
  {
    id: 2,
    title: "Wellness Mobile App",
    category: "Mobile Design",
    type: "Mobile Application",
    description: "Health tracking app with personalized recommendations and seamless user experience.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile", "Health", "Lifestyle"],
    devices: ["mobile"],
    color: "from-emerald-500 to-teal-600",
    highlight: false
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Web Design",
    type: "E-commerce",
    description: "Modern shopping experience with intuitive product discovery and seamless checkout process.",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    tags: ["E-commerce", "Web", "Retail"],
    devices: ["desktop", "mobile", "tablet"],
    color: "from-purple-500 to-pink-600",
    highlight: true
  },
  {
    id: 4,
    title: "Learning Management System",
    category: "UX Research",
    type: "Education Platform",
    description: "Accessible educational platform designed to enhance student engagement and learning outcomes.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    tags: ["Education", "Web App", "Accessibility"],
    devices: ["desktop", "tablet"],
    color: "from-amber-500 to-orange-600",
    highlight: false
  },
  {
    id: 5,
    title: "Smart Home Control",
    category: "UI Design",
    type: "IoT Interface",
    description: "Intuitive control system for connected home devices with focus on simplicity and visual feedback.",
    image: "https://images.unsplash.com/photo-1717996876740-f8addb34e223?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["IoT", "Smart Home", "Mobile"],
    devices: ["mobile", "tablet"],
    color: "from-cyan-500 to-blue-600",
    highlight: true
  },
  {
    id: 6,
    title: "Music Streaming App",
    category: "Mobile Design",
    type: "Entertainment",
    description: "Reimagined music experience with visual sound waves and personalized discovery features.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    tags: ["Music", "Mobile", "Entertainment"],
    devices: ["mobile"],
    color: "from-red-500 to-pink-600",
    highlight: false
  }
];

// Ensure categories are properly extracted from projects
const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];

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

// Glass effect common classes
const glassEffect = "backdrop-blur-md bg-white/30 dark:bg-gray-900/50 border border-white/20 dark:border-gray-800/50";

// Interface for Project type
interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  tags: string[];
  devices: string[];
  color: string;
  highlight: boolean;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Update filtered projects whenever activeCategory changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === activeCategory);
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

  // Filter handler with debugging
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    console.log(`Changed category to: ${category}`);
  };

  // Open project modal
  const openProjectDetails = (project: Project): void => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close project modal
  const closeProjectDetails = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation to complete
  };

  // Render device icon based on supported devices
  const renderDeviceIcons = (devices: string[]) => {
    return (
      <div className="flex space-x-2">
        {devices.includes('desktop') && <FiMonitor className="text-gray-500 dark:text-gray-400" />}
        {devices.includes('tablet') && <FiTablet className="text-gray-500 dark:text-gray-400" />}
        {devices.includes('mobile') && <FiSmartphone className="text-gray-500 dark:text-gray-400" />}
      </div>
    );
  };

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 overflow-hidden relative"
    >
      {/* Animated background decorative elements */}
      <motion.div 
        className="absolute top-40 right-0 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full filter blur-3xl translate-x-1/2"
        style={{ opacity: backgroundOpacity }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-40 left-0 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/20 rounded-full filter blur-3xl -translate-x-1/2"
        style={{ opacity: backgroundOpacity }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/4 right-1/4 w-40 h-40 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full filter blur-2xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={`inline-flex items-center px-4 py-2 rounded-full ${glassEffect} text-indigo-600 dark:text-indigo-300 mb-4 shadow-lg`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
            Our Work
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm">
            Showcasing <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Exceptional</span> Digital Experiences
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Browse our portfolio of successful projects that demonstrate our expertise in creating impactful user interfaces.
          </p>
        </motion.div>

        {/* Category filter tabs - with enhanced 3D effect */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-1.5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-full shadow-lg inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'hover:bg-white/80 dark:hover:bg-gray-700/80 text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => handleCategoryChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Show number of filtered projects or a message if none */}
        {filteredProjects.length === 0 ? (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No projects found in the <span className="font-semibold">{activeCategory}</span> category.
            </p>
            <motion.button
              className="mt-6 inline-flex items-center px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium"
              onClick={() => handleCategoryChange("All")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show All Projects
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={activeCategory} // Key helps re-render the grid when category changes
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="h-full"
              >
                <motion.div 
                  className="h-full rounded-2xl overflow-hidden transform-gpu perspective-1000"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Enhanced 3D card with consistent size */}
                  <div className="relative h-full flex flex-col bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl rounded-2xl border border-white/50 dark:border-gray-700/50 overflow-hidden">
                    {/* Card inner shadow for depth effect */}
                    <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none"></div>
                    
                    {/* Project thumbnail with consistent fixed size */}
                    <div className="relative overflow-hidden">
                      {/* Fixed height container for all images */}
                      <div className="h-64 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <motion.div
                          className="w-full h-full overflow-hidden"
                          animate={{ 
                            scale: hoveredProjectId === project.id ? 1.1 : 1
                          }}
                          transition={{ duration: 0.7 }}
                        >
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover object-center"
                            style={{ 
                              objectPosition: 'center center'
                            }}
                          />
                        </motion.div>
                        
                        {/* Enhanced gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                      </div>
                      
                      {/* Interactive overlay with enhanced floating button */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProjectId === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="flex justify-end mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: hoveredProjectId === project.id ? 1 : 0,
                            y: hoveredProjectId === project.id ? 0 : 20
                          }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <motion.button
                            onClick={() => openProjectDetails(project)}
                            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-xl backdrop-blur-sm border border-white/50 dark:border-gray-700/50"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiEye className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                          </motion.button>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: hoveredProjectId === project.id ? 1 : 0,
                            y: hoveredProjectId === project.id ? 0 : 20
                          }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-white/80 line-clamp-2">{project.description}</p>
                          <motion.button
                            onClick={() => openProjectDetails(project)}
                            className="mt-4 inline-flex items-center text-white font-medium border-b border-white/40 pb-0.5"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            Explore Project <FiArrowRight className="ml-2" />
                          </motion.button>
                        </motion.div>
                      </motion.div>
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span 
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white shadow-lg backdrop-blur-sm border border-white/10`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategoryChange(project.category);
                          }}
                        >
                          {project.type}
                        </span>
                      </div>
                    </div>
                    
                    {/* Project info with enhanced styling */}
                    <div className="p-6 relative flex-grow">
                      {/* Background decoration */}
                      <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10 bg-gradient-to-br ${project.color}`}></div>
                      
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                        {renderDeviceIcons(project.devices)}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                      
                      {/* Category pill - clickable to filter */}
                      <div 
                        className="mb-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100/70 dark:bg-indigo-900/70 text-indigo-800 dark:text-indigo-200 cursor-pointer hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryChange(project.category);
                        }}
                      >
                        {project.category}
                      </div>
                      
                      {/* Tags with enhanced styling */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.slice(0, 2).map((tag, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              bg-indigo-100/80 dark:bg-indigo-900/80
                              text-indigo-800 dark:text-indigo-200
                              shadow-sm border border-indigo-200/50 dark:border-indigo-700/50"
                          >
                            <FiTag className="mr-1 w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center">
                            +{project.tags.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* Enhanced CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center px-8 py-4 rounded-lg font-medium
              bg-gradient-to-r from-indigo-600 to-purple-600 text-white
              shadow-lg border border-white/10 transform-gpu transition-all duration-300"
            whileHover={{ 
              y: -5, 
              boxShadow: '0 15px 30px rgba(99, 102, 241, 0.3)',
              scale: 1.02
            }}
            whileTap={{ y: 0, scale: 0.98 }}
          >
            View All Projects
            <FiArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
      
      {/* Modal with consistent image size */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetails}
          >
            <motion.div
              className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-auto shadow-2xl border border-white/20 dark:border-gray-700/50"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 z-20 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-between items-center">
                <motion.button
                  onClick={closeProjectDetails}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  whileHover={{ x: -3 }}
                >
                  <FiArrowRight className="mr-2 rotate-180" />
                  Back to Projects
                </motion.button>
                
                <div className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {selectedProject.category}
                </div>
              </div>
            
              {/* Hero image with fixed dimensions */}
              <div className="relative">
                <div className="h-96 w-full bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Enhanced overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                {/* Project title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                  <div className="max-w-4xl">
                    <div className="flex items-center mb-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${selectedProject.color} text-white shadow-lg backdrop-blur-sm border border-white/10 mr-3`}>
                        {selectedProject.type}
                      </span>
                      <span className="text-gray-300 text-sm">{selectedProject.category}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  </div>
                </div>
              </div>
              
              {/* Project content and details */}
              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  <div className="md:col-span-2">
                    <div className="space-y-10">
                      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-white/50 dark:border-gray-700/50">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Overview
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {selectedProject.description}
                          {/* Extended description */}
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nisl.
                        </p>
                      </div>
                      
                      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-white/50 dark:border-gray-700/50">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          The Challenge
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nisl.
                        </p>
                        
                        {/* Key challenges list */}
                        <div className="mt-6 space-y-3">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-start">
                              <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs mt-0.5 flex-shrink-0">{item}</span>
                              <p className="ml-3 text-gray-600 dark:text-gray-300">Challenge point {item} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    {/* Project details sidebar */}
                    <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg border border-white/50 dark:border-gray-700/50 sticky top-24">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">Project Details</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Category</h4>
                          <p className="text-gray-900 dark:text-white font-medium">{selectedProject.category}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Platforms</h4>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.devices.includes('desktop') && (
                              <div className="flex items-center bg-white/50 dark:bg-gray-700/50 px-3 py-1 rounded-full shadow-sm border border-white/50 dark:border-gray-600/50">
                                <FiMonitor className="mr-1 text-indigo-600 dark:text-indigo-400" /> Desktop
                              </div>
                            )}
                            {selectedProject.devices.includes('tablet') && (
                              <div className="flex items-center bg-white/50 dark:bg-gray-700/50 px-3 py-1 rounded-full shadow-sm border border-white/50 dark:border-gray-600/50">
                                <FiTablet className="mr-1 text-indigo-600 dark:text-indigo-400" /> Tablet
                              </div>
                            )}
                            {selectedProject.devices.includes('mobile') && (
                              <div className="flex items-center bg-white/50 dark:bg-gray-700/50 px-3 py-1 rounded-full shadow-sm border border-white/50 dark:border-gray-600/50">
                                <FiSmartphone className="mr-1 text-indigo-600 dark:text-indigo-400" /> Mobile
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map((tag, index) => (
                              <span 
                                key={index} 
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                  bg-indigo-100/80 dark:bg-indigo-900/80
                                  text-indigo-800 dark:text-indigo-200
                                  shadow-sm border border-indigo-200/50 dark:border-indigo-700/50"
                              >
                                <FiTag className="mr-1 w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <motion.a
                          href="#"
                          className={`inline-flex items-center w-full justify-center px-4 py-3 rounded-lg 
                            bg-gradient-to-r ${selectedProject.color} text-white font-medium 
                            shadow-lg shadow-indigo-600/20 border border-white/20`}
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Live Project <FiArrowRight className="ml-2" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;