import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { styles } from "../styles";
import { motion, useMotionValue, useSpring, useTransform, useAnimation, useReducedMotion } from "framer-motion";
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

// Mobile floating icons component with performance optimization
const FloatingTechIcons = React.memo(({ isMobile }) => {
  const icons = useMemo(() => ['⚛️', '🎨', '💻', '🚀', '⚡', '🌟'], []);
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className={`absolute ${isMobile ? 'text-lg' : 'text-2xl'} cursor-default select-none`}
          style={{
            left: `${15 + (index * 15)}%`,
            top: `${20 + (index % 3) * 25}%`,
          }}
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ 
            opacity: [0, 1, 0.7, 1],
            scale: [0, 1.2, 0.9, 1],
            y: [50, 0, -10, 0],
            rotate: shouldReduceMotion ? 0 : [0, 360, 0]
          }}
          transition={{
            duration: shouldReduceMotion ? 1 : 2 + index * 0.3,
            delay: 1 + index * 0.5,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.5, rotate: 180 }}
          role="img"
          aria-label={`Tech icon ${icon}`}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
});

// Mobile touch ripple effect with performance optimization
const TouchRipple = React.memo(({ x, y, isVisible }) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x - 25,
        top: y - 25,
        width: 50,
        height: 50,
        willChange: 'transform, opacity'
      }}
      initial={{ scale: 0, opacity: 0.8 }}
      animate={{ 
        scale: isVisible ? 4 : 0, 
        opacity: isVisible ? 0 : 0.8 
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full h-full rounded-full bg-electric-purple opacity-30" />
    </motion.div>
  );
});

// Enhanced mobile-optimized interactive background with performance improvements
const InteractiveBackground = React.memo(() => {
  // ALL HOOKS MUST BE CALLED UNCONDITIONALLY - FIXED ORDER
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [touchRipples, setTouchRipples] = useState([]);
  const shouldReduceMotion = useReducedMotion();
  const backgroundRef = useRef(null);

  // Smooth mouse tracking with reduced motion support - ALWAYS CALLED
  const springX = useSpring(mouseX, { stiffness: shouldReduceMotion ? 100 : 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: shouldReduceMotion ? 100 : 300, damping: 30 });

  // Performance-optimized mobile detection - ALWAYS CALLED
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // Enhanced touch ripple effect with performance optimization - ALWAYS CALLED
  const createTouchRipple = useCallback((e) => {
    if (!isMobile || shouldReduceMotion || !e.touches || !e.touches[0]) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    
    const rippleId = Date.now();
    setTouchRipples(prev => [...prev.slice(-2), { id: rippleId, x, y, isVisible: true }]); // Limit concurrent ripples
    
    setTimeout(() => {
      setTouchRipples(prev => prev.filter(ripple => ripple.id !== rippleId));
    }, 600);
  }, [isMobile, shouldReduceMotion]);

  // Performance-optimized mouse handlers - ALWAYS CALLED
  const handleMouseMove = useCallback((e) => {
    if (!isMobile && !shouldReduceMotion && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    }
  }, [isMobile, mouseX, mouseY, shouldReduceMotion]);

  // Touch handlers for mobile with performance optimization - ALWAYS CALLED
  const handleTouchMove = useCallback((e) => {
    if (isMobile && e.touches && e.touches[0] && !shouldReduceMotion && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.touches[0].clientX - rect.left) / rect.width);
      mouseY.set((e.touches[0].clientY - rect.top) / rect.height);
    }
  }, [isMobile, mouseX, mouseY, shouldReduceMotion]);

  // Detect mobile device with performance optimization - ALWAYS CALLED
  useEffect(() => {
    checkMobile();
    
    const debouncedResize = (() => {
      let timeoutId;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(checkMobile, 150);
      };
    })();
    
    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => window.removeEventListener('resize', debouncedResize);
  }, [checkMobile]);

  // Create dynamic particle system with performance optimization - ALWAYS CALLED
  useEffect(() => {
    const particleCount = shouldReduceMotion ? 0 : (isMobile ? 20 : 40); // Reduced count for better performance
    const particleArray = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: isMobile ? Math.random() * 2 + 1 : Math.random() * 3 + 1,
      speed: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setParticles(particleArray);
  }, [isMobile, shouldReduceMotion]);

  // Memoized geometric shapes to prevent unnecessary re-renders - ALWAYS CALLED
  const geometricShapes = useMemo(() => {
    if (shouldReduceMotion) return [];
    
    return [...Array(isMobile ? 4 : 6)].map((_, i) => ({
      id: i,
      size: isMobile ? Math.random() * 30 + 15 : Math.random() * 50 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * (isMobile ? 6 : 8) + (isMobile ? 4 : 6),
      delay: i * 0.7,
    }));
  }, [isMobile, shouldReduceMotion]);

  // Create transform values unconditionally - ALWAYS CALLED
  const transformX = useTransform(springX, [0, 1], [20, 80]);
  const transformY = useTransform(springY, [0, 1], [20, 80]);
  
  // Create orb transform values unconditionally - ALWAYS CALLED  
  const orbX1 = useTransform(springX, [0, 1], [-40, typeof window !== 'undefined' ? window.innerWidth : 1000]);
  const orbY1 = useTransform(springY, [0, 1], [-40, typeof window !== 'undefined' ? window.innerHeight : 600]);
  const orbX2 = useTransform(springX, [0, 1], [typeof window !== 'undefined' ? window.innerWidth : 1000, -40]);
  const orbY2 = useTransform(springY, [0, 1], [typeof window !== 'undefined' ? window.innerHeight : 600, -40]);

  return (
    <motion.div 
      ref={backgroundRef}
      className="absolute inset-0 z-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchStart={createTouchRipple}
      onTouchMove={handleTouchMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.5 : 2 }}
      style={{ contain: 'layout style paint' }} // Performance optimization
    >
      {/* Touch ripple effects for mobile */}
      {touchRipples.map(ripple => (
        <TouchRipple 
          key={ripple.id} 
          x={ripple.x} 
          y={ripple.y} 
          isVisible={ripple.isVisible} 
        />
      ))}

      {/* Dynamic gradient background - mobile optimized */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: isMobile || shouldReduceMotion
            ? `radial-gradient(circle at 50% 40%, 
                rgba(120, 80, 220, 0.5) 0%, 
                rgba(45, 10, 84, 0.7) 25%, 
                rgba(21, 4, 39, 0.9) 60%, 
                rgba(5, 8, 22, 1) 100%)`
            : `radial-gradient(circle at ${transformX}% ${transformY}%, 
                rgba(120, 80, 220, 0.4) 0%, 
                rgba(45, 10, 84, 0.6) 30%, 
                rgba(21, 4, 39, 0.9) 70%, 
                rgba(5, 8, 22, 1) 100%)`
        }}
      />

      {/* Floating tech icons for mobile */}
      {isMobile && <FloatingTechIcons isMobile={isMobile} />}

      {/* Performance-optimized floating geometric shapes */}
      <div className="absolute inset-0">
        {geometricShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute bg-electric-purple rounded-full opacity-20"
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              willChange: 'transform, opacity'
            }}
            animate={shouldReduceMotion ? {} : {
              y: [0, isMobile ? -15 : -25, 0],
              x: [0, Math.random() * (isMobile ? 20 : 30) - (isMobile ? 10 : 15), 0],
              scale: [1, isMobile ? 1.2 : 1.15, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={shouldReduceMotion ? {} : {
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Performance-optimized particle system */}
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
              willChange: 'transform, opacity'
            }}
            animate={shouldReduceMotion ? {} : {
              y: [0, isMobile ? -40 : -80, 0],
              opacity: [particle.opacity, 0.7, particle.opacity],
            }}
            transition={shouldReduceMotion ? {} : {
              duration: particle.speed * (isMobile ? 2.5 : 3.5),
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Animated mesh grid - simplified for mobile and reduced motion */}
      <motion.div
        className={`absolute inset-0 ${isMobile ? 'opacity-3' : 'opacity-8'} ${shouldReduceMotion ? 'opacity-5' : ''}`}
        animate={shouldReduceMotion ? {} : {
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={shouldReduceMotion ? {} : {
          duration: isMobile ? 40 : 25, // Slower on mobile to save battery
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(120, 80, 220, ${shouldReduceMotion ? '0.1' : isMobile ? '0.15' : '0.25'}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120, 80, 220, ${shouldReduceMotion ? '0.1' : isMobile ? '0.15' : '0.25'}) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? "25px 25px" : "40px 40px",
        }}
      />

      {/* Performance-optimized glowing orbs for desktop only */}
      {!isMobile && !shouldReduceMotion && (
        <>
          <motion.div
            className="absolute w-28 h-28 bg-electric-purple rounded-full opacity-15 blur-xl"
            style={{
              left: orbX1,
              top: orbY1,
              willChange: 'transform'
            }}
          />
          <motion.div
            className="absolute w-20 h-20 bg-white rounded-full opacity-10 blur-lg"
            style={{
              left: orbX2,
              top: orbY2,
              willChange: 'transform'
            }}
          />
        </>
      )}

      {/* Performance-optimized animated lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(120, 80, 220, 0)" />
            <stop offset="50%" stopColor={`rgba(120, 80, 220, ${shouldReduceMotion ? '0.3' : isMobile ? '0.4' : '0.6'})`} />
            <stop offset="100%" stopColor="rgba(120, 80, 220, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d={isMobile ? "M0,100 Q150,50 300,100 T600,100" : "M0,100 Q300,50 600,100 T1200,100"}
          stroke="url(#lineGradient)"
          strokeWidth={isMobile ? "1" : "2"}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={shouldReduceMotion ? 
            { pathLength: 1, opacity: isMobile ? 0.4 : 0.6 } :
            { pathLength: 1, opacity: isMobile ? 0.6 : 0.8 }
          }
          transition={shouldReduceMotion ? 
            { duration: 1 } :
            {
              duration: isMobile ? 4 : 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }
          }
        />
        {!isMobile && !shouldReduceMotion && (
          <motion.path
            d="M0,300 Q400,250 800,300 T1600,300"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          />
        )}
      </svg>
    </motion.div>
  );
});

const Hero = () => {
  const typewriterText = useTypewriter(`Hi, I'm ${personalInfo.name}`, 100);
  const heroRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Performance-optimized mobile detection
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // Detect mobile device with performance optimization
  useEffect(() => {
    checkMobile();
    
    const debouncedResize = (() => {
      let timeoutId;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(checkMobile, 150);
      };
    })();
    
    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => window.removeEventListener('resize', debouncedResize);
  }, [checkMobile]);

  // Track when component is loaded for better performance
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Performance-optimized intersection observer for triggering animations
  useEffect(() => {
    if (!heroRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start animation slightly before coming into view
      }
    );

    observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  // Enhanced mobile-optimized text animation variants with accessibility
  const textVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : (isMobile ? 20 : 30), 
      scale: shouldReduceMotion ? 1 : (isMobile ? 0.95 : 0.9) 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : (isMobile ? 0.6 : 0.8),
        ease: "easeOut",
        staggerChildren: shouldReduceMotion ? 0 : (isMobile ? 0.1 : 0.2),
      },
    },
  }), [isMobile, shouldReduceMotion]);

  const letterVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : (isMobile ? 20 : 30) 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0.2 : (isMobile ? 0.4 : 0.5) 
      },
    },
  }), [isMobile, shouldReduceMotion]);

  // Scroll handler for smooth navigation
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="hero-section group" 
      role="banner"
      aria-label="Hero section featuring Samprikta Sarkar"
    >
      {/* Interactive animated background */}
      {isLoaded && <InteractiveBackground />}

      {/* Enhanced mobile-optimized floating UI elements */}
      <motion.div
        className={`absolute ${isMobile ? 'top-24 left-4' : 'top-20 left-10'} z-10`}
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : (isMobile ? -30 : -50) }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          x: isInView ? 0 : (shouldReduceMotion ? 0 : (isMobile ? -30 : -50)) 
        }}
        transition={{ 
          duration: shouldReduceMotion ? 0.3 : (isMobile ? 0.6 : 1), 
          delay: shouldReduceMotion ? 0 : 0.5 
        }}
        role="status"
        aria-label="Availability status"
      >
        <div className={`bg-white bg-opacity-10 backdrop-blur-md rounded-full ${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} text-white border border-white border-opacity-20 transition-all duration-300 hover:bg-opacity-15 hover:scale-105`}>
          <span className={shouldReduceMotion ? '' : 'animate-pulse'} role="img" aria-label="rocket">🚀</span> 
          <span className="ml-1">Available for work</span>
        </div>
      </motion.div>

      {/* Enhanced main hero content with accessibility */}
      <div className={`${styles.paddingX} absolute inset-0 ${isMobile ? 'top-[100px]' : 'top-[120px]'} max-w-7xl mx-auto flex ${isMobile ? 'flex-col' : 'flex-row'} items-start gap-5 z-20`}>
        {/* Enhanced connector line with accessibility */}
        <motion.div 
          className={`flex ${isMobile ? 'flex-row justify-center w-full mb-4' : 'flex-col justify-center items-center mt-5'}`}
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            scale: isInView ? 1 : (shouldReduceMotion ? 1 : 0) 
          }}
          transition={{ 
            duration: shouldReduceMotion ? 0.3 : (isMobile ? 0.6 : 0.8), 
            delay: shouldReduceMotion ? 0 : 0.3 
          }}
          role="presentation"
          aria-hidden="true"
        >
          <motion.div 
            className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} rounded-full bg-electric-purple shadow-lg`}
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 20px rgba(120, 80, 220, 0.5)",
                "0 0 40px rgba(120, 80, 220, 0.8)",
                "0 0 20px rgba(120, 80, 220, 0.5)",
              ],
            }}
            transition={shouldReduceMotion ? {} : {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {!isMobile && (
            <motion.div 
              className="w-1 sm:h-80 h-40 violet-gradient"
              initial={{ height: 0 }}
              animate={{ height: isInView ? "auto" : 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0.5 : 1, 
                delay: shouldReduceMotion ? 0 : 0.5 
              }}
            />
          )}
          {isMobile && (
            <motion.div 
              className="h-1 w-20 violet-gradient ml-2"
              initial={{ width: 0 }}
              animate={{ width: isInView ? "5rem" : 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0.5 : 1, 
                delay: shouldReduceMotion ? 0 : 0.5 
              }}
            />
          )}
        </motion.div>

        {/* Enhanced text content with better accessibility */}
        <motion.div 
          className={`${isMobile ? 'w-full text-center' : 'flex-1'} hero-content relative`}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          role="main"
        >
          {/* Enhanced background glow effect */}
          <div 
            className={`absolute ${isMobile ? '-inset-2' : '-inset-4'} bg-gradient-to-r from-electric-purple via-transparent to-electric-purple opacity-20 blur-xl rounded-3xl`} 
            aria-hidden="true"
          />
          
          <motion.h1 
            className={`${styles.heroHeadText} text-white hero-text relative z-10 ${isMobile ? 'text-3xl sm:text-4xl leading-tight' : ''}`}
            variants={textVariants}
            role="heading"
            aria-level="1"
            tabIndex="0"
          >
            {typewriterText.startsWith("Hi, I'm") ? (
              <>
                <motion.span variants={letterVariants}>Hi, I'm</motion.span>{" "}
                <motion.span 
                  className="text-electric-purple bg-gradient-to-r from-electric-purple to-pink-500 bg-clip-text text-transparent"
                  variants={letterVariants}
                  animate={shouldReduceMotion ? {} : {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={shouldReduceMotion ? {} : {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  {typewriterText.slice(8)}
                  {typewriterText.length < `Hi, I'm ${personalInfo.name}`.length && !shouldReduceMotion && (
                    <motion.span 
                      className="animate-pulse text-electric-purple"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      aria-hidden="true"
                    >
                      |
                    </motion.span>
                  )}
                </motion.span>
              </>
            ) : (
              <>
                <motion.span variants={letterVariants}>{typewriterText}</motion.span>
                {typewriterText.length < `Hi, I'm ${personalInfo.name}`.length && !shouldReduceMotion && (
                  <motion.span 
                    className="animate-pulse text-electric-purple"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    aria-hidden="true"
                  >
                    |
                  </motion.span>
                )}
              </>
            )}
          </motion.h1>
          
          <motion.p 
            className={`${styles.heroSubText} text-white-100 ${isMobile ? 'mt-3 text-base sm:text-lg' : 'mt-2'} hero-text relative z-10`}
            variants={textVariants}
            animate={shouldReduceMotion ? {} : {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={shouldReduceMotion ? {} : {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            role="paragraph"
            tabIndex="0"
          >
            <motion.span
              className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              Innovative {personalInfo.role}, <br className={isMobile ? 'hidden' : 'sm:block hidden'} />
              building web and mobile applications
            </motion.span>
          </motion.p>

          {/* Enhanced CTA Buttons with better accessibility */}
          <motion.div 
            className={`flex ${isMobile ? 'flex-col space-y-3 mt-6' : 'gap-4 mt-8'}`}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            role="group"
            aria-label="Call to action buttons"
          >
            <motion.button
              className={`${isMobile ? 'w-full py-4' : 'px-8 py-3'} bg-electric-purple text-white rounded-full font-semibold relative overflow-hidden group transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50`}
              whileHover={shouldReduceMotion ? {} : { scale: isMobile ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about')}
              aria-label="Explore my work - Navigate to about section"
              type="button"
            >
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={shouldReduceMotion ? {} : { x: "0%" }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              />
            </motion.button>
            
            <motion.button
              className={`${isMobile ? 'w-full py-4' : 'px-8 py-3'} border-2 border-white text-white rounded-full font-semibold relative overflow-hidden group transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30`}
              whileHover={shouldReduceMotion ? {} : { scale: isMobile ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              aria-label="Get in touch - Navigate to contact section"
              type="button"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0 }}
                whileHover={shouldReduceMotion ? {} : { scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0.5, originY: 0.5 }}
                aria-hidden="true"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Profile Picture Section - Desktop with accessibility */}
      <motion.div 
        className="absolute top-[120px] right-[5%] xl:right-[8%] hidden lg:flex z-30"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0, rotate: shouldReduceMotion ? 0 : -180 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          scale: isInView ? 1 : (shouldReduceMotion ? 1 : 0), 
          rotate: isInView ? 0 : (shouldReduceMotion ? 0 : -180) 
        }}
        transition={{ 
          duration: shouldReduceMotion ? 0.5 : 1, 
          delay: shouldReduceMotion ? 0 : 0.8, 
          ease: "easeOut" 
        }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 5 }}
        role="img"
        aria-label="Samprikta Sarkar's profile picture"
      >
        <div className="relative group">
          {/* Animated border rings with accessibility */}
          {!shouldReduceMotion && (
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                background: "conic-gradient(from 0deg, transparent, #7850dc, transparent, #7850dc, transparent)",
                padding: "4px",
              }}
              aria-hidden="true"
            >
              <div className="w-full h-full rounded-full bg-primary" />
            </motion.div>
          )}
          
          <div className="profile-picture w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-electric-purple shadow-2xl bg-white backdrop-blur-sm relative z-10">
            <img 
              src="/samprikta-profile.jpg" 
              alt="Samprikta Sarkar - Full Stack Developer & AI/ML Engineer"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
              onLoad={() => console.log('Profile image loaded successfully')}
              onError={(e) => {
                console.log('Profile image failed to load');
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full bg-electric-purple flex items-center justify-center text-white text-6xl font-bold" role="img" aria-label="Samprikta Sarkar initial">S</div>';
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-electric-purple opacity-20 group-hover:opacity-30 transition-opacity duration-300" aria-hidden="true" />
          </div>
          
          {/* Floating tech icons with accessibility */}
          {['⚛️', '🔥', '⚡', '🚀', '💎', '🎯'].map((icon, index) => (
            <motion.div
              key={index}
              className="absolute w-12 h-12 bg-white bg-opacity-10 backdrop-blur-md rounded-full flex items-center justify-center text-xl border border-white border-opacity-20"
              style={{
                top: `${20 + index * 60}%`,
                left: index % 2 === 0 ? '-60px' : 'calc(100% + 20px)',
              }}
              animate={shouldReduceMotion ? {} : {
                y: [0, -10, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={shouldReduceMotion ? {} : {
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.3 }}
              role="img"
              aria-label={`Tech icon ${icon}`}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Profile Picture Section - Mobile with accessibility */}
      <motion.div 
        className="absolute top-[350px] right-[5%] lg:hidden z-30"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          scale: isInView ? 1 : (shouldReduceMotion ? 1 : 0) 
        }}
        transition={{ 
          duration: shouldReduceMotion ? 0.3 : 0.8, 
          delay: shouldReduceMotion ? 0 : 1 
        }}
        role="img"
        aria-label="Samprikta Sarkar's profile picture"
      >
        <div className="relative group">
          {!shouldReduceMotion && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-electric-purple"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
          )}
          
          <div className="profile-picture w-32 h-32 rounded-full overflow-hidden border-3 border-electric-purple shadow-xl bg-white backdrop-blur-sm">
            <img 
              src="/samprikta-profile.jpg" 
              alt="Samprikta Sarkar - Full Stack Developer & AI/ML Engineer"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              decoding="async"
              onLoad={() => console.log('Profile image loaded successfully (mobile)')}
              onError={(e) => {
                console.log('Profile image failed to load (mobile)');
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full bg-electric-purple flex items-center justify-center text-white text-2xl font-bold" role="img" aria-label="Samprikta Sarkar initial">S</div>';
              }}
            />
          </div>
          
          {/* Mobile floating elements with accessibility */}
          {['⚛️', '🚀', '💎'].map((icon, index) => (
            <motion.div
              key={index}
              className="absolute w-8 h-8 bg-white bg-opacity-10 backdrop-blur-md rounded-full flex items-center justify-center text-sm border border-white border-opacity-20"
              style={{
                top: `${20 + index * 40}%`,
                left: index % 2 === 0 ? '-40px' : 'calc(100% + 10px)',
              }}
              animate={shouldReduceMotion ? {} : {
                y: [0, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={shouldReduceMotion ? {} : {
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              role="img"
              aria-label={`Tech icon ${icon}`}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced interactive scroll indicator with accessibility */}
      <motion.div 
        className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center z-40"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : (shouldReduceMotion ? 0 : 30) 
        }}
        transition={{ 
          duration: shouldReduceMotion ? 0.3 : 0.8, 
          delay: shouldReduceMotion ? 0 : 1.2 
        }}
      >
        <motion.a 
          href="#about"
          className="group cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50 rounded-full"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
          aria-label="Scroll down to explore more content"
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToSection('about');
            }
          }}
        >
          <div className="scroll-indicator w-[35px] h-[64px] rounded-3xl border-4 border-secondary bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-start p-2 group-hover:bg-opacity-30 transition-all duration-300 relative overflow-hidden">
            {/* Glowing effect */}
            {!shouldReduceMotion && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-electric-purple to-transparent opacity-0 group-hover:opacity-30"
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                aria-hidden="true"
              />
            )}
            
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 24, 0] }}
              transition={shouldReduceMotion ? {} : {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 shadow-lg relative z-10"
              aria-hidden="true"
            />
          </div>
          
          {/* Scroll hint text with accessibility */}
          <motion.p
            className="text-white text-xs mt-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            animate={shouldReduceMotion ? {} : { opacity: [0.7, 1, 0.7] }}
            transition={shouldReduceMotion ? {} : {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            role="complementary"
            aria-hidden="true"
          >
            Scroll to explore
          </motion.p>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
