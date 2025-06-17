import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
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

const Hero = () => {
  const typewriterText = useTypewriter(`Hi, I'm ${personalInfo.name}`, 100);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
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
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Innovative {personalInfo.role}, <br className="sm:block hidden" />
            building web and mobile applications
          </p>
        </div>
      </div>

      {/* Profile Picture Section - Desktop */}
      <div className="absolute top-[120px] right-[10%] hidden lg:flex">
        <div className="relative">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-electric-purple shadow-2xl">
            <img 
              src="/samprikta-profile.jpg" 
              alt="Samprikta Sarkar"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-purple rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-electric-purple rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 -left-8 w-4 h-4 bg-electric-purple rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Profile Picture Section - Mobile */}
      <div className="absolute top-[300px] right-[5%] lg:hidden">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-3 border-electric-purple shadow-xl">
            <img 
              src="/samprikta-profile.jpg" 
              alt="Samprikta Sarkar"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Smaller decorative elements for mobile */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-electric-purple rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-electric-purple rounded-full animate-pulse delay-300"></div>
        </div>
      </div>

      <ComputersCanvas />
      
      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
