import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const useTypewriter = (text, speed = 150) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};

// Animated background component to replace 3D model
const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-gradient-to-br from-primary via-black-100 to-tertiary">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-electric-purple rounded-full opacity-20"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-white rounded-full opacity-10"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-electric-purple rounded-full opacity-15"
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-8 h-8 bg-white rounded-full opacity-20"
          animate={{
            y: [10, -10, 10],
            x: [-5, 5, -5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Animated lines and patterns */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-purple to-transparent opacity-30"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,80,220,0.3),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const typewriterText = useTypewriter(`Hi, I'm ${personalInfo.name}`, 100);

  return (
    <section className="hero-section">
      {/* Always visible background with gradient overlay */}
      <div className="absolute inset-0 gradient-overlay z-0"></div>
      
      {/* Animated Background instead of 3D model */}
      <AnimatedBackground />

      {/* Main hero content with enhanced visibility */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-20`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple shadow-lg" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1 hero-content">
          <h1 className={`${styles.heroHeadText} text-white hero-text`}>
            {typewriterText.startsWith("Hi, I'm") ? (
              <>
                Hi, I'm{" "}
                <span className="text-electric-purple">
                  {typewriterText.slice(8)}
                  {typewriterText.length < `Hi, I'm ${personalInfo.name}`.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </span>
              </>
            ) : (
              <>
                {typewriterText}
                {typewriterText.length < `Hi, I'm ${personalInfo.name}`.length && (
                  <span className="animate-pulse text-electric-purple">|</span>
                )}
              </>
            )}
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 hero-text`}>
            Innovative {personalInfo.role}, <br className="sm:block hidden" />
            building web and mobile applications
          </p>
        </div>
      </div>

      {/* Profile Picture Section - Desktop */}
      <div className="absolute top-[120px] right-[5%] xl:right-[8%] hidden lg:flex z-30 hero-float">
        <div className="relative">
          <div className="profile-picture w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-electric-purple shadow-2xl bg-white backdrop-blur-sm">
            <img 
              src="/samprikta-profile.jpg" 
              alt="Samprikta Sarkar"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
              onLoad={() => console.log('Profile image loaded successfully')}
              onError={(e) => {
                console.log('Profile image failed to load');
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full bg-electric-purple flex items-center justify-center text-white text-6xl font-bold hero-float">S</div>';
              }}
            />
          </div>
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-4 -right-4 w-8 h-8 bg-electric-purple rounded-full shadow-lg"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-electric-purple rounded-full shadow-lg"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div 
            className="absolute top-1/2 -left-8 w-4 h-4 bg-electric-purple rounded-full shadow-lg"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </div>

      {/* Profile Picture Section - Mobile */}
      <div className="absolute top-[350px] right-[5%] lg:hidden z-30 hero-float-delayed">
        <div className="relative">
          <div className="profile-picture w-32 h-32 rounded-full overflow-hidden border-3 border-electric-purple shadow-xl bg-white backdrop-blur-sm">
            <img 
              src="/samprikta-profile.jpg" 
              alt="Samprikta Sarkar"
              className="w-full h-full object-cover object-center"
              onLoad={() => console.log('Profile image loaded successfully (mobile)')}
              onError={(e) => {
                console.log('Profile image failed to load (mobile)');
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full bg-electric-purple flex items-center justify-center text-white text-2xl font-bold">S</div>';
              }}
            />
          </div>
          {/* Smaller decorative elements for mobile */}
          <motion.div 
            className="absolute -top-2 -right-2 w-4 h-4 bg-electric-purple rounded-full shadow-lg"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-electric-purple rounded-full shadow-lg"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
        </div>
      </div>

      {/* Scroll indicator with enhanced styling */}
      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center z-40">
        <a href="#about">
          <div className="scroll-indicator w-[35px] h-[64px] rounded-3xl border-4 border-secondary bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-start p-2 hover:bg-opacity-30 transition-all duration-300">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 shadow-lg"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
