import React from "react";
import { motion } from "framer-motion";
import { personalInfo, publicUrls } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      className="bg-primary relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-20 h-20 bg-electric-purple opacity-5 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 right-10 w-16 h-16 bg-secondary opacity-5 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Animated divider line */}
        <motion.div
          variants={lineVariants}
          className="h-[1px] bg-gradient-to-r from-transparent via-electric-purple to-transparent mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left section - Name and role */}
          <motion.div variants={textVariants} className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              {personalInfo.fullName}
            </h3>
            <p className="text-secondary text-lg">{personalInfo.role}</p>
            <motion.p
              variants={textVariants}
              className="text-secondary text-sm mt-2"
            >
              Building the future with AI & Technology
            </motion.p>
          </motion.div>

          {/* Center section - Social links */}
          <motion.div
            variants={textVariants}
            className="flex justify-center space-x-6"
          >
            {Object.keys(publicUrls.socialProfiles).map((key, index) => {
              const profile = publicUrls.socialProfiles[key];
              return (
                <motion.a
                  key={profile.title}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center group-hover:bg-electric-purple transition-colors duration-300">
                    <img
                      src={profile.icon}
                      alt={profile.title}
                      className="w-6 h-6 object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 capitalize">
                    {profile.title}
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right section - Contact info */}
          <motion.div variants={textVariants} className="text-center md:text-right">
            <p className="text-secondary text-sm">Get In Touch</p>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="text-white hover:text-electric-purple transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.email}
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          variants={textVariants}
          className="mt-8 pt-6 border-t border-gray-800 text-center"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <motion.p
              className="text-secondary text-sm"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} {personalInfo.fullName}. All rights reserved.
            </motion.p>
            
            <motion.p
              className="text-secondary text-sm"
              whileHover={{ 
                scale: 1.05,
                color: "#915eff"
              }}
              transition={{ duration: 0.2 }}
            >
              Made with ❤️ by{" "}
              <span className="text-electric-purple font-semibold">
                Ayush Upadhyay
              </span>
            </motion.p>
          </div>
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-electric-purple rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
