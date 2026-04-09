'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Cpu, Smartphone, Play, Globe, Building2, GraduationCap, 
  Cloud, Zap, Code, Laptop, Brain, Shield, Anchor, 
  Database, Fingerprint, Layers, Layout, Mail, Map, 
  Music, Phone, Radio, Settings, Sparkles, Activity, 
  Cctv, Cpu as CpuIcon, Microchip, Server
} from 'lucide-react';

const logos = [
  { name: "Creators Mind", icon: <Sparkles size={24} />, special: true },
  { name: "Google", icon: <Building2 size={24} /> },
  { name: "Microsoft", icon: <Cloud size={24} /> },
  { name: "Amazon", icon: <Cpu size={24} /> },
  { name: "Tesla", icon: <Zap size={24} /> },
  { name: "Apple", icon: <Laptop size={24} /> },
  { name: "Meta", icon: <Code size={24} /> },
  { name: "Netflix", icon: <Play size={24} /> },
  { name: "Samsung", icon: <Smartphone size={24} /> },
  { name: "Uber", icon: <Globe size={24} /> },
  { name: "OpenAI", icon: <Brain size={24} /> },
  { name: "MIT", icon: <GraduationCap size={24} /> },
  { name: "Adobe", icon: <Layout size={24} /> },
  { name: "Spotify", icon: <Music size={24} /> },
  { name: "Stripe", icon: <Shield size={24} /> },
  { name: "Airbnb", icon: <Map size={24} /> },
  { name: "SpaceX", icon: <Anchor size={24} /> },
  { name: "Intel", icon: <Database size={24} /> },
  { name: "IBM", icon: <Fingerprint size={24} /> },
  { name: "Oracle", icon: <Layers size={24} /> },
  { name: "Slack", icon: <Mail size={24} /> },
  { name: "Nvidia", icon: <Activity size={24} /> },  // Changed from Microscope to Activity
  { name: "Sony", icon: <Phone size={24} /> },
  { name: "Twitter", icon: <Radio size={24} /> },
  { name: "Cisco", icon: <Settings size={24} /> },
];

export default function LogoSlider() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [duplicatedLogos, setDuplicatedLogos] = useState([...logos, ...logos]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Responsive settings
  const getAnimationDuration = () => {
    if (isMobile) return 25;
    if (isTablet) return 35;
    return 45;
  };

  const getGapSize = () => {
    if (isMobile) return "gap-3";
    if (isTablet) return "gap-5";
    return "gap-6 lg:gap-8";
  };

  const getPaddingSize = () => {
    if (isMobile) return "px-3 py-2";
    if (isTablet) return "px-4 py-3";
    return "px-5 lg:px-6 py-3 lg:py-4";
  };

  const getIconSize = () => {
    if (isMobile) return "w-4 h-4";
    if (isTablet) return "w-5 h-5";
    return "w-6 h-6";
  };

  const getTextSize = () => {
    if (isMobile) return "text-xs";
    if (isTablet) return "text-sm";
    return "text-base lg:text-lg";
  };

  return (
    <div className="w-full bg-white dark:bg-black py-12 sm:py-16 md:py-20 overflow-hidden border-y border-gray-100 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em]">
            Empowering Students at Global Giants
          </p>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </div>
        
        <div className="relative flex items-center">
          {/* Gradient Overlays for Fade Effect - Responsive width */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-20 pointer-events-none" />

          {/* Framer Motion Slider */}
          <motion.div 
            className={`flex ${getGapSize()} items-center`}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: getAnimationDuration(),
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={idx}
                className={`
                  flex items-center gap-2 sm:gap-3 md:gap-4 ${getPaddingSize()} rounded-xl sm:rounded-2xl border transition-all duration-300 flex-shrink-0
                  ${logo.special 
                    ? "bg-amber-500/10 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]" 
                    : "bg-gray-50 dark:bg-white/[0.03] border-transparent hover:border-gray-200 dark:hover:border-white/10"
                  }
                `}
              >
                <div className={`${logo.special ? "text-amber-500" : "text-gray-500 dark:text-gray-400"}`}>
                  {React.cloneElement(logo.icon as React.ReactElement, { 
                    className: `${getIconSize()} ${logo.special ? "text-amber-500" : "text-gray-500 dark:text-gray-400"}`
                  })}
                </div>
                <span className={`
                  ${getTextSize()} font-bold whitespace-nowrap tracking-tight
                  ${logo.special ? "text-amber-600 dark:text-amber-400" : "text-gray-700 dark:text-gray-300"}
                `}>
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="text-center mt-6 sm:mt-8 md:hidden">
          <p className="text-[10px] text-gray-400 animate-pulse">
            ← Scroll to see more →
          </p>
        </div>
      </div>
    </div>
  );
}