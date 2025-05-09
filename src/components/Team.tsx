import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  FiLinkedin, 
  FiTwitter, 
  FiGlobe, 
  FiMail, 
  FiArrowRight, 
  FiX,
  FiCheck,
  FiStar,
  FiAward,
  FiBriefcase,
  FiCode
} from 'react-icons/fi';

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Lead UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Alex has over 10 years of experience crafting digital experiences for global brands. He specializes in creating intuitive interfaces that balance aesthetics with functionality.",
    skills: ["UI Design", "UX Research", "Design Systems", "Figma", "Adobe CC"],
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      website: "https://example.com"
    },
    color: "from-blue-400 to-indigo-600",
    keyAchievement: "Led redesign of Fortune 500 banking app",
    yearsExperience: 10
  },
  {
    id: 2,
    name: "Sofia Rodriguez",
    role: "Senior UX Researcher",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Sofia leads our user research initiatives, transforming user insights into actionable design decisions. Her background in cognitive psychology brings a unique perspective to our team.",
    skills: ["User Testing", "Interviews", "Heuristic Evaluation", "Data Analysis", "Prototyping"],
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      website: "https://example.com"
    },
    color: "from-pink-400 to-purple-600",
    keyAchievement: "Reduced user errors by 72% through research",
    yearsExperience: 8
  },
  {
    id: 3,
    name: "Michael Chang",
    role: "Interaction Designer",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    bio: "Michael creates engaging and intuitive interaction patterns that delight users. He brings motion and life to our designs through thoughtful animations and transitions.",
    skills: ["Interaction Design", "Animation", "Prototyping", "React", "After Effects"],
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      website: "https://example.com"
    },
    color: "from-cyan-400 to-blue-600",
    keyAchievement: "Award-winning microinteractions system",
    yearsExperience: 6
  },
  {
    id: 4,
    name: "Emily Parker",
    role: "UI Designer",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    bio: "Emily creates beautiful and functional interfaces with an eye for detail and a passion for typography. Her work has been recognized by several design awards.",
    skills: ["Visual Design", "Typography", "Branding", "Sketch", "Illustrator"],
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      website: "https://example.com"
    },
    color: "from-amber-400 to-orange-600",
    keyAchievement: "Created design system used by 40+ products",
    yearsExperience: 7
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Design Lead",
    image: "https://randomuser.me/api/portraits/men/92.jpg",
    bio: "James guides our design vision and strategy, ensuring all our work aligns with business goals while delivering exceptional user experiences. He's led redesigns for Fortune 500 companies.",
    skills: ["Design Strategy", "Team Leadership", "Client Relations", "Design Thinking", "Workshop Facilitation"],
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      website: "https://example.com"
    },
    color: "from-emerald-400 to-teal-600",
    keyAchievement: "Increased client conversion rates by 45%",
    yearsExperience: 12
  },
  {
    id: 6,
    name: "Aisha Patel",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    bio: "Aisha bridges the gap between design and product, working closely with developers to ensure design implementation is flawless. She has a background in both design and front-end development.",
    skills: ["Product Design", "Design Systems", "Frontend Development", "Figma", "React"],
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      website: "https://example.com"
    },
    color: "from-violet-400 to-purple-600",
    keyAchievement: "Launched 12 successful products in 2 years",
    yearsExperience: 5
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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<null | typeof teamMembers[number]>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleCardExpand = (id: number) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  const openMemberDetail = (member: typeof teamMembers[number]) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden";
  };

  const closeMemberDetail = () => {
    setSelectedMember(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="team" ref={sectionRef} className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/3 -right-24 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-md text-indigo-600 dark:text-indigo-400 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
            Our Creative Team
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Talent</span> Behind Our Success
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 mx-auto">
            Our diverse team of designers, researchers, and strategists are passionate about creating exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              className="h-full"
              variants={itemVariants}
            >
              <motion.div 
                className={`relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 ${
                  expandedCard === member.id ? 'ring-2 ring-indigo-500/50 dark:ring-indigo-400/50' : ''
                }`}
                whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                layoutId={`member-card-${member.id}`}
              >
                {/* Top gradient bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${member.color}`}></div>
                
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-lg">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-0.5">
                        <div className="bg-white dark:bg-gray-800 rounded-full flex items-center justify-center w-5 h-5">
                          <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold">{member.yearsExperience}y</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {member.social.linkedin && (
                        <motion.a 
                          href={member.social.linkedin} 
                          className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
                          whileHover={{ y: -2 }}
                        >
                          <FiLinkedin size={18} />
                        </motion.a>
                      )}
                      {member.social.twitter && (
                        <motion.a 
                          href={member.social.twitter} 
                          className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
                          whileHover={{ y: -2 }}
                        >
                          <FiTwitter size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${member.color} text-white mt-1`}>
                      {member.role}
                    </div>
                  </div>
                  
                  {/* Key achievement badge */}
                  <div className="mb-3 flex items-center">
                    <div className="mr-2 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                      <FiAward className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{member.keyAchievement}</span>
                  </div>
                  
                  <p className={`text-gray-600 dark:text-gray-300 text-sm ${
                    expandedCard === member.id ? '' : 'line-clamp-3'
                  }`}>
                    {member.bio}
                  </p>
                  
                  {/* Skills */}
                  <div className="mt-4 flex-grow">
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.slice(0, expandedCard === member.id ? undefined : 3).map((skill, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium
                            bg-indigo-50 dark:bg-indigo-900/30
                            text-indigo-700 dark:text-indigo-300
                            border border-indigo-100 dark:border-indigo-800/50"
                        >
                          <FiCheck className="mr-1 w-3 h-3" />
                          {skill}
                        </span>
                      ))}
                      {expandedCard !== member.id && member.skills.length > 3 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                          +{member.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <motion.button
                      onClick={() => handleCardExpand(member.id)}
                      className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {expandedCard === member.id ? 'Show less' : 'Show more'}
                    </motion.button>
                    
                    <motion.button
                      onClick={() => openMemberDetail(member)}
                      className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Profile <FiArrowRight className="ml-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-24 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
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
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Want to Join Our Creative Team?</h3>
                <p className="text-indigo-100">We're always looking for talented designers and developers who are passionate about creating exceptional experiences.</p>
              </div>
              <motion.a 
                href="#careers" 
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  x: 5
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Open Positions
                <FiArrowRight className="ml-2" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced member detail modal with animations */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMemberDetail}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl border border-white/20 dark:border-gray-700/50"
              layoutId={`member-detail-${selectedMember.id}`}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header with gradient */}
              <div className={`h-3 w-full bg-gradient-to-r ${selectedMember.color}`}></div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="h-28 w-28 rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={selectedMember.image} 
                          alt={selectedMember.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-0.5">
                        <div className="bg-white dark:bg-gray-800 rounded-full flex items-center justify-center w-7 h-7">
                          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{selectedMember.yearsExperience}y</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedMember.name}</h2>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${selectedMember.color} text-white mb-3`}>
                          {selectedMember.role}
                        </div>
                      </div>
                      <motion.button 
                        onClick={closeMemberDetail}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        whileHover={{ rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiX className="w-5 h-5" />
                      </motion.button>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300">{selectedMember.bio}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <FiStar className="mr-2 text-indigo-600 dark:text-indigo-400" /> 
                        Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-lg text-sm shadow-sm border border-gray-100 dark:border-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <FiBriefcase className="mr-2 text-indigo-600 dark:text-indigo-400" /> 
                        Key Achievement
                      </h3>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm">
                        <p className="text-gray-800 dark:text-gray-200">{selectedMember.keyAchievement}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <FiCode className="mr-2 text-indigo-600 dark:text-indigo-400" /> 
                        Working Process
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex">
                          <div className="mr-3 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">1</div>
                          <div className="text-gray-700 dark:text-gray-300">Research & discovery phase</div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">2</div>
                          <div className="text-gray-700 dark:text-gray-300">Sketching & concept development</div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">3</div>
                          <div className="text-gray-700 dark:text-gray-300">Prototyping & user testing</div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">4</div>
                          <div className="text-gray-700 dark:text-gray-300">Design refinement & handoff</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <FiMail className="mr-2 text-indigo-600 dark:text-indigo-400" /> 
                        Connect
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedMember.social.linkedin && (
                          <motion.a 
                            href={selectedMember.social.linkedin} 
                            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border border-gray-100 dark:border-gray-600 transition-colors"
                            whileHover={{ y: -2 }}
                          >
                            <FiLinkedin className="text-indigo-600 dark:text-indigo-400" size={18} /> LinkedIn
                          </motion.a>
                        )}
                        {selectedMember.social.twitter && (
                          <motion.a 
                            href={selectedMember.social.twitter} 
                            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border border-gray-100 dark:border-gray-600 transition-colors"
                            whileHover={{ y: -2 }}
                          >
                            <FiTwitter className="text-indigo-600 dark:text-indigo-400" size={18} /> Twitter
                          </motion.a>
                        )}
                        {selectedMember.social.website && (
                          <motion.a 
                            href={selectedMember.social.website} 
                            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border border-gray-100 dark:border-gray-600 transition-colors"
                            whileHover={{ y: -2 }}
                          >
                            <FiGlobe className="text-indigo-600 dark:text-indigo-400" size={18} /> Website
                          </motion.a>
                        )}
                        <motion.a 
                          href={`mailto:${selectedMember.name.toLowerCase().replace(' ', '.')}@example.com`} 
                          className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border border-gray-100 dark:border-gray-600 transition-colors"
                          whileHover={{ y: -2 }}
                        >
                          <FiMail className="text-indigo-600 dark:text-indigo-400" size={18} /> Email
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <motion.button
                    onClick={closeMemberDetail}
                    className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Close Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;