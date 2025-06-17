import React, { useState, useEffect, useRef } from "react";
import { styles } from "../styles";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

// Advanced animated background with interactive elements
const InteractiveBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [particles, setParticles] = useState([]);

  // Smooth mouse tracking
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Create dynamic particle system
  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(particleArray);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div 
      className="absolute inset-0 z-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${useTransform(springX, [0, 1], [20, 80])}% ${useTransform(springY, [0, 1], [20, 80])}%, 
            rgba(120, 80, 220, 0.4) 0%, 
            rgba(45, 10, 84, 0.6) 30%, 
            rgba(21, 4, 39, 0.9) 70%, 
            rgba(5, 8, 22, 1) 100%)`
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-electric-purple rounded-full opacity-20"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Interactive particle system */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [particle.opacity, 0.8, particle.opacity],
            }}
            transition={{
              duration: particle.speed * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Animated mesh grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(120, 80, 220, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120, 80, 220, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glowing orbs that follow mouse */}
      <motion.div
        className="absolute w-32 h-32 bg-electric-purple rounded-full opacity-20 blur-xl"
        style={{
          left: useTransform(springX, [0, 1], [-50, window.innerWidth || 1000]),
          top: useTransform(springY, [0, 1], [-50, window.innerHeight || 600]),
        }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-white rounded-full opacity-15 blur-lg"
        style={{
          left: useTransform(springX, [0, 1], [window.innerWidth || 1000, -50]),
          top: useTransform(springY, [0, 1], [window.innerHeight || 600, -50]),
        }}
      />

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(120, 80, 220, 0)" />
            <stop offset="50%" stopColor="rgba(120, 80, 220, 0.6)" />
            <stop offset="100%" stopColor="rgba(120, 80, 220, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,100 Q300,50 600,100 T1200,100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,300 Q400,250 800,300 T1600,300"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
    </motion.div>
  );
};

const Hero = () => {
  const typewriterText = useTypewriter(`Hi, I'm ${personalInfo.name}`, 100);
  const heroRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={heroRef} className="hero-section group">
      {/* Interactive animated background */}
      <InteractiveBackground />

      {/* Floating UI elements */}
      <motion.div
        className="absolute top-20 left-10 z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm border border-white border-opacity-20">
          <span className="animate-pulse">🚀</span> Available for work
        </div>
      </motion.div>

      {/* Main hero content with advanced animations */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-20`}>
        {/* Animated connector line */}
        <motion.div 
          className="flex flex-col justify-center items-center mt-5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="w-5 h-5 rounded-full bg-electric-purple shadow-lg"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 20px rgba(120, 80, 220, 0.5)",
                "0 0 40px rgba(120, 80, 220, 0.8)",
                "0 0 20px rgba(120, 80, 220, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="w-1 sm:h-80 h-40 violet-gradient"
            initial={{ height: 0 }}
            animate={{ height: isInView ? "auto" : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Enhanced text content */}
        <motion.div 
          className="flex-1 hero-content relative"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Background glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-electric-purple via-transparent to-electric-purple opacity-20 blur-xl rounded-3xl" />
          
          <motion.h1 
            className={`${styles.heroHeadText} text-white hero-text relative z-10`}
            variants={textVariants}
          >
            {typewriterText.startsWith("Hi, I'm") ? (
              <>
                <motion.span variants={letterVariants}>Hi, I'm</motion.span>{" "}
                <motion.span 
                  className="text-electric-purple bg-gradient-to-r from-electric-purple to-pink-500 bg-clip-text text-transparent"
                  variants={letterVariants}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  {typewriterText.slice(8)}
                  {typewriterText.length < `Hi, I'm ${personalInfo.name}`.length && (
                    <motion.span 
                      className="animate-pulse text-electric-purple"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  )}
                </motion.span>
              </>
            ) : (
              <>
                <motion.span variants={letterVariants}>{typewriterText}</motion.span>
                {typewriterText.length < `Hi, I'm ${personalInfo.name}`.length && (
                  <motion.span 
                    className="animate-pulse text-electric-purple"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                )}
              </>
            )}
          </motion.h1>
          
          <motion.p 
            className={`${styles.heroSubText} text-white-100 mt-2 hero-text relative z-10`}
            variants={textVariants}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.span
              className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              Innovative {personalInfo.role}, <br className="sm:block hidden" />
              building web and mobile applications
            </motion.span>
          </motion.p>

          {/* CTA Buttons with hover effects */}
          <motion.div 
            className="flex gap-4 mt-8"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.button
              className="px-8 py-3 bg-electric-purple text-white rounded-full font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0.5, originY: 0.5 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Profile Picture Section - Desktop */}
      <motion.div 
        className="absolute top-[120px] right-[5%] xl:right-[8%] hidden lg:flex z-30"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          scale: isInView ? 1 : 0, 
          rotate: isInView ? 0 : -180 
        }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 5 }}
      >
        <div className="relative group">
          {/* Animated border rings */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              background: "conic-gradient(from 0deg, transparent, #7850dc, transparent, #7850dc, transparent)",
              padding: "4px",
            }}
          >
            <div className="w-full h-full rounded-full bg-primary" />
          </motion.div>
          
          <div className="profile-picture w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-electric-purple shadow-2xl bg-white backdrop-blur-sm relative z-10">
            <img 
              src="/samprikta-profile.jpg" 
              alt="Samprikta Sarkar"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              onLoad={() => console.log('Profile image loaded successfully')}
              onError={(e) => {
                console.log('Profile image failed to load');
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full bg-electric-purple flex items-center justify-center text-white text-6xl font-bold">S</div>';
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-electric-purple opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
          </div>
          
          {/* Floating tech icons */}
          {['⚛️', '🔥', '⚡', '🚀', '💎', '🎯'].map((icon, index) => (
            <motion.div
              key={index}
              className="absolute w-12 h-12 bg-white bg-opacity-10 backdrop-blur-md rounded-full flex items-center justify-center text-xl border border-white border-opacity-20"
              style={{
                top: `${20 + index * 60}%`,
                left: index % 2 === 0 ? '-60px' : 'calc(100% + 20px)',
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
              whileHover={{ scale: 1.3 }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Profile Picture Section - Mobile */}
      <motion.div 
        className="absolute top-[350px] right-[5%] lg:hidden z-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="relative group">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-electric-purple"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="profile-picture w-32 h-32 rounded-full overflow-hidden border-3 border-electric-purple shadow-xl bg-white backdrop-blur-sm">
            <img 
              src="/samprikta-profile.jpg" 
              alt="Samprikta Sarkar"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
              onLoad={() => console.log('Profile image loaded successfully (mobile)')}
              onError={(e) => {
                console.log('Profile image failed to load (mobile)');
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full bg-electric-purple flex items-center justify-center text-white text-2xl font-bold">S</div>';
              }}
            />
          </div>
          
          {/* Mobile floating elements */}
          {['⚛️', '🚀', '💎'].map((icon, index) => (
            <motion.div
              key={index}
              className="absolute w-8 h-8 bg-white bg-opacity-10 backdrop-blur-md rounded-full flex items-center justify-center text-sm border border-white border-opacity-20"
              style={{
                top: `${20 + index * 40}%`,
                left: index % 2 === 0 ? '-40px' : 'calc(100% + 10px)',
              }}
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interactive scroll indicator */}
      <motion.div 
        className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center z-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.a 
          href="#about"
          className="group cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="scroll-indicator w-[35px] h-[64px] rounded-3xl border-4 border-secondary bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-start p-2 group-hover:bg-opacity-30 transition-all duration-300 relative overflow-hidden">
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-electric-purple to-transparent opacity-0 group-hover:opacity-30"
              initial={{ y: "100%" }}
              animate={{ y: "-100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 shadow-lg relative z-10"
            />
          </div>
          
          {/* Scroll hint text */}
          <motion.p
            className="text-white text-xs mt-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Scroll to explore
          </motion.p>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
